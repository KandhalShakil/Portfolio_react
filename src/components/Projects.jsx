import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = useCallback((index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'React portfolio showcasing projects and technical expertise with modern animations',
      image: '/profile.jpg',
      tags: ['React', 'Framer Motion', 'Responsive', 'CSS3'],
      liveLink: 'https://www.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Portfolio_react'
    },
    {
      title: 'Kandhal Invoice System',
      description: 'Full-featured invoice management system with PDF generation and client tracking',
      image: 'https://github.com/KandhalShakil/Invoice_system/blob/main/static/pic.png?raw=true',
      tags: ['Python', 'Django', 'PDF Generation', 'JavaScript'],
      liveLink: 'https://www.invoice.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Invoice_system'
    },
    {
      title: 'SKY Event',
      description: 'Responsive event management and promotion website with modern design',
      image: 'https://github.com/KandhalShakil/Sky_Event/blob/main/logo.jpg?raw=true',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      liveLink: 'https://sky-event.vercel.app/',
      codeLink: 'https://github.com/KandhalShakil/Sky_Event'
    },
    {
      title: 'SchemeSnap AI',
      description: 'AI platform to simplify scheme details, check eligibility, and generate multilingual action plans.',
      image: 'https://raw.githubusercontent.com/KandhalShakil/SchemeSnap-AI/71662c6fdf917cd0d2d17facba3512e861b0af48/frontend/public/favicon.svg',
      tags: ['Python', 'Django', 'DRF', 'React', 'Vite', 'Groq AI'],
      liveLink: 'https://www.schemesnap-ai.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/SchemeSnap-AI'
    },
    {
      title: 'Weather Dashboard',
      description: 'Full-stack weather dashboard with real-time conditions, AQI insights, and forecast tracking.',
      image: 'https://raw.githubusercontent.com/KandhalShakil/Weather-Intelligence-Dashboard/80b25fc9e7ff3ca99b0e6d9352564febc5b6996a/frontend/favicon.svg',
      tags: ['.NET', 'C#', 'HTML', 'JavaScript', 'OpenWeather API'],
      liveLink: 'https://www.weather-intelligence-dashboard.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Weather-Intelligence-Dashboard'
    },
    {
      title: 'Sorting Algorithm Performance Analyzer',
      description: 'Interactive analyzer to compare sorting algorithms using execution time, comparisons, and swaps.',
      image: 'https://opengraph.githubassets.com/1/KandhalShakil/Sorting-Algorithm-Performance-Analyzer',
      tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms', 'Performance API'],
      liveLink: 'http://sorting-algorithm-performance-analyzer.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Sorting-Algorithm-Performance-Analyzer'
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="projects-label">MY WORK</div>
          <h2 className="projects-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="projects-subtitle">Building solutions that matter</p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image">
                {(project.image.startsWith('http') || project.image.startsWith('/')) ? (
                  <>
                    {!imageLoaded[index] && (
                      <div className="image-skeleton">
                        <div className="skeleton-shimmer"></div>
                      </div>
                    )}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`project-img ${imageLoaded[index] ? 'loaded' : ''}`}
                      onLoad={() => handleImageLoad(index)}
                      loading="lazy"
                    />
                  </>
                ) : (
                  <span className="emoji-icon">{project.image}</span>
                )}
                <div className="project-overlay">
                  <div className="overlay-links">
                    {project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-btn" aria-label="View live project">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.codeLink !== '#' && (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="overlay-btn" aria-label="View source code">
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  {project.liveLink !== '#' && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);

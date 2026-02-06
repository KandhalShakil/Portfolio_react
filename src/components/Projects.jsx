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
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive maps',
      image: '🌤️',
      tags: ['React', 'API Integration', 'Charts', 'Geolocation'],
      liveLink: '#',
      codeLink: '#'
    }
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

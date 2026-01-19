import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'React portfolio showcasing projects and technical expertise',
      image: 'https://github.com/KandhalShakil/Portfolio_react/blob/main/public/pic.jpg?raw=true',
      tags: ['React', 'Framer Motion', 'Responsive'],
      liveLink: 'https://www.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Portfolio_react'
    },
    {
      title: 'Kandhal Invoice System',
      description: 'Invoice management with PDF generation and client tracking',
      image: 'https://github.com/KandhalShakil/Invoice_system/blob/main/static/pic.png?raw=true',
      tags: ['Python', 'PDF', 'JavaScript'],
      liveLink: 'https://www.invoice.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Invoice_system'
    },
    {
      title: 'SKY Event',
      description: 'Responsive event management and promotion website',
      image: 'https://github.com/KandhalShakil/Sky_Event/blob/main/logo.jpg?raw=true',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://sky-event.vercel.app/',
      codeLink: 'https://github.com/KandhalShakil/Sky_Event'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-divider"></div>
      
      <div className="projects-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <p className="section-subtitle">Building solutions that matter</p>
        
        {/* Project Grid */}
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
                {project.image.startsWith('http') ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <span className="emoji-icon">{project.image}</span>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects3D() {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: 'Personal Portfolio',
      description: '3D React portfolio with immersive animations and modern design',
      tags: ['React', 'Three.js', 'Framer Motion'],
      liveLink: 'https://www.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Portfolio_react'
    },
    {
      title: 'Invoice System',
      description: 'Full-featured invoice management with PDF generation',
      tags: ['Python', 'Django', 'JavaScript'],
      liveLink: 'https://www.invoice.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Invoice_system'
    },
    {
      title: 'SKY Event',
      description: 'Event management platform with responsive design',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://sky-event.vercel.app/',
      codeLink: 'https://github.com/KandhalShakil/Sky_Event'
    }
  ];

  return (
    <section className="projects-3d" id="projects">
      <div className="projects-3d-container">
        <motion.div
          className="projects-3d-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="projects-3d-label">MY WORK</div>
          <h2 className="projects-3d-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="projects-3d-subtitle">
            Explore my projects in an interactive 3D environment
          </p>
        </motion.div>

        <div className="projects-3d-canvas">
          <div className="projects-carousel">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`project-card-2d ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="projects-3d-controls">
          {projects.map((project, index) => (
            <button
              key={index}
              className={`project-nav-btn ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              {project.title}
            </button>
          ))}
        </div>

        {projects[activeProject] && (
          <motion.div
            className="project-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeProject}
          >
            <div className="project-summary-content">
              <h3>{projects[activeProject].title}</h3>
              <p>{projects[activeProject].description}</p>
              <div className="project-tags">
                {projects[activeProject].tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-summary-actions">
              <a
                href={projects[activeProject].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn primary"
              >
                View Live
              </a>
              <a
                href={projects[activeProject].codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn secondary"
              >
                View Code
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects3D;
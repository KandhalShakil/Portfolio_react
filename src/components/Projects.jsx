import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const featuredProject = {
    title: 'Personal Portfolio',
    description: 'A React.js-powered portfolio website highlighting projects, technical expertise, and personal achievements. Styled with styled-components, it reflects professionalism through modern UI design, responsiveness, and clear project presentation.',
    image: 'https://github.com/KandhalShakil/Portfolio_react/blob/main/public/pic.jpg?raw=true',
    tags: ['React', 'Styled Components', 'Responsive Design', 'Framer Motion'],
    liveLink: 'https://shakil-kandhal-portfolio.vercel.app/',
    codeLink: 'https://github.com/KandhalShakil/Portfolio_react'
  };

  const projects = [
    {
      title: 'SKY Event',
      description: 'A responsive event management and promotion website built with HTML5, CSS3, and JavaScript.',
      image: 'https://github.com/KandhalShakil/Sky_Event/blob/main/logo.jpg?raw=true',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      liveLink: 'https://sky-event.vercel.app/',
      codeLink: 'https://github.com/KandhalShakil/Sky_Event'
    },
    {
      title: 'Tic Tac Toe',
      description: 'A timeless Tic-Tac-Toe game with responsive design that preserves simplicity of traditional gameplay.',
      image: 'https://img.freepik.com/premium-vector/tic-tac-toe-logo-icon_1076610-87173.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'Game'],
      liveLink: 'https://tic-tac-toe-game-cyan-five.vercel.app/',
      codeLink: 'https://github.com/KandhalShakil/TIC-TAC-TOE-GAME'
    },
    {
      title: 'Tic Tac Toe Game Using React',
      description: 'Advanced Tic-Tac-Toe game built with React.js and Node.js, featuring AI opponents and authentication.',
      image: 'https://github.com/KandhalShakil/Tic-tac-toe-react/blob/main/public/Game.jpg?raw=true',
      tags: ['React', 'Node.js', 'AI', 'Dark Mode'],
      liveLink: 'https://kandhal-shakil-game.vercel.app/',
      codeLink: 'https://github.com/KandhalShakil/Tic-tac-toe-react'
    },
    {
      title: 'More Projects',
      description: 'Check out more projects on my GitHub profile',
      image: '🚀',
      tags: ['Coming Soon'],
      liveLink: 'https://github.com/KandhalShakil',
      codeLink: 'https://github.com/KandhalShakil'
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
          Featured Projects
        </motion.h2>
        
        {/* Featured Project */}
        <motion.div 
          className="featured-project"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="featured-badge">Featured</div>
          <div className="featured-content">
            <div className="featured-image">
              {featuredProject.image.startsWith('http') ? (
                <img src={featuredProject.image} alt={featuredProject.title} className="project-img" />
              ) : (
                <span className="emoji-icon">{featuredProject.image}</span>
              )}
            </div>
            <div className="featured-info">
              <h3 className="project-title">{featuredProject.title}</h3>
              <p className="project-description">{featuredProject.description}</p>
              <div className="project-tags">
                {featuredProject.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> View Live
                </a>
                <a href={featuredProject.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
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
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {project.image.startsWith('http') ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <span className="emoji-icon">{project.image}</span>
                )}
                <div className="project-overlay">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <FaExternalLinkAlt /> View Live
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
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

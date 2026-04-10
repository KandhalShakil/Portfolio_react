import React from 'react';
import { motion } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaRobot,
  FaBolt,
  FaCloudSun,
  FaChartBar,
  FaFileInvoice
} from 'react-icons/fa';
import { PROJECTS } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const projectIcons = {
    'Personal Portfolio': <FaGlobe />,
    'SchemeSnap AI': <FaRobot />,
    TaskForge: <FaBolt />,
    'Weather Dashboard': <FaCloudSun />,
    'Kandhal Invoice System': <FaFileInvoice />,
    'Sorting Algorithm Performance Analyzer': <FaChartBar />
  };

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
          <p className="projects-subtitle">A curated collection of products, dashboards, and intelligent tools</p>
        </motion.div>

        <div className="projects-grid showcase-grid">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card showcase-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
            >
              <div className="card-head">
                <div className="card-icon-wrap">
                  <span className="card-icon">{projectIcons[project.title] || <FaGlobe />}</span>
                </div>
                <span className={`card-category ${project.category.toLowerCase()}`}>{project.category}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={`${project.title}-${tag}`} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions-row">
                {project.comingSoon ? (
                  <>
                    <span className="project-link action-btn muted">Coming Soon</span>
                    <span className="project-link action-btn muted">Coming Soon</span>
                  </>
                ) : (
                  <>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link action-btn live-btn">
                      Live <FaExternalLinkAlt />
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link action-btn code-btn">
                      Code <FaGithub />
                    </a>
                  </>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);

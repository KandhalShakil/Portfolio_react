import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Projects3D() {
  const [activeProject, setActiveProject] = useState(0);
  const [summaryProject, setSummaryProject] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const touchStartRef = useRef({ x: 0, y: 0 });
  
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
    },
    {
      title: 'SchemeSnap AI - AI-Powered Government Scheme Navigator',
      description: 'AI platform to simplify scheme details, check eligibility, and generate multilingual action plans.',
      tags: ['Python', 'Django', 'DRF', 'React', 'Vite', 'Groq AI'],
      liveLink: 'https://www.schemesnap-ai.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/SchemeSnap-AI'
    },
    {
      title: 'Weather Dashboard',
      description: 'Full-stack weather dashboard with real-time conditions, AQI insights, and forecast tracking.',
      tags: ['.NET', 'C#', 'HTML', 'JavaScript', 'OpenWeather API'],
      liveLink: 'https://www.weather-intelligence-dashboard.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Weather-Intelligence-Dashboard'
    },
    {
      title: 'Sorting Algorithm Performance Analyzer',
      description: 'Interactive analyzer to compare sorting algorithms using execution time, comparisons, and swaps.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms', 'Performance API'],
      liveLink: 'http://sorting-algorithm-performance-analyzer.kandhal.tech',
      codeLink: 'https://github.com/KandhalShakil/Sorting-Algorithm-Performance-Analyzer'
    }
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);
  const pageThemes = [
    { icon: '🚀', label: 'Core Builds' },
    { icon: '⚡', label: 'Next Drops' },
    { icon: '🧪', label: 'Lab Experiments' },
    { icon: '🌌', label: 'Future Ideas' }
  ];
  const activeTheme = pageThemes[(currentPage - 1) % pageThemes.length];

  const handlePageChange = (nextPage) => {
    const boundedPage = Math.min(Math.max(nextPage, 1), totalPages);
    setCurrentPage(boundedPage);
    setActiveProject((boundedPage - 1) * projectsPerPage);
  };

  const handleProjectStep = (direction) => {
    const nextIndex = (summaryProject + direction + projects.length) % projects.length;
    setSummaryProject(nextIndex);
  };

  const handleTouchStart = (event) => {
    const touch = event.changedTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const swipeThreshold = 50;

    // Only trigger pagination for intentional horizontal swipes.
    if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handlePageChange(currentPage + 1);
      } else {
        handlePageChange(currentPage - 1);
      }
    }
  };

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
          <div
            className="projects-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {visibleProjects.map((project, index) => {
              const projectIndex = startIndex + index;
              return (
              <motion.div
                key={project.title}
                className={`project-card-2d ${activeProject === projectIndex ? 'active' : ''}`}
                onClick={() => {
                  setActiveProject(projectIndex);
                  setSummaryProject(projectIndex);
                }}
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: activeProject === projectIndex ? 1.02 : 1
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1]
                }}
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
              );
            })}
          </div>
        </div>

        <div className="projects-pagination" aria-label="Projects pagination">
          <button
            className="pagination-btn pagination-btn-prev"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="pagination-btn-icon">&lt;</span>
            <span>Back</span>
          </button>

          <div className="pagination-center">
            <div className="pagination-theme" aria-live="polite">
              <span className="theme-icon" aria-hidden="true">{activeTheme.icon}</span>
              <span className="theme-label">{activeTheme.label}</span>
            </div>
            <div className="pagination-pills">
              {Array.from({ length: totalPages }, (_, pageIndex) => {
                const page = pageIndex + 1;
                return (
                  <button
                    key={`page-${page}`}
                    className={`page-pill ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
            <span className="pagination-status">
              Showing {startIndex + 1}-{Math.min(startIndex + projectsPerPage, projects.length)} of {projects.length}
            </span>
            <div className="pagination-progress-track" aria-hidden="true">
              <motion.div
                className="pagination-progress-fill"
                initial={false}
                animate={{ width: `${(currentPage / totalPages) * 100}%` }}
                transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              />
            </div>
          </div>

          <button
            className="pagination-btn pagination-btn-next"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <span className="pagination-btn-icon">&gt;</span>
          </button>
        </div>

        {projects[summaryProject] && (
          <motion.div
            className="project-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={summaryProject}
          >
            <div className="project-summary-content">
              <h3>{projects[summaryProject].title}</h3>
              <p>{projects[summaryProject].description}</p>
              <div className="project-tags">
                {projects[summaryProject].tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-summary-actions">
              <a
                href={projects[summaryProject].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn primary"
              >
                View Live
              </a>
              <a
                href={projects[summaryProject].codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn secondary"
              >
                View Code
              </a>
              <div className="project-summary-pagination" aria-label="Project card pagination">
                <button
                  className="summary-page-btn"
                  onClick={() => handleProjectStep(-1)}
                  aria-label="Previous project"
                >
                  &lt;
                </button>
                <span className="summary-page-status">
                  {summaryProject + 1} / {projects.length}
                </span>
                <button
                  className="summary-page-btn"
                  onClick={() => handleProjectStep(1)}
                  aria-label="Next project"
                >
                  &gt;
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects3D;
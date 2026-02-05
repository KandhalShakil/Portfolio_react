import React from 'react';
import { motion } from 'framer-motion';

function Hero3D() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-3d" id="home">
      <div className="hero-3d-container">
        <div className="hero-3d-content">
          <motion.div
            className="hero-3d-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero-3d-label">PYTHON DEVELOPER</div>
            <h1 className="hero-3d-title">
              Building bold digital products that feel <span className="hero-3d-name">alive</span>
            </h1>
            <p className="hero-3d-description">
              I build scalable Python applications and modern web experiences with a focus on performance, clarity, and delightful UX.
            </p>
            <div className="hero-3d-actions">
              <button
                className="hero-3d-btn primary"
                onClick={() => scrollToSection('projects')}
                type="button"
              >
                Explore Projects
              </button>
              <button
                className="hero-3d-btn secondary"
                onClick={() => scrollToSection('contact')}
                type="button"
              >
                Let’s Collaborate
              </button>
            </div>
            <div className="hero-3d-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">2+</span>
                <span className="hero-stat-label">Projects shipped</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">6</span>
                <span className="hero-stat-label">Certifications</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">3D</span>
                <span className="hero-stat-label">Immersive UI</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="hero-3d-canvas">
          <div className="hero-visual-placeholder">
            <div className="hero-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero3D;
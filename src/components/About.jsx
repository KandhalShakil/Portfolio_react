import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { SITE_COPY } from '../data/portfolioData';

const About = () => {
  return (
    <section className="about-6d" id="about">
      <div className="about-container">
        <div className="about-grid-6d">
          <motion.div
            className="about-visual-6d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="image-hologram glass-6d">
              <img src="/profile.jpg" alt="Kandhal Shakil" className="hologram-img" />
              <div className="hologram-scan-line"></div>
              <div className="hologram-glow"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-content-6d"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="label-6d">BIOMETRIC DATA</div>
            <h2 className="title-6d">ARCHITECTING <span className="gradient-6d">THE VOID</span></h2>
            
            <div className="about-bio-6d">
              <p>{SITE_COPY.intro}</p>
              <p>{SITE_COPY.intro2}</p>
            </div>

            <div className="about-metrics-6d">
              {SITE_COPY.highlights.map((item, idx) => (
                <div className="metric-card-6d glass-6d" key={idx}>
                  <span className="metric-label-6d">{item.title}</span>
                  <p className="metric-value-6d">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="about-actions-6d">
              <button className="btn-6d primary" onClick={() => window.scrollToSection('projects')}>
                <span>Explore My Work</span>
                <div className="btn-glow"></div>
              </button>
              <button className="btn-6d secondary" onClick={() => window.scrollToSection('contact')}>
                <span>Collaborate</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

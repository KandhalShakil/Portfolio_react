import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { SITE_COPY } from '../data/portfolioData';

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-label">ABOUT</div>

            <h2 className="about-title">
              {SITE_COPY.tagline.split('speed')[0]}<span className="highlight">speed</span>
            </h2>

            <div className="about-text">
              <p>
                {SITE_COPY.intro}
              </p>
              <p>
                {SITE_COPY.intro2}
              </p>
            </div>

            <div className="about-highlights">
              {SITE_COPY.highlights.map((item) => (
                <div className="highlight-card" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <button
                className="about-btn primary"
                onClick={() => scrollToSection('projects')}
                type="button"
              >
                View Projects
              </button>
              <button
                className="about-btn secondary"
                onClick={() => scrollToSection('contact')}
                type="button"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src="/profile.jpg" alt="Kandhal Shakil" />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

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
              Designing with clarity, building with <span className="highlight">speed</span>
            </h2>

            <div className="about-text">
              <p>
                I'm a Python developer focused on clean architecture, polished UI, and performance. I study Computer Science at Lok Jagruti Kendra University and build full-stack products with React and Python.
              </p>
              <p>
                I love turning complex ideas into elegant experiences, blending 3D motion, crisp layouts, and reliable backend systems.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <h4>Product Mindset</h4>
                <p>UX-first designs with measurable impact.</p>
              </div>
              <div className="highlight-card">
                <h4>Full-Stack</h4>
                <p>React, Django, APIs, and deployment.</p>
              </div>
              <div className="highlight-card">
                <h4>3D Motion</h4>
                <p>Immersive visuals without sacrificing speed.</p>
              </div>
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
              <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Kandhal Shakil" />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

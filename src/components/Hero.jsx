import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="hero-greeting">Hey, I'm</p>
          <h1 className="hero-name">Kandhal Shakil</h1>
          <h2 className="hero-title">Python Developer</h2>
          <p className="hero-description">
            I build visually creative and technically strong digital experiences.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="floating-card">
            <div className="card-glow"></div>
            <div className="mockup-container">
              <div className="code-window">
                <div className="window-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-content">
                  <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
                  <p>&nbsp;&nbsp;name: <span className="string">"Kandhal Shakil"</span>,</p>
                  <p>&nbsp;&nbsp;skills: [<span className="string">"Python"</span>, <span className="string">"Django"</span>, <span className="string">"Backend"</span>],</p>
                  <p>&nbsp;&nbsp;passion: <span className="string">"Creating"</span></p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-spatial-container">
        {/* Layered Depth System */}
        <motion.div 
          className="hero-depth-layer depth-far"
          style={{ translateZ: -200, scale: 1.5 }}
        >
          <div className="atmospheric-fog"></div>
        </motion.div>

        <div className="hero-container">
          <motion.div
            className="hero-content-6d"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="hero-status-pill"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="status-dot"></span>
              SYSTEM ONLINE: NEXT-GEN ECOSYSTEM
            </motion.div>

            <motion.h1
              className="hero-title-6d"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              ENGINEERING <br />
              <span className="hero-gradient-text">DIGITAL FUTURES</span>
            </motion.h1>

            <motion.div 
              className="hero-subtitle-6d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Kandhal Shakil — Full Stack Architect & Visual Storyteller
            </motion.div>

            <motion.div
              className="hero-actions-6d"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button className="btn-6d primary" onClick={() => window.scrollToSection('projects')}>
                <span>INITIALIZE_PORTFOLIO</span>
                <div className="btn-glow"></div>
              </button>
              <button className="btn-6d secondary" onClick={() => window.scrollToSection('about')}>
                <span>EXPLORE_SYSTEMS</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Futuristic Structures */}
        <motion.div 
          className="hero-depth-layer depth-near"
          animate={{ 
            y: [0, -20, 0],
            rotateZ: [0, 5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="holographic-structure"></div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator-6d"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => window.scrollToSection('about')}
        style={{ cursor: 'pointer' }}
      >
        <div className="mouse-wheel"></div>
        <span>SCROLL TO DESCEND</span>
      </motion.div>
    </section>
  );
};

export default Hero;

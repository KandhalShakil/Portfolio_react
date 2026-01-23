import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src="/profile.jpg" alt="Kandhal Shakil" />
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-label">ABOUT ME</div>
            
            <h2 className="about-title">
              About <span className="highlight">Me</span>
            </h2>
            
            <div className="about-text">
              <p>
                I'm a Python Developer passionate about building scalable web applications. Currently pursuing Computer Science at Lok Jagruti Kendra University, I specialize in full-stack development with React and Python. I focus on writing clean, maintainable code and learning new technologies. My goal is to build impactful solutions that solve real problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

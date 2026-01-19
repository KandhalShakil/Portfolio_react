import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-divider"></div>
      
      <div className="about-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-text">
            I'm a Python Developer passionate about building scalable web applications.
            Currently pursuing Computer Science at Lok Jagruti Kendra University, I specialize
            in full-stack development with React and Python. I focus on writing clean, 
            maintainable code and learning new technologies. My goal is to build impactful
            solutions that solve real problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

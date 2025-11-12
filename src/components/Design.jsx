import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import './Design.css';

const Design = () => {
  const designs = [
    {
      id: 1,
      title: 'Food Delivery App UI',
      category: 'Mobile App Design',
      description: 'A modern and intuitive food delivery application with seamless user experience, featuring restaurant browsing, cart management, and order tracking.',
      link: 'https://carry-math-46881211.figma.site',
      tools: ['Figma', 'UI/UX Design', 'Mobile First'],
      image: '🍔'
    }
  ];

  return (
    <section className="design" id="design">
      <div className="section-divider"></div>
      
      <div className="design-container">
        <motion.div 
          className="design-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            UI/UX Design <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Crafting beautiful and functional user experiences
          </p>
        </motion.div>

        <div className="designs-grid">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              className="design-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="design-image">
                <span className="design-emoji">{design.image}</span>
                <div className="design-overlay">
                  <a 
                    href={design.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-design-btn"
                  >
                    <FaExternalLinkAlt /> View Design
                  </a>
                </div>
              </div>
              
              <div className="design-content">
                <span className="design-category">
                  <FaFigma /> {design.category}
                </span>
                <h3 className="design-title">{design.title}</h3>
                <p className="design-description">{design.description}</p>
                
                <div className="design-tools">
                  {design.tools.map((tool, idx) => (
                    <span key={idx} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;

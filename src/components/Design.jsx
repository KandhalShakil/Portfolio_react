import React from 'react';
import { motion } from 'framer-motion';
import './Design.css';

const Design = () => {
  return (
    <section className="design" id="design">
      <div className="section-divider"></div>
      
      <div className="design-container">
        <motion.div 
          className="coming-soon-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="coming-soon-title">
            UI/UX Design Portfolio
          </h2>
          <div className="coming-soon-badge">
            Coming Soon
          </div>
          <p className="coming-soon-text">
            Stay tuned for my design showcase!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Design;

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-divider"></div>
      
      <div className="education-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <p className="section-subtitle">My academic journey</p>
        
        <div className="education-timeline">
          {EDUCATION_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="experience-title">{item.title}</h3>
                    <p className="experience-company">{item.company}</p>
                  </div>
                  <span className="experience-duration">{item.duration}</span>
                </div>
                <ul className="experience-points">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

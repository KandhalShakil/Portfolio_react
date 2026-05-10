import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">Academic Path</span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            A chronicle of my academic journey and technical foundation.
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {EDUCATION_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="timeline-dot"></div>

              <div className="education-card">
                <div className="card-header">
                  <span className="duration">{item.duration}</span>
                  <h3 className="degree">{item.title}</h3>
                  <p className="institution">{item.company}</p>
                </div>

                <div className="card-content">
                  <ul className="points-list">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-description">
            A chronicle of my professional journey and industry experience.
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {EXPERIENCE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <div className="card-header">
                  <span className="duration">{item.duration}</span>
                  <h3 className="job-title">{item.title}</h3>
                  <p className="company">{item.company}</p>
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

export default Experience;

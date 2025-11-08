import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarDays, faSchool } from '@fortawesome/free-solid-svg-icons';
import './Education.css';

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const journeyData = [
    {
      year: '2020 - 2021',
      title: 'Completed 10th Grade',
      subtitle: 'Gujarat State Board',
      description: 'Strong foundation in academics',
      icon: faSchool,
      type: 'education',
    },
    {
      year: '2022 - 2023',
      title: 'Completed 12th Science',
      subtitle: 'Gujarat State Board',
      description: 'Specialized in Science stream',
      icon: faSchool,
      type: 'education',
    },
    {
      year: '2023',
      title: 'Started B.E in CSE',
      subtitle: 'Lok Jagruti Kendra University',
      description: 'Computer Science & Technology',
      icon: faGraduationCap,
      type: 'education',
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-divider"></div>
      
      <div className="education-container">
        <motion.div 
          className="education-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <span className="badge-text">My Story</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my academic milestones and professional achievements
          </p>
        </motion.div>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="timeline-content">
                <div className={`journey-card ${hoveredCard === index ? 'card-hovered' : ''}`}>
                  <div className="card-glow"></div>
                  
                  <div className={`type-badge ${item.type === 'achievement' ? 'type-badge-achievement' : ''}`}>
                    {item.type}
                  </div>
                  
                  <div className="card-header">
                    <div className={`icon-wrapper ${hoveredCard === index ? 'icon-hovered' : ''}`}>
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    
                    <div className="card-content">
                      <div className="year-badge">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-subtitle">{item.subtitle}</p>
                  <p className="card-description">{item.description}</p>
                </div>
              </div>
              
              <div className="timeline-dot">
                <div className={`dot ${hoveredCard === index ? 'dot-active' : ''}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

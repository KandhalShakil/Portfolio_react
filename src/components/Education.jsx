import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Education.css';

const Education = () => {
  const experienceData = [
    {
      title: 'Computer Science & Technology',
      company: 'Lok Jagruti Kendra University',
      duration: '2023 - Present',
      type: 'education',
      icon: faGraduationCap,
      points: [
        'Building strong foundation in CS fundamentals',
        'Learning data structures, algorithms, and system design',
        'Working on real-world projects with modern tech stack'
      ]
    },
    {
      title: 'Open Source Contributor',
      company: 'Self-Learning & Projects',
      duration: '2023 - Present',
      type: 'experience',
      icon: faBriefcase,
      points: [
        'Built full-stack applications with React and Python',
        'Implemented AI features and authentication systems',
        'Deployed production-ready applications on cloud platforms'
      ]
    }
  ];

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
          Experience
        </motion.h2>
        <p className="section-subtitle">My journey so far</p>
        
        <div className="experience-list">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{item.title}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-duration">{item.duration}</p>
                </div>
              </div>
              <ul className="experience-points">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

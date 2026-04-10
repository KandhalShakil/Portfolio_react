import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faPython, faJava, faGitAlt, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCloud, faCog, faCode } from '@fortawesome/free-solid-svg-icons';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  html5: faHtml5,
  css3: faCss3Alt,
  js: faJs,
  react: faReact,
  python: faPython,
  java: faJava,
  node: faNodeJs,
  server: faServer,
  database: faDatabase,
  aws: faAws,
  docker: faDocker,
  git: faGitAlt,
  code: faCode,
  cloud: faCloud,
  cog: faCog
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-divider"></div>
      
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-label">TECHNICAL EXPERTISE</div>
          <h2 className="skills-title">
            Skills & <span className="highlight">Technologies</span>
          </h2>
          <p className="skills-subtitle">Technologies I work with to build amazing solutions</p>
        </motion.div>
        
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="skill-icon">
                      <FontAwesomeIcon icon={iconMap[skill.icon]} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);

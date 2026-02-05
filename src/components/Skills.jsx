import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faPython, faJava, faGitAlt, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCloud, faCog, faCode } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3Alt },
        { name: 'JavaScript', icon: faJs },
        { name: 'React', icon: faReact }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: faPython },
        { name: 'Java', icon: faJava },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Django', icon: faServer }
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', icon: faDatabase },
        { name: 'PostgreSQL', icon: faDatabase },
        { name: 'AWS', icon: faAws },
        { name: 'Docker', icon: faDocker }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: faGitAlt },
        { name: 'VS Code', icon: faCode },
        { name: 'REST APIs', icon: faCloud },
        { name: 'Agile', icon: faCog }
      ]
    }
  ];

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
          {skillCategories.map((category, categoryIndex) => (
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
                      <FontAwesomeIcon icon={skill.icon} />
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

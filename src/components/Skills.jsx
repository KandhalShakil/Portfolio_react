import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faHtml5, faCss3Alt, faJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBrain, faUsers, faServer, faChartLine } from '@fortawesome/free-solid-svg-icons';
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
        { name: 'Data Structures', icon: faServer }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: faDatabase },
        { name: 'SQL', icon: faDatabase }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: faBrain },
        { name: 'VS Code', icon: faUsers },
        { name: 'Postman', icon: faChartLine }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-divider"></div>
      
      <div className="skills-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <p className="section-subtitle">Technologies I work with</p>
        
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
                  <div
                    key={skillIndex}
                    className="skill-item"
                  >
                    <div className="skill-icon">
                      <FontAwesomeIcon icon={skill.icon} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

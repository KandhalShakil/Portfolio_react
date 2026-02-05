import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skills3D() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  
  const skillGroups = [
    {
      title: 'Backend Development',
      skills: ['Python', 'Java', 'Django', 'FastAPI']
    },
    {
      title: 'Data & Algorithms',
      skills: ['Data Structures', 'Pandas', 'NumPy', 'SQL']
    },
    {
      title: 'Frontend & Tools',
      skills: ['HTML', 'JavaScript', 'Postman', 'Git']
    },
    {
      title: 'Database',
      skills: ['MongoDB']
    }
  ];

  const skills = [
    { name: 'Python', position: [-2, 2, 0], color: '#3776ab' },
    { name: 'Java', position: [0, 2, 0], color: '#f89820' },
    { name: 'Django', position: [2, 2, 0], color: '#0f4c2f' },
    { name: 'Data Structures', position: [-2, 0, 0], color: '#4a90e2' },
    { name: 'MongoDB', position: [0, 0, 0], color: '#47a248' },
    { name: 'Pandas', position: [2, 0, 0], color: '#150458' },
    { name: 'HTML', position: [-2, -2, 0], color: '#e34f26' },
    { name: 'Postman', position: [0, -2, 0], color: '#ff6c37' },
    { name: 'Git', position: [2, -2, 0], color: '#f05032' },
  ];

  return (
    <section className="skills-3d" id="skills">
      <div className="skills-3d-container">
        <motion.div
          className="skills-3d-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-3d-label">TECHNICAL EXPERTISE</div>
          <h2 className="skills-3d-title">
            Interactive <span className="highlight">Skills</span>
          </h2>
          <p className="skills-3d-subtitle">
            Click on the cards to explore my Python-focused tech stack
          </p>
        </motion.div>

        <div className="skills-3d-layout">
          <div className="skills-3d-overview">
            <p>
              My toolkit blends scalable Python backends with data-driven workflows.
              Explore the interactive grid or browse the skill pillars below.
            </p>
            <ul className="skills-3d-bullets">
              <li>Python APIs designed for clarity and scalability</li>
              <li>Data pipelines built with Pandas and SQL</li>
              <li>Clean, tested code with Git version control</li>
            </ul>
          </div>
          <div className="skills-3d-canvas">
            <div className="skills-visual-grid">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className={`skill-cube ${selectedSkill === skill.name ? 'selected' : ''}`}
                  style={{ '--skill-color': skill.color }}
                  onClick={() => setSelectedSkill(
                    selectedSkill === skill.name ? null : skill.name
                  )}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {selectedSkill && (
          <motion.div
            className="skill-info"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h3>{selectedSkill}</h3>
            <p>Strong foundation in {selectedSkill} development</p>
          </motion.div>
        )}

        <div className="skills-3d-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group-card">
              <h4>{group.title}</h4>
              <div className="skill-group-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills3D;


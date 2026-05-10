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
    <section className="skills-6d" id="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header-6d"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="label-6d">NEURAL CAPABILITIES</div>
          <h2 className="title-6d">CORE <span className="gradient-6d">INTELLIGENCE</span></h2>
        </motion.div>

        <div className="skills-grid-6d">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-group-6d glass-6d"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ translateZ: 50, rotateX: 5, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="skill-group-title-6d">{category.title}</h3>
              <div className="skill-items-6d">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="skill-node-6d">
                    <div className="skill-icon-6d">
                      <FontAwesomeIcon icon={iconMap[skill.icon]} />
                    </div>
                    <span className="skill-label-6d">{skill.name}</span>
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

export default React.memo(Skills);

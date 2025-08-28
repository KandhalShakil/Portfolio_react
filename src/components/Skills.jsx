import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faJava,
  faBootstrap,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  { icon: faPython, name: 'Python', color: '#3776AB'},
  { icon: faHtml5, name: 'HTML5', color: '#E34F26'},
  { icon: faCss3Alt, name: 'CSS3', color: '#1572B6'},
  { icon: faJs, name: 'JavaScript', color: '#F7DF1E'},
  { icon: faReact, name: 'React', color: '#61DAFB'},
  { icon: faNodeJs, name: 'Node.js', color: '#339933'},
  { icon: faJava, name: 'Java', color: '#007396'},
  { icon: faBootstrap, name: 'Bootstrap', color: '#7952B3'},
  { icon: faDatabase, name: 'MongoDB', color: '#47A248' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Modern styles matching your design system
  const styles = {
    section: {
      position: 'relative',
      padding: '5rem 0',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      width: '100%',
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: '3rem',
      background: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.025em',
      position: 'relative',
      display: 'inline-block',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    titleUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '25%',
      width: '50%',
      height: '4px',
      background: 'linear-gradient(90deg, transparent, #818cf8, #38bdf8, transparent)',
      borderRadius: '2px',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
    },
    col: {
      flex: '0 0 calc(25% - 2rem)',
      minWidth: '250px',
      maxWidth: '280px',
    },
    skillCard: {
      background: 'rgba(30, 41, 59, 0.8)',
      borderRadius: '24px',
      padding: '2.5rem 1.5rem',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      overflow: 'hidden',
      transform: 'translateY(0)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    skillCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 35px 60px rgba(0, 0, 0, 0.3)',
      borderColor: 'rgba(99, 102, 241, 0.5)',
    },
    iconWrapper: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      fontSize: '2.5rem',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    iconWrapperHover: {
      transform: 'scale(1.1)',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
    },
    skillIcon: {
      transition: 'all 0.3s ease',
    },
    skillIconHover: {
      transform: 'scale(1.2)',
    },
    skillName: {
      color: '#ffffff',
      fontSize: '1.3rem',
      fontWeight: '700',
      marginBottom: '1rem',
      transition: 'all 0.3s ease',
    },
    skillNameHover: {
      background: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    decorativeElement: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
      top: '-100px',
      right: '-100px',
      zIndex: '0',
    },
    decorativeElement2: {
      position: 'absolute',
      width: '150px',
      height: '150px',
      background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
      borderRadius: '50%',
      bottom: '-75px',
      left: '-75px',
      zIndex: '0',
    },
    skillBadge: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: 'white',
      fontSize: '0.8rem',
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontWeight: '600',
    },
    floatingParticles: {
      position: 'absolute',
      width: '20px',
      height: '20px',
      background: 'rgba(99, 102, 241, 0.6)',
      borderRadius: '50%',
      animation: 'float 3s infinite ease-in-out',
    },
  };

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>
          Technical Arsenal
          <span style={styles.titleUnderline}></span>
        </h2>
        <div style={styles.row}>
          {skillsData.map((skill, index) => (
            <div style={styles.col} key={index}>
              <div 
                style={{
                  ...styles.skillCard,
                  ...(hoveredSkill === index ? styles.skillCardHover : {})
                }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div style={styles.decorativeElement}></div>
                <div style={styles.decorativeElement2}></div>
                
                <div style={{
                  ...styles.iconWrapper,
                  ...(hoveredSkill === index ? styles.iconWrapperHover : {})
                }}>
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    style={{
                      ...styles.skillIcon,
                      color: skill.color,
                      ...(hoveredSkill === index ? styles.skillIconHover : {})
                    }} 
                  />
                </div>
                
                <h3 style={{
                  ...styles.skillName,
                  ...(hoveredSkill === index ? styles.skillNameHover : {})
                }}>
                  {skill.name}
                </h3>
                   
                {/* Floating particles */}
                <div style={{
                  ...styles.floatingParticles,
                  top: '30%',
                  left: '20%',
                  animationDelay: '0s',
                }}></div>
                <div style={{
                  ...styles.floatingParticles,
                  top: '60%',
                  right: '25%',
                  animationDelay: '1s',
                  width: '15px',
                  height: '15px',
                  background: 'rgba(56, 189, 248, 0.6)',
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add style tag with animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
            50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
            100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
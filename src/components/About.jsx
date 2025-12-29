import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  
  const projectCount = 4; 

  const certificateCount = 6; 
  
  const stats = [
    { icon: <FaProjectDiagram />, value: `${projectCount}`, label: 'Projects' },
    { icon: <FaAward />, value: `${certificateCount}`, label: 'Awards' }
  ];

  const styles = {
    about: {
      padding: '120px 2rem',
      position: 'relative',
    },
    sectionDivider: {
      width: '100%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(0, 255, 153, 0.5), transparent)',
      marginBottom: '80px',
    },
    aboutContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1.5fr' : '1fr',
      gap: '4rem',
      alignItems: 'center',
    },
    aboutImage: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    },
    imageGlow: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(0, 255, 153, 0.1), rgba(0, 191, 255, 0.1))',
      borderRadius: '50%',
      filter: 'blur(20px)',
      zIndex: 0,
      animation: 'pulse 3s ease-in-out infinite',
    },
    profileFrame: {
      position: 'relative',
      width: window.innerWidth > 768 ? '350px' : '250px',
      height: window.innerWidth > 768 ? '350px' : '250px',
      borderRadius: '50%',
      padding: '4px',
      background: 'linear-gradient(135deg, #00FF99, #00BFFF)',
      boxShadow: '0 0 20px rgba(0, 255, 153, 0.2)',
      overflow: 'hidden',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      background: '#1a1a1a',
      display: 'block',
    },
    profilePlaceholder: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(0, 255, 153, 0.2), rgba(0, 191, 255, 0.2))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: window.innerWidth > 768 ? '6rem' : '4rem',
      fontWeight: 700,
      color: '#00FF99',
    },
    aboutContent: {
      maxWidth: '700px',
    },
    sectionTitle: {
      fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
      fontWeight: 700,
      background: 'linear-gradient(90deg, #00FF99, #00BFFF)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1.5rem',
    },
    aboutText: {
      fontSize: '1.1rem',
      color: '#B0B0B0',
      lineHeight: 1.8,
      marginBottom: '1.5rem',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
      gap: '1.5rem',
      marginTop: '3rem',
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      padding: '2rem 1.5rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    statIcon: {
      fontSize: '2.5rem',
      color: '#00FF99',
      marginBottom: '1rem',
      filter: 'drop-shadow(0 0 10px rgba(0, 255, 153, 0.5))',
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#E0E0E0',
      margin: '0.5rem 0',
    },
    statLabel: {
      fontSize: '0.95rem',
      color: '#B0B0B0',
      margin: 0,
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(0.95);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
          }
        `}
      </style>
      <section style={styles.about} id="about">
        <div style={styles.sectionDivider}></div>
        
        <div style={styles.aboutContainer}>
          <motion.div 
            style={styles.aboutImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={styles.imageGlow}></div>
            <div style={styles.profileFrame}>
              <img 
                src="/profile.jpg" 
                alt="Kandhal Shakil - Profile" 
                style={styles.profileImage}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{...styles.profilePlaceholder, display: 'none'}}>
                <span>KS</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            style={styles.aboutContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.sectionTitle}>About Me</h2>
            <p style={styles.aboutText}>
              I'm Kandhal Shakil, a passionate Python Developer who loves 
              creating robust, scalable applications and solving complex problems through code. 
              With a strong foundation in Python development, I build efficient solutions 
              with clean code and attention to detail.
            </p>
            <p style={styles.aboutText}>
              My journey combines technical expertise with analytical problem-solving. I believe 
              great software should be both powerful and maintainable, creating reliable systems 
              that deliver exceptional performance and user experiences.
            </p>
            
            <div style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  style={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div style={styles.statIcon}>{stat.icon}</div>
                  <h3 style={styles.statValue}>{stat.value}</h3>
                  <p style={styles.statLabel}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

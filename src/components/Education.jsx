import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarDays, faSchool } from '@fortawesome/free-solid-svg-icons';

const educationData = [
  {
    title: 'Bachelor of Engineering in Computer Science and Technology',
    subtitle: 'Lok jagruti Kendra University',
    year: '2023 - continue',
    icon: faGraduationCap,
  },
  {
    title: '12th Science',
    subtitle: 'Gujarat State Board',
    year: '2022 - 2023',
    icon: faSchool,
  },
  {
    title: '10th',
    subtitle: 'Gujarat State Board',
    year: '2020 - 2021',
    icon: faSchool,
  },
];

const Education = () => {
  // Modern styles matching your contact form design
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
    educationCard: {
      background: 'rgba(30, 41, 59, 0.8)',
      borderRadius: '24px',
      padding: '2.5rem',
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
    },
    educationCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 35px 60px rgba(0, 0, 0, 0.3)',
      borderColor: 'rgba(99, 102, 241, 0.5)',
    },
    iconWrapper: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      fontSize: '2rem',
      color: 'white',
      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)',
    },
    title: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '1rem',
      lineHeight: '1.4',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#818cf8',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    year: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '1rem',
      marginTop: 'auto',
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    yearIcon: {
      color: '#38bdf8',
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
    col: {
      flex: '0 0 calc(33.333% - 2rem)',
      minWidth: '300px',
    },
  };

  return (
    <section id="education" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>
          Education
          <span style={styles.titleUnderline}></span>
        </h2>
        <div style={styles.row}>
          {educationData.map((edu, index) => (
            <div style={styles.col} key={index}>
              <div 
                style={styles.educationCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = styles.educationCardHover.transform;
                  e.currentTarget.style.boxShadow = styles.educationCardHover.boxShadow;
                  e.currentTarget.style.borderColor = styles.educationCardHover.borderColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = styles.educationCard.transform;
                  e.currentTarget.style.boxShadow = styles.educationCard.boxShadow;
                  e.currentTarget.style.borderColor = styles.educationCard.borderColor;
                }}
              >
                <div style={styles.decorativeElement}></div>
                <div style={styles.decorativeElement2}></div>
                
                <div style={styles.iconWrapper}>
                  <FontAwesomeIcon icon={edu.icon} />
                </div>
                
                <h3 style={styles.title}>{edu.title}</h3>
                <p style={styles.subtitle}>{edu.subtitle}</p>
                
                <div style={styles.year}>
                  <FontAwesomeIcon icon={faCalendarDays} style={styles.yearIcon} />
                  <span>{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add style tag with animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #7c3aed 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}
      </style>
    </section>
  );
};

export default Education;
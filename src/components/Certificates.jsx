import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCertificate, faHourglassHalf, faExternalLinkAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const certificatesData = [
  {
    img: '/images/certificates/Introduction to Java.png',
    title: 'Introduction to Java',
    link: 'https://coursera.org/verify/TUX8P7X8ELQD',
  },
  {
    img: '/images/certificates/Inheritance and Data Structures in Java.png',
    title: 'Inheritance and Data Structures in Java',
    link: 'https://coursera.org/verify/H8XTMHMZSYZX',
  },
  {
    img: '/images/certificates/Introduction to HTML, CSS, & JavaScript.png',
    title: 'Introduction to HTML, CSS, & JavaScript',
    link: 'https://coursera.org/verify/2MWVBEWX2M8N',
  },
  {
    img: '/images/certificates/Exploratory Data Analysis for Machine Learning.png',
    title: 'Exploratory Data Analysis for Machine Learning',
    link: 'https://www.coursera.org/account/accomplishments/verify/NBH6CSAM16MD',
  },
  {
    img: '/images/certificates/Developing Front-End Apps with React.png',
    title: 'Developing Front-End Apps with React',
    link: 'https://coursera.org/verify/0178B60775HH',
  },
];

const Certificates = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
      flex: '0 0 calc(33.333% - 2rem)',
      minWidth: '300px',
      maxWidth: '380px',
    },
    certificateCard: {
      background: 'rgba(30, 41, 59, 0.8)',
      borderRadius: '24px',
      overflow: 'hidden',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      transform: 'translateY(0)',
      transition: 'all 0.3s ease',
      height: '100%',
    },
    certificateCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 35px 60px rgba(0, 0, 0, 0.3)',
      borderColor: 'rgba(99, 102, 241, 0.5)',
    },
    imageWrapper: {
      position: 'relative',
      overflow: 'hidden',
      height: '200px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    imageHover: {
      transform: 'scale(1.05)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(79, 70, 229, 0.9) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    overlayVisible: {
      opacity: 1,
    },
    overlayContent: {
      textAlign: 'center',
      padding: '1.5rem',
    },
    overlayIcon: {
      fontSize: '2.5rem',
      color: 'white',
      marginBottom: '1rem',
    },
    overlayTitle: {
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
    },
    overlayButton: {
      background: 'rgba(255, 255, 255, 0.95)',
      color: '#6366f1',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    overlayButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(255, 255, 255, 0.3)',
    },
    details: {
      padding: '1.5rem',
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.9rem',
    },
    badgeIcon: {
      color: '#38bdf8',
    },
    title: {
      color: '#ffffff',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      lineHeight: '1.4',
    },
    button: {
      width: '100%',
      padding: '1rem',
      borderRadius: '16px',
      border: 'none',
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
    },
    buttonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 30px rgba(99, 102, 241, 0.5)',
    },
    comingSoonCard: {
      background: 'rgba(30, 41, 59, 0.8)',
      borderRadius: '24px',
      padding: '2.5rem',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      transform: 'translateY(0)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    comingSoonContent: {
      padding: '2rem',
    },
    placeholderIcon: {
      fontSize: '3rem',
      color: '#818cf8',
      marginBottom: '1.5rem',
      animation: 'pulse 2s infinite',
    },
    comingSoonTitle: {
      color: '#ffffff',
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    comingSoonText: {
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '2rem',
    },
    placeholderDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'rgba(99, 102, 241, 0.6)',
      animation: 'bounce 1.5s infinite',
    },
    dot2: {
      animationDelay: '0.2s',
    },
    dot3: {
      animationDelay: '0.4s',
    },
    decorativeElement: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
      top: '-150px',
      right: '-150px',
      zIndex: '0',
    },
    decorativeElement2: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
      borderRadius: '50%',
      bottom: '-100px',
      left: '-100px',
      zIndex: '0',
    },
  };

  return (
    <section id="certificate" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>
          Professional Certifications
          <span style={styles.titleUnderline}></span>
        </h2>
        <div style={styles.row}>
          {certificatesData.map((cert, index) => (
            <div style={styles.col} key={index}>
              <div 
                style={{
                  ...styles.certificateCard,
                  ...(hoveredCard === index ? styles.certificateCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.decorativeElement}></div>
                <div style={styles.decorativeElement2}></div>
                
                <div style={styles.imageWrapper}>
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    style={{
                      ...styles.image,
                      ...(hoveredCard === index ? styles.imageHover : {})
                    }} 
                  />
                  <div style={{
                    ...styles.overlay,
                    ...(hoveredCard === index ? styles.overlayVisible : {})
                  }}>
                    <div style={styles.overlayContent}>
                      <FontAwesomeIcon icon={faEye} style={styles.overlayIcon} />
                      <h5 style={styles.overlayTitle}>{cert.title}</h5>
                      <a
                        href={cert.link}
                        style={styles.overlayButton}
                        onMouseEnter={(e) => {
                          e.target.style.transform = styles.overlayButtonHover.transform;
                          e.target.style.boxShadow = styles.overlayButtonHover.boxShadow;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'none';
                          e.target.style.boxShadow = 'none';
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Verify Certificate
                      </a>
                    </div>
                  </div>
                </div>
                
                <div style={styles.details}>
                  <div style={styles.badge}>
                    <FontAwesomeIcon icon={faCertificate} style={styles.badgeIcon} />
                    <span>Coursera</span>
                  </div>
                  <h5 style={styles.title}>{cert.title}</h5>
                  <a
                    href={cert.link}
                    style={styles.button}
                    onMouseEnter={(e) => {
                      e.target.style.transform = styles.buttonHover.transform;
                      e.target.style.boxShadow = styles.buttonHover.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'none';
                      e.target.style.boxShadow = 'none';
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div style={styles.col}>
            <div 
              style={styles.comingSoonCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.certificateCardHover.transform;
                e.currentTarget.style.boxShadow = styles.certificateCardHover.boxShadow;
                e.currentTarget.style.borderColor = styles.certificateCardHover.borderColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = styles.certificateCard.transform;
                e.currentTarget.style.boxShadow = styles.certificateCard.boxShadow;
                e.currentTarget.style.borderColor = styles.certificateCard.borderColor;
              }}
            >
              <div style={styles.decorativeElement}></div>
              <div style={styles.decorativeElement2}></div>
              
              <div style={styles.comingSoonContent}>
                <FontAwesomeIcon icon={faHourglassHalf} style={styles.placeholderIcon} />
                <h5 style={styles.comingSoonTitle}>New Certificate Coming Soon</h5>
                <p style={styles.comingSoonText}>Stay tuned for more achievements!</p>
                <div style={styles.placeholderDots}>
                  <span style={styles.dot}></span>
                  <span style={{...styles.dot, ...styles.dot2}}></span>
                  <span style={{...styles.dot, ...styles.dot3}}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add style tag with animations */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
};

export default Certificates;
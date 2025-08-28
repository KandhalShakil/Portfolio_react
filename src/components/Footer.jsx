import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faCopyright,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Modern styles matching your Skills section
  const styles = {
    footer: {
      position: 'relative',
      padding: '3rem 0 1.5rem',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      borderTop: '1px solid rgba(99, 102, 241, 0.3)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      width: '100%',
      position: 'relative',
      zIndex: 2,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '1rem',
      margin: '0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    heart: {
      color: '#ef4444',
      margin: '0 0.3rem',
      transition: 'all 0.3s ease',
    },
    heartHover: {
      transform: 'scale(1.2)',
      animation: 'pulse 1s infinite',
    },
    socialIcons: {
      display: 'flex',
      gap: '1.5rem',
      marginTop: '0.5rem',
    },
    iconWrapper: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
      color: 'rgba(255, 255, 255, 0.8)',
      cursor: 'pointer',
    },
    iconWrapperHover: {
      transform: 'scale(1.1)',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
      color: '#ffffff',
    },
    decorativeElement: {
      position: 'absolute',
      width: '150px',
      height: '150px',
      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      bottom: '-75px',
      left: '10%',
      zIndex: 1,
    },
    decorativeElement2: {
      position: 'absolute',
      width: '100px',
      height: '100px',
      background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
      borderRadius: '50%',
      top: '-50px',
      right: '15%',
      zIndex: 1,
    },
    floatingParticles: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      background: 'rgba(99, 102, 241, 0.6)',
      borderRadius: '50%',
      animation: 'float 3s infinite ease-in-out',
    },
    link: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    linkHover: {
      background: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  };

  const socialLinks = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/kandhal-shakil-5311302b6/', color: '#0A66C2' },
    { icon: faGithub, url: 'https://github.com/KandhalShakil', color: '#FFFFFF' },
    { icon: faTwitter, url: 'https://x.com/ShakilKandhal', color: '#1DA1F2' },
  ];

  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.decorativeElement}></div>
      <div style={styles.decorativeElement2}></div>
      
      {/* Floating particles */}
      <div style={{
        ...styles.floatingParticles,
        top: '20%',
        left: '15%',
        animationDelay: '0s',
      }}></div>
      <div style={{
        ...styles.floatingParticles,
        top: '30%',
        right: '20%',
        animationDelay: '1s',
        width: '12px',
        height: '12px',
        background: 'rgba(56, 189, 248, 0.6)',
      }}></div>
      <div style={{
        ...styles.floatingParticles,
        bottom: '40%',
        left: '25%',
        animationDelay: '2s',
        width: '6px',
        height: '6px',
        background: 'rgba(139, 92, 246, 0.6)',
      }}></div>

      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.text}>
            <FontAwesomeIcon icon={faCopyright} />
            <span>2025 Kandhal Shakil. All rights reserved.</span>
          </p>
          
          <p style={styles.text}>
            <FontAwesomeIcon icon={faCode} />
            <span>Designed and developed with</span>
            <FontAwesomeIcon 
              icon={faHeart} 
              style={{
                ...styles.heart,
                ...(hoveredIcon === 'heart' ? styles.heartHover : {})
              }}
              onMouseEnter={() => setHoveredIcon('heart')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            <span>by</span>
            <a 
              href="https://shakil-kandhal-portfolio.vercel.app/"
              style={{
                ...styles.link,
                ...(hoveredIcon === 'name' ? styles.linkHover : {})
              }}
              onMouseEnter={() => setHoveredIcon('name')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              Kandhal Shakil
            </a>
          </p>

          <div style={styles.socialIcons}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.iconWrapper,
                  ...(hoveredIcon === `social-${index}` ? styles.iconWrapperHover : {})
                }}
                onMouseEnter={() => setHoveredIcon(`social-${index}`)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <FontAwesomeIcon 
                  icon={social.icon} 
                  style={{ color: hoveredIcon === `social-${index}` ? social.color : 'inherit' }} 
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Add style tag with animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
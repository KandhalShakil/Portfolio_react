<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-divider"></div>
      
      <div className="footer-container">
        {/* Footer Main Content */}
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-about">
            <h3 className="footer-logo">Kandhal Shakil</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating beautiful, functional web experiences. 
              Specializing in React, Node.js, and modern web technologies.
            </p>
            <div className="footer-social">
              <a href="https://github.com/KandhalShakil" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kandhal-shakil-5311302b6" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaLinkedin />
              </a>
              <a href="https://x.com/ShakilKandhal" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/kandhal_shakil_551" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><span onClick={() => scrollToSection('home')}>Home</span></li>
              <li><span onClick={() => scrollToSection('about')}>About</span></li>
              <li><span onClick={() => scrollToSection('skills')}>Skills</span></li>
              <li><span onClick={() => scrollToSection('projects')}>Projects</span></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="footer-section">
            <h3>More</h3>
            <ul className="footer-links">
              <li><span onClick={() => scrollToSection('education')}>Education</span></li>
              <li><span onClick={() => scrollToSection('design')}>Design</span></li>
              <li><span onClick={() => scrollToSection('achievements')}>Achievements</span></li>
              <li><span onClick={() => scrollToSection('contact')}>Contact</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <ul className="footer-contact">
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:kandhalshakil@gmail.com">kandhalshakil@gmail.com</a>
              </li>
              <li>
                <FaPhone className="footer-icon" />
                <a href="tel:+919725845511">+91 9725845511</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Kandhal Shakil — All Rights Reserved.
          </p>
          <p className="footer-subtext">
            Designed & Built with <span className="heart">❤️</span> using React
          </p>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp />
            <span className="back-to-top-tooltip">Top</span>
          </motion.button>
        )}
      </AnimatePresence>
=======
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
>>>>>>> 3853bce4e82a9ecac5ee5dbaade27d8167a64c80
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 3853bce4e82a9ecac5ee5dbaade27d8167a64c80

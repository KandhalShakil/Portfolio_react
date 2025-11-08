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
    </footer>
  );
};

export default Footer;

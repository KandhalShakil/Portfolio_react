import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-brand">Kandhal Shakil</h3>
            <p className="footer-tagline">Building digital experiences with passion</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="footer-link-group">
              <h4>Connect</h4>
              <a href="#education">Experience</a>
              <a href="#achievements">Achievements</a>
              <a href="#contact">Contact</a>
              <a href="mailto:kandhalshakil@gmail.com">Email</a>
            </div>
          </div>
          
          <div className="footer-right">
            <h4>Follow Me</h4>
            <div className="footer-socials">
              <a href="https://github.com/KandhalShakil" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kandhal-shakil-5311302b6" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/ShakilKandhal" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Kandhal Shakil. All Rights Reserved
          </p>
          <p className="footer-made">
            Made with ❤️ using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

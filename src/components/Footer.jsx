import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaTerminal } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    if (window.scrollToSection) window.scrollToSection('home');
  };

  return (
    <footer className="footer-6d">
      <div className="footer-atmosphere">
        <div className="footer-glow"></div>
        <div className="footer-grid-overlay"></div>
      </div>

      <div className="footer-container-6d">
        <div className="footer-main-grid">
          {/* Identity Block */}
          <div className="footer-identity">
            <div className="footer-brand">
              <span className="brand-accent">KANDHAL SHAKIL</span>
            </div>
            <p className="footer-bio">
              Architecting high-performance digital ecosystems through cinematic engineering and AI-driven design.
            </p>
            <div className="system-status">
              <div className="status-dot"></div>
              <span>Available on weekends and holidays.</span>
            </div>
          </div>

          {/* Navigation Block */}
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="column-title">NAVIGATION</h4>
              <button onClick={() => window.scrollToSection('home')}>HOME</button>
              <button onClick={() => window.scrollToSection('about')}>ABOUT</button>
              <button onClick={() => window.scrollToSection('skills')}>SKILLS</button>
            </div>
            <div className="footer-column">
              <h4 className="column-title">MY WORK</h4>
              <button onClick={() => window.scrollToSection('projects')}>PROJECTS</button>
              <button onClick={() => window.scrollToSection('education')}>EDUCATION</button>
              <button onClick={() => window.scrollToSection('contact')}>CONTACT</button>
            </div>
          </div>

          {/* Social Block */}
          <div className="footer-social-vault">
            <h4 className="column-title">CONNECT WITH ME</h4>
            <div className="social-nodes">
              <a href="https://github.com/KandhalShakil" target="_blank" rel="noreferrer" className="social-node glass-6d">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kandhal-shakil-5311302b6" target="_blank" rel="noreferrer" className="social-node glass-6d">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/ShakilKandhal" target="_blank" rel="noreferrer" className="social-node glass-6d">
                <FaTwitter />
              </a>
            </div>
            <button className="back-to-top btn-6d secondary" onClick={scrollToTop}>
              <FaArrowUp /> <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Closing Metadata */}
        <div className="footer-bottom-meta">
          <div className="meta-left"> 
            <span>© 2026 ● KANDHAL SHAKIL</span>
          </div>
          <div className="meta-right">
            <FaTerminal className="terminal-icon" />
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

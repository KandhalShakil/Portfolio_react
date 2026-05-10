import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import { NAV_ITEMS } from '../data/portfolioData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (window.scrollToSection) {
      window.scrollToSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`navbar-6d ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-container-6d glass-6d">
        {/* Left Section: Logo */}
        <div className="nav-section-left">
          <button className="logo-6d" onClick={() => scrollToSection('home')}>
            <span className="logo-accent">KANDHAL SHAKIL</span>
          </button>
        </div>

        {/* Center Section: Desktop Nav Links */}
        <div className="nav-section-center desktop-only">
          <ul className="nav-links-6d">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="nav-item-6d">
                <button onClick={() => scrollToSection(item.id)} className="nav-link-6d">
                  {item.label}
                  <div className="nav-hover-line"></div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section-right">
          <button className="navbar-cta-6d btn-6d primary desktop-only" onClick={() => scrollToSection('contact')}>
            <span>CONNECT</span>
            <div className="btn-glow"></div>
          </button>
          
          <button className="hamburger-6d mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className={`ham-line-wrapper ${mobileMenuOpen ? 'open' : ''}`}>
              <span className="ham-line top"></span>
              <span className="ham-line mid"></span>
              <span className="ham-line bot"></span>
            </div>
            <div className="ham-glow"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-panel-6d"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-panel-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
            <div className="mobile-panel-content glass-6d">
              <div className="mobile-panel-header">
                <span className="panel-label">NAVIGATION_SYSTEM</span>
                <button className="close-panel" onClick={() => setMobileMenuOpen(false)}>×</button>
              </div>
              
              <ul className="mobile-nav-links">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <button onClick={() => scrollToSection(item.id)} className="mobile-link">
                      <span className="link-num">0{idx + 1}</span>
                      <span className="link-text">{item.label}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                className="mobile-panel-footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <button className="btn-6d primary full-width" onClick={() => scrollToSection('contact')}>
                  CONNECT
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

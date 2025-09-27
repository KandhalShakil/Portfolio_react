import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Certificates', to: 'certificate' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    navbar: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: 1000,
      background: isScrolled 
        ? 'rgba(15, 23, 42, 0.95)' 
        : 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: isScrolled 
        ? '1px solid rgba(148, 163, 184, 0.2)' 
        : '1px solid rgba(148, 163, 184, 0.1)',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brand: {
      fontSize: '1.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    nav: {
      display: isMobile ? 'none' : 'flex',
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '0.5rem',
      alignItems: 'center',
    },
    navItem: {
      position: 'relative',
    },
    navLink: {
      color: 'rgba(255, 255, 255, 0.9)',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.9rem',
      padding: '0.75rem 1.25rem',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
    },
    mobileMenuButton: {
      display: isMobile ? 'flex' : 'none',
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '8px',
      width: '44px',
      height: '44px',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: '#3b82f6',
    },
    mobileMenu: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'rgba(15, 23, 42, 0.98)',
      backdropFilter: 'blur(20px)',
      padding: '2rem',
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease',
      zIndex: 1001,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
    },
    mobileNavList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      width: '100%',
    },
    mobileCloseButton: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      borderRadius: '8px',
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: '#ef4444',
    },
  };

  return (
    <>
      <header style={styles.navbar}>
        <div style={styles.container}>
          {/* Brand Logo */}
          <Link
            to="about"
            style={styles.brand}
            smooth={true}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            KS
          </Link>

          {/* Desktop Navigation */}
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              {navItems.map((item, index) => (
                <li key={index} style={styles.navItem}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{
                      ...styles.navLink,
                      background: activeSection === item.to 
                        ? 'rgba(59, 130, 246, 0.1)' 
                        : 'transparent',
                      color: activeSection === item.to 
                        ? '#3b82f6' 
                        : 'rgba(255, 255, 255, 0.9)',
                    }}
                    onSetActive={() => setActiveSection(item.to)}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                      e.target.style.color = '#3b82f6';
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.to) {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(59, 130, 246, 0.2)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(59, 130, 246, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        {/* Close Button */}
        <button
          style={styles.mobileCloseButton}
          onClick={() => setIsMobileMenuOpen(false)}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(239, 68, 68, 0.2)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(239, 68, 68, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Mobile Brand */}
        <div style={{
          ...styles.brand,
          fontSize: '2rem',
          marginBottom: '2rem',
        }}>
          KS
        </div>

        {/* Mobile Navigation */}
        <nav style={{ width: '100%' }}>
          <ul style={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li key={index} style={{ width: '100%', textAlign: 'center' }}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{
                    display: 'block',
                    padding: '1rem 2rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    background: activeSection === item.to 
                      ? 'rgba(59, 130, 246, 0.1)' 
                      : 'transparent',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    margin: '0.5rem 0',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onSetActive={() => setActiveSection(item.to)}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.color = '#3b82f6';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.to) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                    }
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

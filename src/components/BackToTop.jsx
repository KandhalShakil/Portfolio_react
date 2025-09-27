import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsHovered(false);
      }
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.pageYOffset / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Inline styles
  const styles = {
    backToTop: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      opacity: '0',
      visibility: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: '1000',
      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
      overflow: 'hidden',
      transform: 'translateY(20px) scale(0.9)',
    },
    backToTopShow: {
      opacity: '1',
      visibility: 'visible',
      transform: 'translateY(0) scale(1)',
    },
    backToTopHovered: {
      transform: 'translateY(-5px) scale(1.05)',
      boxShadow: '0 8px 25px rgba(99, 102, 241, 0.5)',
      background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
    },
    progressRing: {
      position: 'absolute',
      top: '-5px',
      left: '-5px',
      right: '-5px',
      bottom: '-5px',
      borderRadius: '50%',
      background: 'conic-gradient(#818cf8 ' + progress + '%, transparent ' + progress + '%)',
      WebkitMask: 'radial-gradient(transparent 65%, black 66%)',
      mask: 'radial-gradient(transparent 65%, black 66%)',
      zIndex: '-1',
      transition: 'all 0.3s ease',
    },
    backToTopIcon: {
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    },
    backToTopText: {
      fontSize: '0.7rem',
      fontWeight: '600',
      marginTop: '2px',
      opacity: '0',
      transform: 'translateY(5px)',
      transition: 'all 0.3s ease',
    },
    backToTopTextShow: {
      opacity: '1',
      transform: 'translateY(0)',
    },
    // Pulse animation effect
    pulseEffect: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.2)',
      animation: 'pulse 2s infinite',
      zIndex: '-2',
    },
    // Media queries
    '@media (max-width: 768px)': {
      backToTop: {
        width: '50px',
        height: '50px',
        bottom: '20px',
        right: '20px',
      },
      backToTopIcon: {
        fontSize: '1rem',
      },
      backToTopText: {
        fontSize: '0.6rem',
      },
    },
  };

  return (
    <div
      style={{
        ...styles.backToTop,
        ...(isVisible ? styles.backToTopShow : {}),
        ...(isHovered ? styles.backToTopHovered : {})
      }}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Back to top"
    >
      {/* Progress ring */}
      <div style={styles.progressRing}></div>
      
      {/* Pulse effect */}
      <div style={styles.pulseEffect}></div>
      
      <FontAwesomeIcon 
        icon={faArrowUp} 
        style={styles.backToTopIcon} 
      />
      <span 
        style={{
          ...styles.backToTopText,
          ...(isHovered ? styles.backToTopTextShow : {})
        }}
      >
        Top
      </span>
      
      {/* Add style tag with animations */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.4;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BackToTop;
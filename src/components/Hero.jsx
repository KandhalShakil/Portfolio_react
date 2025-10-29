import React, { useState, useEffect } from 'react';
import { Mail, Download, Trophy} from 'lucide-react';
import { projectsData } from './Projects';

// Font Awesome icons for tech stack
const ReactIcon = () => (
  <i className="fab fa-react" style={{ fontSize: '1.5rem', color: '#61dafb' }}></i>
);

const NodeIcon = () => (
  <i className="fab fa-node-js" style={{ fontSize: '1.5rem', color: '#339933' }}></i>
);

const JsIcon = () => (
  <i className="fab fa-js-square" style={{ fontSize: '1.5rem', color: '#f7df1e' }}></i>
);


const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [showCelebration, setShowCelebration] = useState(false);
  const [paperPieces, setPaperPieces] = useState([]);

  // Certificate celebration date - celebration will show for exactly 3 days from this date
  const certificateDate = new Date('2025-09-23'); // Certificate achievement date
  const currentDate = new Date();
  const daysDifference = Math.floor((currentDate - certificateDate) / (1000 * 60 * 60 * 24));

  // Create paper rain pieces
  useEffect(() => {
    if (showCelebration) {
      const pieces = [];
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2,
          size: 8 + Math.random() * 6,
          color: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 6)],
          shape: Math.random() > 0.5 ? 'square' : 'rectangle'
        });
      }
      setPaperPieces(pieces);
    } else {
      // Clear paper pieces when celebration ends
      setPaperPieces([]);
    }
  }, [showCelebration]);

  const strings = [
    'Frontend Developer',
    'Web Designer',
    'React Specialist',
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Show celebration for exactly 3 days from certificate date (days 0, 1, and 2)
    // After day 2 (starting from day 3), all celebrations will be removed
    if (daysDifference >= 0 && daysDifference <= 2) {
      console.log(`Celebration active - Day ${daysDifference} of 3-day celebration period`);
      setShowCelebration(true);
    } else {
      console.log(`Celebration ended - ${daysDifference} days since certificate date`);
      setShowCelebration(false);
    }
  }, [daysDifference]);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[currentStringIndex];
      
      if (!isDeleting) {
        if (typedText.length < currentString.length) {
          setTypedText(currentString.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 80);
    return () => clearTimeout(timer);
  }, [typedText, currentStringIndex, isDeleting]);

  // Responsive breakpoints
  const isMobile = windowWidth < 576;
  const isTablet = windowWidth >= 576 && windowWidth < 992;
  const isDesktop = windowWidth >= 992;

  const styles = {
    hero: {
      position: 'relative',
      padding: isMobile ? '3rem 0' : isTablet ? '4rem 0' : '5rem 0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
    },
    heroGradient: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      right: '-50%',
      bottom: '-50%',
      background: `
        radial-gradient(circle at 20% 20%, 
          rgba(99, 102, 241, 0.15) 0%,
          rgba(99, 102, 241, 0) 25%
        ),
        radial-gradient(circle at 80% 80%, 
          rgba(16, 185, 129, 0.15) 0%,
          rgba(16, 185, 129, 0) 25%
        ),
        radial-gradient(circle at 50% 50%,
          rgba(59, 130, 246, 0.1) 0%,
          rgba(59, 130, 246, 0) 50%
        )`,
      animation: 'gradientMove 15s ease infinite',
    },
    heroShapes: {
      position: 'absolute',
      inset: 0,
    },
    shape: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(40px)',
      opacity: 0.4,
      animation: 'shapeFloat 20s ease infinite',
    },
    shape1: {
      top: '10%',
      left: '10%',
      width: isMobile ? '150px' : '200px',
      height: isMobile ? '150px' : '200px',
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    },
    shape2: {
      top: '60%',
      right: '5%',
      width: isMobile ? '100px' : '150px',
      height: isMobile ? '100px' : '150px',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      animationDelay: '7s',
    },
    shape3: {
      bottom: '10%',
      left: '30%',
      width: isMobile ? '80px' : '120px',
      height: isMobile ? '80px' : '120px',
      background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
      animationDelay: '14s',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 1rem' : isTablet ? '0 2rem' : '0 3rem',
      position: 'relative',
      zIndex: 1,
    },
    heroContent: {
      padding: isMobile ? '2rem 0' : '3rem 0',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
      gap: isMobile ? '2rem' : '3rem',
      alignItems: 'center',
    },
    heroText: {
      textAlign: isMobile || isTablet ? 'center' : 'left',
    },
    heroTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      lineHeight: 1.2,
      color: '#ffffff',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      animation: 'slideInLeft 1s ease forwards',
    },
    textGradient: {
      background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      filter: 'brightness(1.2) contrast(1.1)',
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      color: '#ffffff',
      marginBottom: '1.5rem',
      fontWeight: '600',
      minHeight: isMobile ? '2.5rem' : '3rem',
      animation: 'slideInRight 1s ease forwards',
    },
    typedText: {
      background: 'linear-gradient(135deg, #34d399 0%, #60a5fa 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '700',
      filter: 'brightness(1.2)',
    },
    heroDescription: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: 'rgba(255, 255, 255, 0.9)',
      maxWidth: isDesktop ? '500px' : '100%',
      margin: isMobile || isTablet ? '0 auto 2rem' : '0 0 2rem 0',
      lineHeight: 1.8,
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
      opacity: 0.9,
      animation: 'fadeIn 2s ease forwards',
    },
    heroButtons: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
      marginBottom: '2rem',
      justifyContent: isMobile || isTablet ? 'center' : 'flex-start',
    },
    btnPrimary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: isMobile ? '0.875rem' : '1rem',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      width: isMobile ? '100%' : 'auto',
      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
    },
    btnOutline: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
      background: 'transparent',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50px',
      fontSize: isMobile ? '0.875rem' : '1rem',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      width: isMobile ? '100%' : 'auto',
      backdropFilter: 'blur(10px)',
    },
    heroHighlights: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    highlightItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: isMobile ? '0.75rem' : '1rem',
      background: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '1rem',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      transition: 'all 0.3s ease',
      margin: isMobile || isTablet ? '0 auto' : '0',
      maxWidth: isMobile ? '100%' : isTablet ? '400px' : '100%',
    },
    highlightIcon: {
      width: isMobile ? '40px' : '48px',
      height: isMobile ? '40px' : '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      borderRadius: '50%',
      fontSize: isMobile ? '1rem' : '1.25rem',
      color: 'white',
      flexShrink: 0,
    },
    highlightContent: {
      flex: 1,
    },
    highlightNumber: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0,
    },
    highlightLabel: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: 'rgba(255, 255, 255, 0.7)',
      margin: 0,
    },
    techStack: {
      display: 'flex',
      gap: isMobile ? '0.5rem' : '1rem',
      marginTop: '1.5rem',
      flexWrap: 'wrap',
      justifyContent: isMobile || isTablet ? 'center' : 'flex-start',
    },
    techBadge: {
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
      background: 'rgba(16, 185, 129, 0.1)',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#10b981',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(16, 185, 129, 0.2)',
    },
    heroMedia: {
      position: 'relative',
      padding: isMobile ? '1rem' : '2rem',
      display: isDesktop ? 'block' : isMobile || isTablet ? 'flex' : 'block',
      justifyContent: 'center',
    },
    profileCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      backdropFilter: 'blur(16px)',
      maxWidth: isMobile ? '300px' : isTablet ? '350px' : '100%',
      margin: '0 auto',
    },
    profileCardHeader: {
      padding: isMobile ? '1.5rem' : '2rem',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1rem' : '0',
    },
    profileImageWrapper: {
      position: 'relative',
      width: isMobile ? '100px' : '120px',
      height: isMobile ? '100px' : '120px',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '3px solid rgba(148, 163, 184, 0.2)',
      background: 'linear-gradient(135deg, #6366f1 0%, #10b981 100%)',
    },
    statusIndicator: {
      position: 'absolute',
      bottom: '5px',
      right: '5px',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: '#10b981',
      border: '2px solid #0f172a',
      animation: 'pulse 2s infinite',
    },
    availableBadge: {
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
      background: 'rgba(16, 185, 129, 0.1)',
      borderRadius: '9999px',
      color: '#10b981',
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      animation: 'pulse 2s infinite',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    profileCardBody: {
      padding: isMobile ? '1rem 1.5rem' : '1.5rem 2rem',
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },
    techTag: {
      padding: isMobile ? '0.25rem 0.5rem' : '0.25rem 0.75rem',
      background: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '9999px',
      fontSize: isMobile ? '0.7rem' : '0.75rem',
      color: '#3b82f6',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    floatingShapes: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      display: isMobile ? 'none' : 'block',
    },
    floatingShape: {
      position: 'absolute',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      fontSize: '1.25rem',
      animation: 'float 6s infinite',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    shapeReact: {
      top: '15%',
      left: '5%',
      background: 'rgba(97, 218, 251, 0.1)',
      animationDelay: '0s',
    },
    shapeNode: {
      top: '50%',
      right: '5%',
      background: 'rgba(51, 153, 51, 0.1)',
      animationDelay: '2s',
    },
    shapeJs: {
      bottom: '15%',
      left: '8%',
      background: 'rgba(247, 223, 30, 0.1)',
      animationDelay: '4s',
    },
    cursor: {
      display: 'inline-block',
      width: '3px',
      height: '1.2em',
      backgroundColor: '#60a5fa',
      marginLeft: '2px',
      animation: 'blink 1s infinite',
    },
    paperRainContainer: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 5,
    },
    paperPiece: {
      position: 'absolute',
      top: '-20px',
      borderRadius: '2px',
      animation: 'paperFall 4s linear infinite',
    },
  };

  return (
    <section style={styles.hero} id="about">
      {/* Animated Celebration Banner */}
      {showCelebration && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff6b6b)',
          backgroundSize: '400% 100%',
          padding: '0.75rem',
          textAlign: 'center',
          zIndex: 1000,
          animation: 'rainbow 4s linear infinite',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}>
          <span style={{ 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: isMobile ? '0.9rem' : '1.1rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            🎉 New Certificate Achieved! Prompt Engineering Mastery! 🏆
          </span>
        </div>
      )}
      
      {/* Pulsing Certificate Badge */}
      {showCelebration && (
        <div style={{
          position: 'fixed',
          top: isMobile ? '80px' : '100px',
          right: '20px',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          borderRadius: '50%',
          width: isMobile ? '50px' : '60px',
          height: isMobile ? '50px' : '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulseGlow 1.5s infinite',
          boxShadow: '0 0 20px rgba(255, 107, 107, 0.5)',
          zIndex: 999,
          border: '2px solid white',
        }}>
          <span style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>🏆</span>
        </div>
      )}
      
      {/* Sparkle Effects */}
      {showCelebration && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 4,
        }}>
          {Array.from({length: 15}).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: '#ffd700',
                borderRadius: '50%',
                animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: '0 0 6px #ffd700',
              }}
            />
          ))}
        </div>
      )}
      
      {/* Achievement Notification Toast */}
      {showCelebration && (
        <div style={{
          position: 'fixed',
          top: isMobile ? '140px' : '180px',
          right: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          animation: 'slideInRight 0.5s ease-out',
          zIndex: 998,
          maxWidth: isMobile ? '250px' : '300px',
          border: '1px solid rgba(255,255,255,0.2)',
        }}>
          <div style={{ 
            fontWeight: 'bold', 
            marginBottom: '0.5rem',
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}>
            🎉 Achievement Unlocked!
          </div>
          <div style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', opacity: 0.9 }}>
            Prompt Engineering Certificate
          </div>
          <div style={{ 
            fontSize: isMobile ? '0.7rem' : '0.8rem', 
            opacity: 0.7, 
            marginTop: '0.25rem' 
          }}>
            Level up complete! 🚀
          </div>
        </div>
      )}
      
      {/* Paper Rain Celebration */}
      {showCelebration && (
        <div style={styles.paperRainContainer}>
          {paperPieces.map((piece) => (
            <div
              key={piece.id}
              style={{
                ...styles.paperPiece,
                left: `${piece.left}%`,
                width: piece.shape === 'square' ? `${piece.size}px` : `${piece.size}px`,
                height: piece.shape === 'square' ? `${piece.size}px` : `${piece.size * 1.5}px`,
                backgroundColor: piece.color,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
              }}
            />
          ))}
        </div>
      )}
      
      <div style={styles.heroBackground}>
        <div style={styles.heroGradient}></div>
        <div style={styles.heroShapes}>
          <div style={{...styles.shape, ...styles.shape1}}></div>
          <div style={{...styles.shape, ...styles.shape2}}></div>
          <div style={{...styles.shape, ...styles.shape3}}></div>
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.heroContent}>
          <div style={styles.row}>
            <div style={styles.heroText}>
              <h1 style={styles.heroTitle}>
                Hi, I'm <span style={styles.textGradient}>Kandhal Shakil</span>
              </h1>
              <div style={styles.heroSubtitle}>
                <span style={styles.typedText}>
                  {typedText}
                  <span style={styles.cursor}></span>
                </span>
              </div>
              <p style={styles.heroDescription}>
                Developer by daylight, code poet by night. Crafting immersive web
                experiences with passion and precision.
              </p>
              <div style={styles.heroButtons}>
                <a 
                  href="mailto:kandhalshakil@gmail.com" 
                  style={styles.btnPrimary}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
                  }}
                >
                  <Mail size={isMobile ? 16 : 18} />
                  Get In Touch
                </a>
              </div>
              <div style={styles.heroHighlights}>
                <div 
                  style={styles.highlightItem}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateX(10px)';
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                    }
                  }}
                >
                  <div style={styles.highlightIcon}>
                    <Trophy />
                  </div>
                  <div style={styles.highlightContent}>
                    <h3 style={styles.highlightNumber}>{projectsData.length || 0}+</h3>
                    <p style={styles.highlightLabel}>Projects Completed</p>
                  </div>
                </div>
                <div style={styles.techStack}>
                  <div 
                    style={styles.techBadge}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                    }}
                  >
                    <span><ReactIcon/></span>
                    <span>React</span>
                  </div>
                  <div 
                    style={styles.techBadge}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                    }}
                  >
                    <span><NodeIcon/></span>
                    <span>Node.js</span>
                  </div>
                  <div 
                    style={styles.techBadge}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                    }}
                  >
                    <span><JsIcon /></span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.heroMedia}>
              <div style={styles.profileCard}>
                <div style={styles.profileCardHeader}>
                  <div style={styles.profileImageWrapper}>
                    <div style={styles.profileImage}>
                      <img 
                        src="pic.jpg" 
                        alt="Kandhal Shakil" 
                        style={{width: '100%', height: '100%', borderRadius: '50%'}}
                      />
                    </div>
                    <div style={styles.statusIndicator}></div>
                  </div>
                  <div style={styles.availableBadge}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#10b981',
                      borderRadius: '50%',
                      display: 'inline-block',
                    }}></span>
                    <span>Available for work</span>
                  </div>
                </div>
                <div style={styles.profileCardBody}>
                  <div style={styles.techTags}>
                    <span style={styles.techTag}>Frontend</span>
                    <span style={styles.techTag}>React</span>
                    <span style={styles.techTag}>UI/UX</span>
                  </div>
                </div>
              </div>
              
              <div style={styles.floatingShapes}>
                <div style={{...styles.floatingShape, ...styles.shapeReact}}>
                  <ReactIcon />
                </div>
                <div style={{...styles.floatingShape, ...styles.shapeNode}}>
                  <NodeIcon />
                </div>
                <div style={{...styles.floatingShape, ...styles.shapeJs}}>
                  <JsIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes gradientMove {
            0% {
              transform: rotate(-15deg) scale(1);
            }
            50% {
              transform: rotate(-5deg) scale(1.1);
            }
            100% {
              transform: rotate(-15deg) scale(1);
            }
          }

          @keyframes shapeFloat {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg) scale(1);
            }
            25% {
              transform: translate(10px, -10px) rotate(5deg) scale(1.05);
            }
            50% {
              transform: translate(-5px, 15px) rotate(-5deg) scale(0.95);
            }
            75% {
              transform: translate(-15px, -5px) rotate(3deg) scale(1.02);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(10deg);
            }
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes blink {
            0%, 50% {
              opacity: 1;
            }
            51%, 100% {
              opacity: 0;
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes celebrationGlow {
            0% {
              filter: brightness(1);
              transform: scale(1);
            }
            100% {
              filter: brightness(1.3);
              transform: scale(1.1);
            }
          }

          @keyframes paperFall {
            0% {
              transform: translateY(-100vh) rotateZ(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotateZ(720deg);
              opacity: 0;
            }
          }

          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes sparkle {
            0%, 100% { 
              opacity: 0; 
              transform: scale(0) rotate(0deg); 
            }
            50% { 
              opacity: 1; 
              transform: scale(1) rotate(180deg); 
            }
          }

          @keyframes pulseGlow {
            0% {
              transform: scale(1);
              box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
            }
            50% {
              transform: scale(1.1);
              box-shadow: 0 0 30px rgba(255, 107, 107, 0.8);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
            }
          }

          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          /* Ensure smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Prevent horizontal scroll */
          body {
            overflow-x: hidden;
            margin: 0;
            padding: 0;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;

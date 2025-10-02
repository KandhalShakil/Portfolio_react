import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faJava,
  faJs,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCode, 
  faBrain, 
  faRobot, 
  faUsers, 
  faChartLine,
  faServer,
  faCog,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

const skillsData = {
  'Frontend Development': [
    { icon: faHtml5, name: 'HTML', color: '#E34F26', description: 'Semantic markup & modern standards' },
    { icon: faCss3Alt, name: 'CSS', color: '#1572B6', description: 'Advanced styling & animations' },
    { icon: faJs, name: 'JavaScript', color: '#F7DF1E', description: 'ES6+ & modern frameworks' },
    { icon: faReact, name: 'React', color: '#61DAFB', description: 'Hooks, Context & performance' },
  ],
  'Backend Development': [
    { icon: faNodeJs, name: 'Node.js', color: '#339933', description: 'Server-side JavaScript runtime' },
    { icon: faPython, name: 'Python', color: '#3776AB', description: 'NumPy, Pandas, Django expertise' },
    { icon: faJava, name: 'Java', color: '#007396', description: 'OOPs & DS' },
    { icon: faServer, name: 'Data Structures', color: '#4338CA', description: 'Algorithms & optimization' },
  ],
  'Database & Storage': [
    { icon: faDatabase, name: 'MongoDB', color: '#47A248', description: 'NoSQL document database' },
    { icon: faDatabase, name: 'SQL', color: '#336791', description: 'Relational database management' },
  ],
  'AI & Modern Tech': [
    { icon: faBrain, name: 'Prompt Engineering', color: '#8B5CF6', description: 'AI optimization & fine-tuning' },
    { icon: faRobot, name: 'AI Chatbot Utilization', color: '#10B981', description: 'ChatGPT, Bard & AI tools' },
  ],
  'Soft Skills': [
    { icon: faUsers, name: 'Team Work', color: '#F59E0B', description: 'Collaborative development' },
    { icon: faChartLine, name: 'Team Management', color: '#EF4444', description: 'Leadership & project coordination' },
  ]
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(Object.keys(skillsData)[0]);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Calculate dynamic heights based on skills count in each category
  const getCategoryHeight = (category) => {
    const skillsCount = skillsData[category]?.length || 0;
    const baseHeight = 120;
    
    // Adjust height based on number of skills
    if (skillsCount <= 2) return baseHeight + 20; // Small groups get extra height
    if (skillsCount <= 4) return baseHeight;
    return baseHeight - 10; // Larger groups get slightly less height
  };

  const getGridColumns = (category) => {
    const skillsCount = skillsData[category]?.length || 0;
    
    // Adjust columns based on skills count for better layout
    if (skillsCount <= 2) return 'repeat(auto-fit, minmax(400px, 1fr))';
    if (skillsCount <= 4) return 'repeat(auto-fit, minmax(350px, 1fr))';
    return 'repeat(auto-fit, minmax(320px, 1fr))';
  };



  // Modern styles with enhanced design system
  const styles = {
    section: {
      position: 'relative',
      padding: '6rem 0',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    container: {
      maxWidth: '1400px',
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
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.7)',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '600px',
      margin: '0 auto 4rem auto',
      lineHeight: 1.6,
    },
    categoryTabs: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '3rem',
    },
    categoryTab: {
      padding: '0.75rem 1.5rem',
      borderRadius: '25px',
      border: '2px solid transparent',
      background: 'rgba(30, 41, 59, 0.8)',
      color: 'rgba(255, 255, 255, 0.7)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.95rem',
      fontWeight: '600',
      backdropFilter: 'blur(10px)',
    },
    categoryTabActive: {
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: 'white',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
    },
    categoryTabHover: {
      transform: 'translateY(-2px)',
      borderColor: 'rgba(99, 102, 241, 0.5)',
      color: 'white',
    },
    skillsGrid: {
      display: 'grid',
      gridAutoRows: '1fr', // Equal height rows
      gap: '1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      alignItems: 'stretch', // Stretch items to fill height
    },
    skillCard: {
      background: 'rgba(30, 41, 59, 0.9)',
      borderRadius: '20px',
      padding: '1.5rem',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      overflow: 'hidden',
      transform: 'translateY(0)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      height: '100%', // Fill available height
    },
    skillCardHover: {
      transform: 'translateY(-5px) scale(1.02)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
      borderColor: 'rgba(99, 102, 241, 0.4)',
    },
    skillIcon: {
      width: '60px',
      height: '60px',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.8rem',
      flexShrink: 0,
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    skillIconHover: {
      transform: 'scale(1.1) rotate(5deg)',
    },
    skillContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '80px', // Ensure content has minimum height
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5rem',
    },
    skillName: {
      color: '#ffffff',
      fontSize: '1.1rem',
      fontWeight: '600',
      margin: 0,
    },
    skillDescription: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '0.85rem',
      marginBottom: '1rem',
      lineHeight: 1.4,
    },
    backgroundElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 0,
    },
    floatingShape: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
      animation: 'float 6s infinite ease-in-out',
    },
    categoryContainer: {
      position: 'relative',
      zIndex: 1,
    },
    // Mobile dropdown styles
    mobileDropdownButton: {
      display: 'none',
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto 2rem auto',
      padding: '1rem 1.5rem',
      borderRadius: '15px',
      border: '2px solid rgba(99, 102, 241, 0.3)',
      background: 'rgba(30, 41, 59, 0.95)',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(15px)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      position: 'relative',
    },
    mobileDropdownButtonActive: {
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      borderColor: 'rgba(99, 102, 241, 0.5)',
      boxShadow: '0 6px 20px rgba(99, 102, 241, 0.3)',
    },
    mobileDropdownMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: '0.5rem',
      background: 'rgba(30, 41, 59, 0.98)',
      borderRadius: '15px',
      border: '2px solid rgba(99, 102, 241, 0.3)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
      opacity: 0,
      transform: 'translateY(-10px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: 'none',
    },
    mobileDropdownMenuOpen: {
      opacity: 1,
      transform: 'translateY(0)',
      pointerEvents: 'auto',
    },
    mobileDropdownItem: {
      width: '100%',
      padding: '1rem 1.5rem',
      border: 'none',
      background: 'transparent',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '0.95rem',
      fontWeight: '500',
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    mobileDropdownItemActive: {
      background: 'rgba(99, 102, 241, 0.2)',
      color: 'white',
      fontWeight: '600',
    },
    mobileDropdownItemHover: {
      background: 'rgba(99, 102, 241, 0.1)',
      color: 'white',
    },
    dropdownIcon: {
      position: 'absolute',
      right: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      transition: 'transform 0.3s ease',
      fontSize: '0.8rem',
    },
    dropdownIconOpen: {
      transform: 'translateY(-50%) rotate(180deg)',
    },
  };

  return (
    <section id="skills" style={styles.section}>
      {/* Background Elements */}
      <div style={styles.backgroundElements}>
        <div style={{
          ...styles.floatingShape,
          width: '300px',
          height: '300px',
          top: '10%',
          right: '10%',
          animationDelay: '0s',
        }}></div>
        <div style={{
          ...styles.floatingShape,
          width: '200px',
          height: '200px',
          bottom: '20%',
          left: '5%',
          animationDelay: '3s',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
        }}></div>
        <div style={{
          ...styles.floatingShape,
          width: '150px',
          height: '150px',
          top: '50%',
          right: '5%',
          animationDelay: '1.5s',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
        }}></div>
      </div>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>
          Professional Skills
          <span style={styles.titleUnderline}></span>
        </h2>

        {/* Mobile Dropdown Button */}
        <div className="mobile-dropdown-container" style={{ position: 'relative' }}>
          <button
            className="mobile-dropdown-button"
            style={{
              ...styles.mobileDropdownButton,
              ...(isMobileDropdownOpen ? styles.mobileDropdownButtonActive : {}),
            }}
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
          >
            {activeCategory}
            <span style={{
              ...styles.dropdownIcon,
              ...(isMobileDropdownOpen ? styles.dropdownIconOpen : {}),
            }}>
              ▼
            </span>
          </button>
          
          {/* Mobile Dropdown Menu */}
          <div style={{
            ...styles.mobileDropdownMenu,
            ...(isMobileDropdownOpen ? styles.mobileDropdownMenuOpen : {}),
          }}>
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                style={{
                  ...styles.mobileDropdownItem,
                  ...(activeCategory === category ? styles.mobileDropdownItemActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category) {
                    Object.assign(e.target.style, styles.mobileDropdownItemHover);
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    Object.assign(e.target.style, {
                      background: 'transparent',
                      color: 'rgba(255, 255, 255, 0.8)',
                    });
                  }
                }}
                onClick={() => {
                  setActiveCategory(category);
                  setIsMobileDropdownOpen(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs" style={styles.categoryTabs}>
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'category-tab-active' : ''}`}
              title={`${skillsData[category]?.length || 0} skills in this category`}
              style={{
                ...styles.categoryTab,
                ...(activeCategory === category ? styles.categoryTabActive : {}),
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  Object.assign(e.target.style, styles.categoryTabHover);
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  Object.assign(e.target.style, {
                    transform: 'none',
                    borderColor: 'transparent',
                    color: 'rgba(255, 255, 255, 0.7)',
                  });
                }
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              <span style={{
                marginLeft: '0.5rem',
                fontSize: '0.75rem',
                background: 'rgba(99, 102, 241, 0.2)',
                color: '#a5b4fc',
                padding: '0.2rem 0.5rem',
                borderRadius: '10px',
                fontWeight: '500'
              }}>
                {skillsData[category]?.length || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={styles.categoryContainer}>
          <div 
            className="skillsGrid" 
            style={{
              ...styles.skillsGrid,
              gridTemplateColumns: getGridColumns(activeCategory),
            }}
          >
            {skillsData[activeCategory]?.map((skill, index) => (
              <div
                key={`${activeCategory}-${index}`}
                className="skillCard"
                style={{
                  ...styles.skillCard,
                  minHeight: `${getCategoryHeight(activeCategory)}px`,
                  ...(hoveredSkill === `${activeCategory}-${index}` ? styles.skillCardHover : {}),
                }}
                onMouseEnter={() => setHoveredSkill(`${activeCategory}-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Icon */}
                <div
                  style={{
                    ...styles.skillIcon,
                    background: `linear-gradient(135deg, ${skill.color}15 0%, ${skill.color}25 100%)`,
                    ...(hoveredSkill === `${activeCategory}-${index}` ? styles.skillIconHover : {}),
                  }}
                >
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    style={{ color: skill.color }}
                  />
                </div>

                {/* Skill Content */}
                <div style={styles.skillContent}>
                  <div style={styles.skillHeader}>
                    <h3 style={styles.skillName}>{skill.name}</h3>
                  </div>
                  
                  <p style={styles.skillDescription}>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Animations & Styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(2deg); }
            66% { transform: translateY(-5px) rotate(-1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          @keyframes slideIn {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.3); }
            50% { box-shadow: 0 0 25px rgba(99, 102, 241, 0.6); }
            100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.3); }
          }
          
          /* Enhanced Mobile Design */
                }

      /* Skills Grid Responsive Heights - Group-based */
      @media (min-width: 1200px) {
        .skillsGrid {
          /* Dynamic columns handled by JavaScript */
        }
        /* Small groups (2 skills): Database & Storage, AI & Modern Tech */
        .skillCard {
          min-height: 140px; /* Base height for desktop */
        }
      }

      @media (min-width: 768px) and (max-width: 1199px) {
        .skillsGrid {
          /* Dynamic columns handled by JavaScript */
        }
        .skillCard {
          min-height: 130px; /* Base height for tablet */
        }
      }

      @media (max-width: 767px) {
        .skillsGrid {
          grid-template-columns: 1fr !important;
          gap: 1rem;
        }
        .skillCard {
          min-height: 110px; /* Base height for mobile */
          padding: 1.25rem;
          gap: 1.25rem;
        }
      }

      @media (max-width: 768px) {
            .skills-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            
            .skill-card {
              flex-direction: column !important;
              text-align: center !important;
              gap: 1rem !important;
            }
            
            /* Show Mobile Dropdown */
            .mobile-dropdown-button {
              display: block !important;
            }
            
            /* Hide Regular Category Tabs on Mobile */
            .category-tabs {
              display: none !important;
            }
          }
          
          /* Medium screens (tablets) */
          @media (max-width: 1024px) and (min-width: 769px) {
            .category-tabs {
              gap: 0.75rem !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
            }
            
            .category-tab {
              padding: 0.875rem 1.25rem !important;
              font-size: 0.9rem !important;
              min-width: 160px !important;
            }
          }
          
          /* Small mobile screens */
          @media (max-width: 480px) {
            .mobile-dropdown-button {
              padding: 1.25rem 1.5rem !important;
              font-size: 0.95rem !important;
            }
          }
          
          /* Smooth transitions for category changes */
          .skills-grid {
            animation: slideIn 0.5s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;

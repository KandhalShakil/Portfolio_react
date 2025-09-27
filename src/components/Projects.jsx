import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faExternalLinkAlt,
  faCode,
  faLaptopCode,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectsData = [
  {
    img: "https://github.com/KandhalShakil/Sky_Event/blob/main/logo.jpg?raw=true",
    title: "SKY Event",
    description:
      "A responsive event management and promotion website built with HTML5, CSS3, and JavaScript. SKY Event combines traditional structured layouts with modern interactivity, providing a professional platform for showcasing events. It emphasizes user experience through clean navigation, dynamic visuals, and cross-device accessibility, ensuring both elegance and functionality.",
    link: "https://sky-event.vercel.app/",
    github: "https://github.com/KandhalShakil/Sky_Event",
  },
  {
    img: "https://img.freepik.com/premium-vector/tic-tac-toe-logo-icon_1076610-87173.jpg",
    title: "Tic tac toe",
    description:
      "A timeless Tic-Tac-Toe game developed with HTML, CSS, and JavaScript. This project offers a responsive design that preserves the simplicity of traditional gameplay while adapting seamlessly to modern devices. It demonstrates the balance of minimalistic design principles and engaging interactivity, ensuring smooth performance for players of all ages.",
    link: "https://tic-tac-toe-game-cyan-five.vercel.app/",
    github: "https://github.com/KandhalShakil/TIC-TAC-TOE-GAME",
  },
  {
    img: "pic.jpg",
    title: "Personal Portfolio",
    description:
      "A React.js-powered portfolio website highlighting projects, technical expertise, and personal achievements. Styled with styled-components, it reflects professionalism through modern UI design, responsiveness, and clear project presentation. The portfolio serves as a personal brand hub, blending creativity with structure, ensuring recruiters and collaborators can easily explore skills, experiences, and work samples.",
    link: "https://shakil-kandhal-portfolio.vercel.app/",
    github: "https://github.com/KandhalShakil/Portfolio_react",
  },
  {
    img: "game.jpg",
    title: "Tic Tac Toe Game Using React",
    description:
      "An advanced Tic-Tac-Toe game built with React.js and Node.js, featuring AI opponents, authentication, game statistics, and a sleek dark mode UI. It extends classic gameplay into a modern digital experience with intelligent design and enhanced features, showcasing the integration of frontend, backend, and interactive functionality in a single project.",
    link: "https://kandhal-shakil-game.vercel.app/",
    github: "https://github.com/KandhalShakil/Tic-tac-toe-react",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Inline styles
  const styles = {
    section: {
      position: "relative",
      padding: "5rem 1rem",
      overflow: "hidden",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    },
    titleUnderline: {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: "25%",
      width: "50%",
      height: "4px",
      background:
        "linear-gradient(90deg, transparent, #818cf8, #38bdf8, transparent)",
      borderRadius: "2px",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0",
    },
    sectionTitle: {
      fontSize: "3rem",
      fontWeight: "800",
      textAlign: "center",
      marginBottom: "3rem",
      background:
        "linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #7c3aed 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      letterSpacing: "-0.025em",
      position: "relative",
      display: "inline-block",
      left: "50%",
      transform: "translateX(-50%)",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1.5rem",
      margin: "0",
    },
    col: {
      flex: "1 1 100%",
      maxWidth: "100%",
      boxSizing: "border-box",
    },
    projectCard: {
      background: "rgba(30, 41, 59, 0.5)",
      borderRadius: "20px",
      overflow: "hidden",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      border: "1px solid rgba(99, 102, 241, 0.1)",
      backdropFilter: "blur(10px)",
      position: "relative",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
    },
    projectImageWrapper: {
      position: "relative",
      paddingTop: "60%",
      background: "#1e293b",
      overflow: "hidden",
      borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
    },
    projectImage: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    projectOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(215deg, rgba(99, 102, 241, 0.95) 0%, rgba(67, 56, 202, 0.95) 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: "0",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      backdropFilter: "blur(4px)",
      zIndex: "2",
    },
    projectContent: {
      textAlign: "center",
      transform: "translateY(20px)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      padding: "2rem",
      opacity: "0",
    },
    projectIcon: {
      width: "60px",
      height: "60px",
      background: "rgba(255, 255, 255, 0.2)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 1.5rem",
      fontSize: "1.5rem",
      color: "white",
      transform: "scale(0.8)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    projectOverlayTitle: {
      fontSize: "1.25rem",
      color: "white",
      marginBottom: "1rem",
      fontWeight: "600",
    },
    projectDetails: {
      padding: "1.5rem",
      position: "relative",
      zIndex: "1",
    },
    projectBadge: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "0.875rem",
      color: "rgba(255, 255, 255, 0.6)",
      marginBottom: "1rem",
    },
    projectTitle: {
      color: "#ffffff",
      fontSize: "clamp(1rem, 4vw, 1.1rem)",
      marginBottom: "1rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    projectDescription: {
      color: "rgba(255, 255, 255, 0.85)",
      fontSize: "clamp(0.85rem, 3vw, 0.95rem)",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
    },
    projectLinks: {
      display: "flex",
      gap: "0.75rem",
      flexWrap: "wrap",
    },
    projectLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.6rem 1rem",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "clamp(0.8rem, 2.5vw, 0.85rem)",
      fontWeight: "500",
      transition: "all 0.3s ease",
      flex: "1",
      minWidth: "120px",
      justifyContent: "center",
    },
    liveLink: {
      background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
      color: "white",
    },
    codeLink: {
      background: "rgba(255, 255, 255, 0.1)",
      color: "rgba(255, 255, 255, 0.9)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    comingSoonCard: {
      background: "rgba(30, 41, 59, 0.5)",
      borderRadius: "20px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "350px",
      border: "2px dashed rgba(99, 102, 241, 0.3)",
      transition: "all 0.3s ease",
    },
    comingSoonContent: {
      textAlign: "center",
      padding: "2rem",
    },
    placeholderIcon: {
      marginBottom: "1.5rem",
      color: "#10b981",
      fontSize: "clamp(2rem, 6vw, 3rem)",
    },
    comingSoonTitle: {
      fontSize: "clamp(1rem, 4vw, 1.2rem)",
      color: "#ffffff",
      marginBottom: "1rem",
      fontWeight: "600",
    },
    comingSoonText: {
      color: "rgba(255, 255, 255, 0.7)",
      marginBottom: "0",
      fontSize: "clamp(0.85rem, 3vw, 1rem)",
    },
    placeholderDots: {
      display: "flex",
      gap: "0.5rem",
      justifyContent: "center",
      marginTop: "1.5rem",
    },
    dot: {
      width: "8px",
      height: "8px",
      background: "#10b981",
      borderRadius: "50%",
      animation: "loadingDots 1.4s infinite",
    },
    footerText: {
      textAlign: "center",
      marginTop: "3rem",
      color: "rgba(255, 255, 255, 0.85)",
      fontSize: "clamp(1rem, 3vw, 1.1rem)",
    },
    spinIcon: {
      marginRight: "0.5rem",
      animation: "spin 2s infinite linear",
    },
    githubButtonContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2rem",
    },
    githubButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
      borderRadius: "50px",
      textDecoration: "none",
      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
      fontWeight: "600",
      transition: "all 0.3s ease",
      background: "linear-gradient(135deg, #333333 0%, #0f172a 100%)",
      color: "white",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
  };

  // Media query adjustments
  const mediaQueries = `
    @media (min-width: 576px) {
      .project-col {
        flex: 1 1 calc(50% - 1.5rem) !important;
        max-width: calc(50% - 1.5rem) !important;
      }
      .project-link {
        min-width: 140px !important;
      }
    }
    
    @media (min-width: 768px) {
      .project-col {
        flex: 1 1 calc(33.333% - 1.5rem) !important;
        max-width: calc(33.333% - 1.5rem) !important;
      }
    }
    
    @media (max-width: 480px) {
      .project-links {
        flex-direction: column !important;
      }
      
      .project-link {
        width: 100% !important;
      }
    }
    
    @media (max-width: 350px) {
      .project-content {
        padding: 1rem !important;
      }
      
      .project-details {
        padding: 1rem !important;
      }
    }
  `;

  // Function to handle hover effects
  const handleHover = (e, isHover) => {
    const card = e.currentTarget;
    const image = card.querySelector('[data-type="project-image"]');
    const overlay = card.querySelector('[data-type="project-overlay"]');
    const content = card.querySelector('[data-type="project-content"]');
    const icon = card.querySelector('[data-type="project-icon"]');
    const title = card.querySelector('[data-type="project-title"]');

    if (isHover) {
      card.style.transform = "translateY(-8px)";
      card.style.borderColor = "rgba(99, 102, 241, 0.5)";
      card.style.boxShadow =
        "0 15px 30px rgba(99, 102, 241, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.2), inset 0 0 20px rgba(99, 102, 241, 0.1)";

      if (image) image.style.transform = "scale(1.1)";
      if (overlay) overlay.style.opacity = "1";
      if (content) {
        content.style.transform = "translateY(0)";
        content.style.opacity = "1";
      }
      if (icon) {
        icon.style.transform = "scale(1) rotate(360deg)";
        icon.style.background = "rgba(255, 255, 255, 0.3)";
        icon.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)";
      }
      if (title) title.style.color = "#818cf8";
    } else {
      card.style.transform = "translateY(0)";
      card.style.borderColor = "rgba(99, 102, 241, 0.1)";
      card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";

      if (image) image.style.transform = "scale(1)";
      if (overlay) overlay.style.opacity = "0";
      if (content) {
        content.style.transform = "translateY(20px)";
        content.style.opacity = "0";
      }
      if (icon) {
        icon.style.transform = "scale(0.8)";
        icon.style.background = "rgba(255, 255, 255, 0.2)";
        icon.style.boxShadow = "none";
      }
      if (title) title.style.color = "#ffffff";
    }
  };

  // Function to handle link hover
  const handleLinkHover = (e, isHover, type) => {
    if (type === "live") {
      if (isHover) {
        e.currentTarget.style.background =
          "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)";
        e.currentTarget.style.transform = "translateY(-2px)";
      } else {
        e.currentTarget.style.background =
          "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)";
        e.currentTarget.style.transform = "translateY(0)";
      }
    } else if (type === "code") {
      if (isHover) {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      } else {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }
    } else if (type === "github") {
      if (isHover) {
        e.currentTarget.style.background =
          "linear-gradient(135deg, #0f172a 0%, #333333 100%)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
      } else {
        e.currentTarget.style.background =
          "linear-gradient(135deg, #333333 0%, #0f172a 100%)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
      }
    }
  };

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>
          Projects
          <span style={styles.titleUnderline}></span>
        </h2>

        <div style={styles.row}>
          {projectsData.map((project, index) => (
            <div style={styles.col} className="project-col" key={index}>
              <div
                style={styles.projectCard}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <div style={styles.projectImageWrapper}>
                  <img
                    src={project.img}
                    alt={project.title}
                    style={styles.projectImage}
                    data-type="project-image"
                  />
                  <div
                    style={styles.projectOverlay}
                    data-type="project-overlay"
                  >
                    <div
                      style={styles.projectContent}
                      data-type="project-content"
                      className="project-content"
                    >
                      <div style={styles.projectIcon} data-type="project-icon">
                        <FontAwesomeIcon icon={faLaptopCode} />
                      </div>
                      <h5 style={styles.projectOverlayTitle}>
                        {project.title}
                      </h5>
                      <div
                        style={styles.projectLinks}
                        className="project-links"
                      >
                        <a
                          href={project.link}
                          style={{ ...styles.projectLink, ...styles.liveLink }}
                          className="project-link"
                          onMouseEnter={(e) => handleLinkHover(e, true, "live")}
                          onMouseLeave={(e) =>
                            handleLinkHover(e, false, "live")
                          }
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          style={{ ...styles.projectLink, ...styles.codeLink }}
                          className="project-link"
                          onMouseEnter={(e) => handleLinkHover(e, true, "code")}
                          onMouseLeave={(e) =>
                            handleLinkHover(e, false, "code")
                          }
                        >
                          <FontAwesomeIcon icon={faCode} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={styles.projectDetails} className="project-details">
                  <div style={styles.projectBadge}>
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      style={{ color: "#818cf8", marginRight: "0.5rem" }}
                    />
                    <span>Project</span>
                  </div>
                  <h5 style={styles.projectTitle} data-type="project-title">
                    {project.title}
                  </h5>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.projectLinks} className="project-links">
                    <a
                      href={project.link}
                      style={{ ...styles.projectLink, ...styles.liveLink }}
                      className="project-link"
                      onMouseEnter={(e) => handleLinkHover(e, true, "live")}
                      onMouseLeave={(e) => handleLinkHover(e, false, "live")}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      style={{ ...styles.projectLink, ...styles.codeLink }}
                      className="project-link"
                      onMouseEnter={(e) => handleLinkHover(e, true, "code")}
                      onMouseLeave={(e) => handleLinkHover(e, false, "code")}
                    >
                      <FontAwesomeIcon icon={faCode} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div style={styles.col} className="project-col">
            <div style={styles.comingSoonCard}>
              <div style={styles.comingSoonContent}>
                <div style={styles.placeholderIcon}>
                  <FontAwesomeIcon icon={faHourglassHalf} />
                </div>
                <h5 style={styles.comingSoonTitle}>New Project Coming Soon</h5>
                <p style={styles.comingSoonText}>
                  Stay tuned for more amazing projects!
                </p>
                <div style={styles.placeholderDots}>
                  <span style={{ ...styles.dot, animationDelay: "0s" }}></span>
                  <span
                    style={{ ...styles.dot, animationDelay: "0.2s" }}
                  ></span>
                  <span
                    style={{ ...styles.dot, animationDelay: "0.4s" }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.githubButtonContainer}>
          <a
            href="https://github.com/KandhalShakil"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.githubButton}
            onMouseEnter={(e) => handleLinkHover(e, true, "github")}
            onMouseLeave={(e) => handleLinkHover(e, false, "github")}
          >
            <FontAwesomeIcon icon={faGithub} />
            View All Projects on GitHub
          </a>
        </div>

        <div style={styles.footerText}>
          <p>
            <FontAwesomeIcon icon={faAtom} style={styles.spinIcon} />
            Amazing projects are in development!
          </p>
        </div>
      </div>

      {/* Add style tag with animations and media queries */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes loadingDots {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          
          @keyframes shine {
            0% { transform: translateX(-100%) rotate(-25deg); }
            100% { transform: translateX(100%) rotate(-25deg); }
          }
          
          ${mediaQueries}
        `}
      </style>
    </section>
  );
};

export default Projects;
export { projectsData };

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCertificate, faHourglassHalf, faExternalLinkAlt, faEye, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const certificatesData = [
  {
    img: '/images/certificates/Introduction to Java.png',
    title: 'Introduction to Java',
    link: 'https://coursera.org/verify/TUX8P7X8ELQD',
    provider: 'Coursera',
    directLink: 'https://coursera.org/verify/TUX8P7X8ELQD',
  },
  {
    img: '/images/certificates/Inheritance and Data Structures in Java.png',
    title: 'Inheritance and Data Structures in Java',
    link: 'https://coursera.org/verify/H8XTMHMZSYZX',
    provider: 'Coursera',
    directLink: 'https://coursera.org/verify/H8XTMHMZSYZX',
  },
  {
    img: '/images/certificates/Introduction to HTML, CSS, & JavaScript.png',
    title: 'Introduction to HTML, CSS, & JavaScript',
    link: 'https://coursera.org/verify/2MWVBEWX2M8N',
    provider: 'Coursera',
    directLink: 'https://coursera.org/verify/2MWVBEWX2M8N',
  },
  {
    img: '/images/certificates/Exploratory Data Analysis for Machine Learning.png',
    title: 'Exploratory Data Analysis for Machine Learning',
    link: 'https://www.coursera.org/account/accomplishments/verify/NBH6CSAM16MD',
    provider: 'Coursera',
    directLink: 'https://www.coursera.org/account/accomplishments/verify/NBH6CSAM16MD',
  },
  {
    img: '/images/certificates/Developing Front-End Apps with React.png',
    title: 'Developing Front-End Apps with React',
    link: 'https://coursera.org/verify/0178B60775HH',
    provider: 'Coursera',
    directLink: 'https://coursera.org/verify/0178B60775HH',
  },
  {
    img: '/images/certificates/prompt_engg.png',
    title: 'Prompt Engineering: The Skill of Asking AI Right',
    link: 'https://drive.google.com/file/d/1gjw4euDn_6bJ16aXcIA2te8-NSo7lKld/view?usp=sharing',
    provider: 'Wayspire',
    directLink: 'https://drive.google.com/file/d/1gjw4euDn_6bJ16aXcIA2te8-NSo7lKld/view?usp=sharing', // No direct link available
  },
];

const Certificates = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Comprehensive email message templates for all certificate types
  const certificateMessages = {
    'Introduction to Java': [
      "Hello! I came across your portfolio and I'm impressed by your Java programming certification. Could you please share the certificate via email? I'd love to see the details of your achievement.",
      "Hi there! I noticed you have a Java certification from Coursera. Would it be possible to receive a copy of this certificate through email? It looks very valuable for Java developers!",
      "Greetings! Your Java programming certification caught my attention. I'm learning Java and would appreciate if you could email me the certificate details. Thank you!",
      "Hello! I'm currently exploring Java development. Your Coursera certificate looks impressive - could you please send it to me via email? I'd be grateful!",
      "Hi! I'm impressed by your Java programming skills showcased in your portfolio. Would you mind sharing the certificate through email? I'm very interested in learning more about it.",
      "Hello there! Your Introduction to Java certification is quite impressive. Could you please email me the certificate? I'm researching Java learning paths.",
      "Hi! I'm a fellow developer interested in Java programming. Your certificate looks amazing - would it be possible to receive a copy via email? Thanks in advance!",
      "Greetings! I came across your portfolio and the Java certificate really stands out. Could you kindly share it through email? I'd love to examine the curriculum.",
      "Hello! Your expertise in Java is evident from your portfolio. Would you be able to email me the certificate? I'm considering similar training.",
      "Hi there! I'm fascinated by your Java certification. Could you please send me the certificate details via email? It would be incredibly helpful for my learning journey."
    ],
    'Inheritance and Data Structures in Java': [
      "Hello! Your advanced Java certification in Data Structures and Inheritance is impressive. Could you please share the certificate via email? I'd love to see the advanced concepts covered.",
      "Hi there! I noticed your specialization in Java Data Structures. Would it be possible to receive a copy of this certificate through email? It's exactly what I'm studying!",
      "Greetings! Your Java Data Structures and Inheritance certification caught my attention. I'm working on similar concepts and would appreciate the certificate details via email.",
      "Hello! I'm currently mastering Java OOP concepts. Your certificate looks comprehensive - could you please send it to me via email? I'd be grateful!",
      "Hi! I'm impressed by your advanced Java skills in data structures. Would you mind sharing the certificate through email? I'm very interested in this specialization.",
      "Hello there! Your Java Inheritance and Data Structures certification is quite advanced. Could you please email me the certificate? I'm researching advanced Java topics.",
      "Hi! I'm a Java developer looking to advance my skills. Your certificate looks perfect - would it be possible to receive a copy via email? Thanks in advance!",
      "Greetings! Your advanced Java certification really stands out in your portfolio. Could you kindly share it through email? I'd love to see the advanced topics covered.",
      "Hello! Your expertise in Java data structures is evident. Would you be able to email me the certificate? I'm planning to take similar advanced courses.",
      "Hi there! I'm fascinated by your advanced Java certification. Could you please send me the certificate details via email? It would help me plan my learning path."
    ],
    'Introduction to HTML, CSS, & JavaScript': [
      "Hello! Your web development foundation certificate is impressive. Could you please share the HTML, CSS & JavaScript certificate via email? I'd love to see the curriculum details.",
      "Hi there! I noticed your comprehensive web development certification. Would it be possible to receive a copy through email? It covers exactly what I need to learn!",
      "Greetings! Your front-end development certification caught my attention. I'm starting web development and would appreciate the certificate details via email.",
      "Hello! I'm currently learning web development fundamentals. Your certificate looks comprehensive - could you please send it to me via email? I'd be grateful!",
      "Hi! I'm impressed by your web development foundation skills. Would you mind sharing the certificate through email? I'm very interested in this learning path.",
      "Hello there! Your HTML, CSS & JavaScript certification is quite comprehensive. Could you please email me the certificate? I'm researching web development courses.",
      "Hi! I'm beginning my web development journey. Your certificate looks perfect for beginners - would it be possible to receive a copy via email? Thanks!",
      "Greetings! Your web development foundation certificate really stands out. Could you kindly share it through email? I'd love to see what topics are covered.",
      "Hello! Your front-end development expertise is evident from this certificate. Would you be able to email it to me? I'm planning to start web development.",
      "Hi there! I'm fascinated by your web development certification. Could you please send me the certificate details via email? It would help me understand the curriculum."
    ],
    'Exploratory Data Analysis for Machine Learning': [
      "Hello! Your Machine Learning and Data Analysis certification is impressive. Could you please share the certificate via email? I'd love to see the ML techniques covered.",
      "Hi there! I noticed your specialization in Data Analysis for ML. Would it be possible to receive a copy of this certificate through email? It's highly relevant to my field!",
      "Greetings! Your Machine Learning Data Analysis certification caught my attention. I'm working in ML and would appreciate the certificate details via email.",
      "Hello! I'm currently exploring ML and data analysis. Your certificate looks comprehensive - could you please send it to me via email? I'd be grateful!",
      "Hi! I'm impressed by your data science and ML skills. Would you mind sharing the certificate through email? I'm very interested in this specialization.",
      "Hello there! Your Exploratory Data Analysis certification is quite advanced. Could you please email me the certificate? I'm researching ML learning paths.",
      "Hi! I'm a data enthusiast looking to advance in ML. Your certificate looks perfect - would it be possible to receive a copy via email? Thanks in advance!",
      "Greetings! Your ML Data Analysis certification really stands out. Could you kindly share it through email? I'd love to see the analytical techniques covered.",
      "Hello! Your expertise in ML data analysis is evident. Would you be able to email me the certificate? I'm planning to specialize in this area.",
      "Hi there! I'm fascinated by your ML certification. Could you please send me the certificate details via email? It would help me understand the ML curriculum."
    ],
    'Developing Front-End Apps with React': [
      "Hello! Your React development certification is impressive. Could you please share the certificate via email? I'd love to see the React concepts covered.",
      "Hi there! I noticed your specialization in React front-end development. Would it be possible to receive a copy through email? It's exactly what I'm learning!",
      "Greetings! Your React development certification caught my attention. I'm working with React and would appreciate the certificate details via email.",
      "Hello! I'm currently mastering React development. Your certificate looks comprehensive - could you please send it to me via email? I'd be grateful!",
      "Hi! I'm impressed by your React skills showcased in this certification. Would you mind sharing the certificate through email? I'm very interested in React development.",
      "Hello there! Your React Front-End Apps certification is quite advanced. Could you please email me the certificate? I'm researching React learning resources.",
      "Hi! I'm a front-end developer focusing on React. Your certificate looks perfect - would it be possible to receive a copy via email? Thanks in advance!",
      "Greetings! Your React development certification really stands out. Could you kindly share it through email? I'd love to see the React topics covered.",
      "Hello! Your expertise in React development is evident. Would you be able to email me the certificate? I'm planning to advance my React skills.",
      "Hi there! I'm fascinated by your React certification. Could you please send me the certificate details via email? It would help me plan my React learning journey."
    ],
    'Prompt Engineering: The Skill of Asking AI Right': [
      "Hello! I came across your portfolio and I'm impressed by your Prompt Engineering certification. Could you please share the certificate via email? I'd love to see the details of your achievement.",
      "Hi there! I noticed you have a Prompt Engineering certificate from Wayspire. Would it be possible to receive a copy of this certificate through email? It looks very interesting!",
      "Greetings! Your Prompt Engineering certification caught my attention. I'm working in a similar field and would appreciate if you could email me the certificate details. Thank you!",
      "Hello! I'm currently exploring AI and prompt engineering. Your Wayspire certificate looks fascinating - could you please send it to me via email? I'd be grateful!",
      "Hi! I'm impressed by your prompt engineering skills showcased in your portfolio. Would you mind sharing the certificate through email? I'm very interested in learning more about it.",
      "Hello there! Your Prompt Engineering certification from Wayspire is quite impressive. Could you please email me the certificate? I'm researching similar programs.",
      "Hi! I'm a fellow developer interested in AI and prompt engineering. Your certificate looks amazing - would it be possible to receive a copy via email? Thanks in advance!",
      "Greetings! I came across your portfolio and the Prompt Engineering certificate really stands out. Could you kindly share it through email? I'd love to examine the curriculum.",
      "Hello! Your expertise in prompt engineering is evident from your portfolio. Would you be able to email me the Wayspire certificate? I'm considering similar training.",
      "Hi there! I'm fascinated by your Prompt Engineering certification. Could you please send me the certificate details via email? It would be incredibly helpful for my research."
    ],
  };

  // Function to scroll to contact section and fill message
  const scrollToContactAndFillMessage = (certificateTitle) => {
    const messages = certificateMessages[certificateTitle] || certificateMessages['Prompt Engineering: The Skill of Asking AI Right'];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Close modal first
    setShowModal(false);
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll to complete, then start typewriter directly in textarea
      setTimeout(() => {
        const messageTextarea = document.querySelector('textarea[name="message"]');
        if (messageTextarea) {
          // Clear and focus textarea
          messageTextarea.value = '';
          messageTextarea.focus();
          
          // Start typewriter effect directly in the textarea
          let i = 0;
          const typeInterval = setInterval(() => {
            if (i <= randomMessage.length) {
              const currentText = randomMessage.substring(0, i);
              messageTextarea.value = currentText;
              
              // Trigger React events to update state
              const inputEvent = new Event('input', { bubbles: true });
              messageTextarea.dispatchEvent(inputEvent);
              
              // Keep focus and scroll to cursor position
              messageTextarea.focus();
              messageTextarea.setSelectionRange(currentText.length, currentText.length);
              
              i++;
            } else {
              clearInterval(typeInterval);
              // Final update
              const changeEvent = new Event('change', { bubbles: true });
              messageTextarea.dispatchEvent(changeEvent);
            }
          }, 60); // 60ms per character for smooth typing
        }
      }, 1000); // Wait 1 second for scroll to complete
    }
  };

  // Modern styles matching your design system
  const styles = {
    section: {
      position: 'relative',
      padding: '5rem 0',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    container: {
      maxWidth: '1200px',
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
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
    },
    col: {
      flex: '0 0 calc(33.333% - 2rem)',
      minWidth: '300px',
      maxWidth: '380px',
    },
    certificateCard: {
      background: 'rgba(30, 41, 59, 0.8)',
      borderRadius: '24px',
      overflow: 'hidden',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      transform: 'translateY(0)',
      transition: 'all 0.3s ease',
      height: '100%',
    },
    certificateCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 35px 60px rgba(0, 0, 0, 0.3)',
      borderColor: 'rgba(99, 102, 241, 0.5)',
    },
    imageWrapper: {
      position: 'relative',
      overflow: 'hidden',
      height: '200px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    imageHover: {
      transform: 'scale(1.05)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(79, 70, 229, 0.9) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    overlayVisible: {
      opacity: 1,
    },
    overlayContent: {
      textAlign: 'center',
      padding: '1.5rem',
    },
    overlayIcon: {
      fontSize: '2.5rem',
      color: 'white',
      marginBottom: '1rem',
    },
    overlayTitle: {
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
    },
    overlayButton: {
      background: 'rgba(255, 255, 255, 0.95)',
      color: '#1e293b',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      padding: '0.875rem 1.75rem',
      borderRadius: '14px',
      fontWeight: '600',
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.625rem',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    overlayButtonHover: {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 12px 25px rgba(255, 255, 255, 0.25)',
      borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    overlayButtonShow: {
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(37, 99, 235, 0.95) 100%)',
      color: 'white',
      border: '2px solid rgba(59, 130, 246, 0.3)',
    },
    overlayButtonShowHover: {
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 1) 0%, rgba(37, 99, 235, 1) 100%)',
      boxShadow: '0 12px 25px rgba(59, 130, 246, 0.4)',
      borderColor: 'rgba(59, 130, 246, 0.6)',
    },
    overlayButtonRequest: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%)',
      color: 'white',
      border: '2px solid rgba(16, 185, 129, 0.3)',
    },
    overlayButtonRequestHover: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 1) 0%, rgba(5, 150, 105, 1) 100%)',
      boxShadow: '0 12px 25px rgba(16, 185, 129, 0.4)',
      borderColor: 'rgba(16, 185, 129, 0.6)',
    },
    details: {
      padding: '1.5rem',
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.9rem',
    },
    badgeIcon: {
      color: '#38bdf8',
    },
    title: {
      color: '#ffffff',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      lineHeight: '1.4',
    },
    button: {
      width: '100%',
      padding: '1.125rem 1.5rem',
      borderRadius: '16px',
      border: '2px solid transparent',
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.625rem',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.2)',
    },
    buttonHover: {
      transform: 'translateY(-4px) scale(1.02)',
      boxShadow: '0 15px 35px rgba(99, 102, 241, 0.4)',
      borderColor: 'rgba(99, 102, 241, 0.3)',
    },
    buttonShow: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
    },
    buttonShowHover: {
      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    buttonRequest: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)',
    },
    buttonRequestHover: {
      background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      boxShadow: '0 15px 35px rgba(16, 185, 129, 0.4)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
    },
    buttonDisabled: {
      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
      opacity: 0.6,
      cursor: 'not-allowed',
      boxShadow: '0 2px 8px rgba(100, 116, 139, 0.2)',
    },
    comingSoonCard: {
      background: 'rgba(30, 41, 59, 0.8)',
      borderRadius: '24px',
      padding: '2.5rem',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      transform: 'translateY(0)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    comingSoonContent: {
      padding: '2rem',
    },
    placeholderIcon: {
      fontSize: '3rem',
      color: '#818cf8',
      marginBottom: '1.5rem',
      animation: 'pulse 2s infinite',
    },
    comingSoonTitle: {
      color: '#ffffff',
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    comingSoonText: {
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '2rem',
    },
    placeholderDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'rgba(99, 102, 241, 0.6)',
      animation: 'bounce 1.5s infinite',
    },
    dot2: {
      animationDelay: '0.2s',
    },
    dot3: {
      animationDelay: '0.4s',
    },
    decorativeElement: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
      top: '-150px',
      right: '-150px',
      zIndex: '0',
    },
    decorativeElement2: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
      borderRadius: '50%',
      bottom: '-100px',
      left: '-100px',
      zIndex: '0',
    },
    // Modal styles
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(5px)',
    },
    modalContent: {
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      borderRadius: '20px',
      padding: '2.5rem',
      maxWidth: '500px',
      width: '90%',
      position: 'relative',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
      animation: 'modalSlideIn 0.3s ease-out',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
    },
    modalCloseButtonHover: {
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      color: '#ef4444',
    },
    modalTitle: {
      color: '#ffffff',
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    modalMessage: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '1.1rem',
      marginBottom: '2rem',
      textAlign: 'center',
      lineHeight: '1.6',
    },
    modalButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
    },
    modalButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '12px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    modalButtonClose: {
      background: 'rgba(239, 68, 68, 0.2)',
      color: '#ef4444',
      border: '1px solid rgba(239, 68, 68, 0.3)',
    },
    modalButtonCloseHover: {
      background: 'rgba(239, 68, 68, 0.3)',
      transform: 'translateY(-2px)',
    },
    modalButtonEmail: {
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: 'white',
    },
    modalButtonEmailHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(99, 102, 241, 0.4)',
    },
  };

  return (
    <section id="certificate" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>
          Professional Certifications
          <span style={styles.titleUnderline}></span>
        </h2>
        <div style={styles.row}>
          {certificatesData.map((cert, index) => (
            <div style={styles.col} key={index}>
              <div 
                style={{
                  ...styles.certificateCard,
                  ...(hoveredCard === index ? styles.certificateCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.decorativeElement}></div>
                <div style={styles.decorativeElement2}></div>
                
                <div style={styles.imageWrapper}>
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    style={{
                      ...styles.image,
                      ...(hoveredCard === index ? styles.imageHover : {})
                    }} 
                  />
                  <div style={{
                    ...styles.overlay,
                    ...(hoveredCard === index ? styles.overlayVisible : {})
                  }}>
                    <div style={styles.overlayContent}>
                      <FontAwesomeIcon icon={faEye} style={styles.overlayIcon} />
                      <h5 style={styles.overlayTitle}>{cert.title}</h5>
                      <div style={{display: 'flex', gap: '0.75rem', flexDirection: 'column'}}>
                        {cert.directLink ? (
                          <a
                            href={cert.directLink}
                            style={{...styles.overlayButton, ...styles.overlayButtonShow}}
                            onMouseEnter={(e) => {
                              Object.assign(e.target.style, {
                                transform: styles.overlayButtonHover.transform,
                                boxShadow: styles.overlayButtonShowHover.boxShadow,
                                background: styles.overlayButtonShowHover.background,
                                borderColor: styles.overlayButtonShowHover.borderColor
                              });
                            }}
                            onMouseLeave={(e) => {
                              Object.assign(e.target.style, {
                                transform: 'none',
                                boxShadow: styles.overlayButtonShow.boxShadow || '0 4px 15px rgba(0, 0, 0, 0.1)',
                                background: styles.overlayButtonShow.background,
                                borderColor: styles.overlayButtonShow.border
                              });
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faEye} />
                            Show Certificate
                          </a>
                        ) : (
                          <div
                            style={{...styles.overlayButton, ...styles.buttonDisabled}}
                          >
                            <FontAwesomeIcon icon={faEye} />
                            Certificate Not Available
                          </div>
                        )}
                        <div
                          style={{...styles.overlayButton, ...styles.overlayButtonRequest, cursor: 'pointer'}}
                          onMouseEnter={(e) => {
                            Object.assign(e.target.style, {
                              transform: styles.overlayButtonHover.transform,
                              boxShadow: styles.overlayButtonRequestHover.boxShadow,
                              background: styles.overlayButtonRequestHover.background,
                              borderColor: styles.overlayButtonRequestHover.borderColor
                            });
                          }}
                          onMouseLeave={(e) => {
                            Object.assign(e.target.style, {
                              transform: 'none',
                              boxShadow: styles.overlayButtonRequest.boxShadow || '0 4px 15px rgba(0, 0, 0, 0.1)',
                              background: styles.overlayButtonRequest.background,
                              borderColor: styles.overlayButtonRequest.border
                            });
                          }}
                          onClick={() => scrollToContactAndFillMessage(cert.title)}
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                          Request Certificate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={styles.details}>
                  <div style={styles.badge}>
                    <FontAwesomeIcon icon={faCertificate} style={styles.badgeIcon} />
                    <span>{cert.provider}</span>
                  </div>
                  <h5 style={styles.title}>{cert.title}</h5>
                  <div style={{display: 'flex', gap: '0.875rem', flexDirection: 'column'}}>
                    {cert.directLink ? (
                      <a
                        href={cert.directLink}
                        className="certificate-button-show"
                        style={{...styles.button, ...styles.buttonShow}}
                        onMouseEnter={(e) => {
                          Object.assign(e.target.style, {
                            transform: styles.buttonHover.transform,
                            boxShadow: styles.buttonShowHover.boxShadow,
                            background: styles.buttonShowHover.background,
                            borderColor: styles.buttonShowHover.borderColor
                          });
                        }}
                        onMouseLeave={(e) => {
                          Object.assign(e.target.style, {
                            transform: 'none',
                            boxShadow: styles.buttonShow.boxShadow,
                            background: styles.buttonShow.background,
                            borderColor: 'transparent'
                          });
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faEye} />
                        Show Certificate
                      </a>
                    ) : (
                      <button
                        style={{...styles.button, ...styles.buttonDisabled}}
                      >
                        <FontAwesomeIcon icon={faEye} />
                        Certificate Not Available
                      </button>
                    )}
                    <button
                      className="certificate-button-request"
                      style={{...styles.button, ...styles.buttonRequest}}
                      onMouseEnter={(e) => {
                        Object.assign(e.target.style, {
                          transform: styles.buttonHover.transform,
                          boxShadow: styles.buttonRequestHover.boxShadow,
                          background: styles.buttonRequestHover.background,
                          borderColor: styles.buttonRequestHover.borderColor
                        });
                      }}
                      onMouseLeave={(e) => {
                        Object.assign(e.target.style, {
                          transform: 'none',
                          boxShadow: styles.buttonRequest.boxShadow,
                          background: styles.buttonRequest.background,
                          borderColor: 'transparent'
                        });
                      }}
                      onClick={() => scrollToContactAndFillMessage(cert.title)}
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      Request Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div style={styles.col}>
            <div 
              style={styles.comingSoonCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.certificateCardHover.transform;
                e.currentTarget.style.boxShadow = styles.certificateCardHover.boxShadow;
                e.currentTarget.style.borderColor = styles.certificateCardHover.borderColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = styles.certificateCard.transform;
                e.currentTarget.style.boxShadow = styles.certificateCard.boxShadow;
                e.currentTarget.style.borderColor = styles.certificateCard.borderColor;
              }}
            >
              <div style={styles.decorativeElement}></div>
              <div style={styles.decorativeElement2}></div>
              
              <div style={styles.comingSoonContent}>
                <FontAwesomeIcon icon={faHourglassHalf} style={styles.placeholderIcon} />
                <h5 style={styles.comingSoonTitle}>New Certificate Coming Soon</h5>
                <p style={styles.comingSoonText}>Stay tuned for more achievements!</p>
                <div style={styles.placeholderDots}>
                  <span style={styles.dot}></span>
                  <span style={{...styles.dot, ...styles.dot2}}></span>
                  <span style={{...styles.dot, ...styles.dot3}}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showModal && (
        <div style={styles.modal} onClick={() => setShowModal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.modalCloseButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = styles.modalCloseButtonHover.backgroundColor;
                e.target.style.color = styles.modalCloseButtonHover.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ffffff';
              }}
              onClick={() => setShowModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <h3 style={styles.modalTitle}>Certificate Request</h3>
            <p style={styles.modalMessage}>
              To request a copy of this certificate or get more details about the certification, please use the contact form below. I'll be happy to share more information with you!
            </p>
            
            <div style={styles.modalButtons}>
              <button
                style={{...styles.modalButton, ...styles.modalButtonClose}}
                onMouseEnter={(e) => {
                  e.target.style.background = styles.modalButtonCloseHover.background;
                  e.target.style.transform = styles.modalButtonCloseHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = styles.modalButtonClose.background;
                  e.target.style.transform = 'none';
                }}
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
                Close
              </button>
              
              <button
                style={{...styles.modalButton, ...styles.modalButtonEmail}}
                onMouseEnter={(e) => {
                  e.target.style.transform = styles.modalButtonEmailHover.transform;
                  e.target.style.boxShadow = styles.modalButtonEmailHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'none';
                  e.target.style.boxShadow = 'none';
                }}
                onClick={scrollToContactAndFillMessage}
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Send Mail Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add style tag with animations */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes modalSlideIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          @keyframes buttonShine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes buttonPulse {
            0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
            70% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0); }
            100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          }
          
          @keyframes buttonRequestPulse {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
            70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }
          
          /* Button hover effects */
          .certificate-button-show:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .certificate-button-show:hover:before {
            left: 100%;
          }
          
          .certificate-button-request:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .certificate-button-request:hover:before {
            left: 100%;
          }
        `}
      </style>
    </section>
  );
};

export default Certificates;

import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaEnvelope } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import './Achievements.css';

const Achievements = () => {
  // Certificate messages for the request functionality
  const certificateMessages = {
    'Introduction to Java': [
      "Hello! I came across your portfolio and I'm impressed by your Java programming certification. Could you please share the certificate via email? I'd love to see the details of your achievement.",
      "Hi there! I noticed you have a Java certification from Coursera. Would it be possible to receive a copy of this certificate through email? It looks very valuable for Java developers!",
      "Greetings! Your Java programming certification caught my attention. I'm learning Java and would appreciate if you could email me the certificate details. Thank you!"
    ],
    'Inheritance and Data Structures in Java': [
      "Hello! Your advanced Java certification in Data Structures and Inheritance is impressive. Could you please share the certificate via email? I'd love to see the advanced concepts covered.",
      "Hi there! I noticed your specialization in Java Data Structures. Would it be possible to receive a copy of this certificate through email? It's exactly what I'm studying!",
      "Greetings! Your Java Data Structures and Inheritance certification caught my attention. I'm working on similar concepts and would appreciate the certificate details via email."
    ],
    'Introduction to HTML, CSS, & JavaScript': [
      "Hello! Your web development foundation certificate is impressive. Could you please share the HTML, CSS & JavaScript certificate via email? I'd love to see the curriculum details.",
      "Hi there! I noticed your comprehensive web development certification. Would it be possible to receive a copy through email? It covers exactly what I need to learn!",
      "Greetings! Your front-end development certification caught my attention. I'm starting web development and would appreciate the certificate details via email."
    ],
    'Exploratory Data Analysis for Machine Learning': [
      "Hello! Your Machine Learning and Data Analysis certification is impressive. Could you please share the certificate via email? I'd love to see the ML techniques covered.",
      "Hi there! I noticed your specialization in Data Analysis for ML. Would it be possible to receive a copy of this certificate through email? It's highly relevant to my field!",
      "Greetings! Your Machine Learning Data Analysis certification caught my attention. I'm working in ML and would appreciate the certificate details via email."
    ],
    'Developing Front-End Apps with React': [
      "Hello! Your React development certification is impressive. Could you please share the certificate via email? I'd love to see the React concepts covered.",
      "Hi there! I noticed your specialization in React front-end development. Would it be possible to receive a copy through email? It's exactly what I'm learning!",
      "Greetings! Your React development certification caught my attention. I'm working with React and would appreciate the certificate details via email."
    ],
    'Prompt Engineering: The Skill of Asking AI Right': [
      "Hello! I came across your portfolio and I'm impressed by your Prompt Engineering certification. Could you please share the certificate via email? I'd love to see the details of your achievement.",
      "Hi there! I noticed you have a Prompt Engineering certificate from Wayspire. Would it be possible to receive a copy of this certificate through email? It looks very interesting!",
      "Greetings! Your Prompt Engineering certification caught my attention. I'm working in a similar field and would appreciate if you could email me the certificate details. Thank you!"
    ]
  };

  // Function to scroll to contact section and fill message
  const handleRequestCertificate = (certName) => {
    const messages = certificateMessages[certName] || certificateMessages['Prompt Engineering: The Skill of Asking AI Right'];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll to complete, then fill the message
      setTimeout(() => {
        const messageTextarea = document.querySelector('textarea[name="message"]');
        if (messageTextarea) {
          // Clear and focus textarea
          messageTextarea.value = '';
          messageTextarea.focus();
          
          // Start typewriter effect
          let i = 0;
          const typeInterval = setInterval(() => {
            if (i <= randomMessage.length) {
              const currentText = randomMessage.substring(0, i);
              messageTextarea.value = currentText;
              
              // Trigger React events to update state
              const inputEvent = new Event('input', { bubbles: true });
              messageTextarea.dispatchEvent(inputEvent);
              
              // Keep focus
              messageTextarea.focus();
              messageTextarea.setSelectionRange(currentText.length, currentText.length);
              
              i++;
            } else {
              clearInterval(typeInterval);
              // Final update
              const changeEvent = new Event('change', { bubbles: true });
              messageTextarea.dispatchEvent(changeEvent);
            }
          }, 60); // 60ms per character
        }
      }, 1000); // Wait 1 second for scroll
    }
  };

  const certifications = [
    {
      name: 'Introduction to Java',
      provider: 'Coursera',
      year: '2024',
      icon: <SiCoursera />,
      link: 'https://coursera.org/verify/TUX8P7X8ELQD',
      image: '/images/certificates/Introduction to Java.png'
    },
    {
      name: 'Inheritance and Data Structures in Java',
      provider: 'Coursera',
      year: '2024',
      icon: <SiCoursera />,
      link: 'https://coursera.org/verify/H8XTMHMZSYZX',
      image: '/images/certificates/Inheritance and Data Structures in Java.png'
    },
    {
      name: 'Introduction to HTML, CSS, & JavaScript',
      provider: 'Coursera',
      year: '2024',
      icon: <SiCoursera />,
      link: 'https://coursera.org/verify/2MWVBEWX2M8N',
      image: '/images/certificates/Introduction to HTML, CSS, & JavaScript.png'
    },
    {
      name: 'Exploratory Data Analysis for Machine Learning',
      provider: 'Coursera',
      year: '2024',
      icon: <SiCoursera />,
      link: 'https://www.coursera.org/account/accomplishments/verify/NBH6CSAM16MD',
      image: '/images/certificates/Exploratory Data Analysis for Machine Learning.png'
    },
    {
      name: 'Developing Front-End Apps with React',
      provider: 'Coursera',
      year: '2024',
      icon: <SiCoursera />,
      link: 'https://coursera.org/verify/0178B60775HH',
      image: '/images/certificates/Developing Front-End Apps with React.png'
    },
    {
      name: 'Prompt Engineering: The Skill of Asking AI Right',
      provider: 'Wayspire',
      year: '2024',
      icon: <FaCertificate />,
      link: 'https://drive.google.com/file/d/1gjw4euDn_6bJ16aXcIA2te8-NSo7lKld/view?usp=sharing',
      image: '/images/certificates/prompt_engg.png'
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="section-divider"></div>
      
      <div className="achievements-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Certifications
        </motion.h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="cert-image-wrapper">
                <img 
                  src={cert.image} 
                  alt={`${cert.name} Certificate`} 
                  className="cert-image"
                  loading="lazy"
                />
                <div className="cert-overlay">
                  <div className="cert-icon-large">{cert.icon}</div>
                </div>
              </div>
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-provider">{cert.provider}</p>
                <div className="cert-footer">
                  <span className="cert-year">{cert.year}</span>
                  <div className="cert-actions">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Verify
                    </a>
                    <button 
                      className="cert-request-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRequestCertificate(cert.name);
                      }}
                    >
                      <FaEnvelope /> Request
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaEnvelope } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import { CERTIFICATIONS, CERTIFICATE_MESSAGES } from '../data/portfolioData';
import './Achievements.css';

const Achievements = () => {
  // Function to scroll to contact section and fill message
  const handleRequestCertificate = (certName) => {
    const messages = CERTIFICATE_MESSAGES[certName] || CERTIFICATE_MESSAGES['Prompt Engineering: The Skill of Asking AI Right'];
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

  const certifications = CERTIFICATIONS.map((cert) => ({
    ...cert,
    icon: cert.icon === 'certificate' ? <FaCertificate /> : <SiCoursera />
  }));

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
        <p className="section-subtitle">
          Proof of continuous learning across development, data, and product design.
        </p>

        <div className="achievements-stats">
          <div>
            <span>7</span>
            <p>Certifications</p>
          </div>
          <div>
            <span>4</span>
            <p>Skill Domains</p>
          </div>
          <div>
            <span>2026</span>
            <p>Latest Completion</p>
          </div>
        </div>
        
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

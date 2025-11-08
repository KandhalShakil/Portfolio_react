import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  // OTP state management
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const otpInputRefs = useRef([]);

  // Timer effect for OTP
  useEffect(() => {
    if (!showOtpPopup || timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showOtpPopup, timeLeft]);

  // Format time for display (mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Generate a random 6-digit OTP
  const generateOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setTimeLeft(300); // Reset timer
    console.log('Generated OTP:', newOtp);
    return newOtp;
  };

  // Show OTP popup and send OTP via email
  const showOtpModal = (email) => {
    const newOtp = generateOtp();
    setShowOtpPopup(true);
    setOtpVerified(false);
    setOtpError('');
    setOtp(['', '', '', '', '', '']);

    // Auto-focus first input
    setTimeout(() => {
      if (otpInputRefs.current[0]) {
        otpInputRefs.current[0].focus();
      }
    }, 100);

    // Send OTP via EmailJS
    // NOTE: Replace these with your own EmailJS credentials
    emailjs.send(
      'service_emks25r',      // Your EmailJS Service ID
      'template_h8r9vlo',      // Your EmailJS Template ID
      {
        passcode: newOtp,
        email: email,
      },
      'HiT1qgF3NG4BIwyQY'     // Your EmailJS Public Key
    )
    .then((response) => {
      console.log('✅ OTP sent successfully!', response.status, response.text);
    })
    .catch((err) => {
      console.error('❌ Failed to send OTP:', err);
      setOtpError('Failed to send OTP. Please try again.');
    });
  };

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpInputRefs.current[index + 1].focus();
    }

    // Clear error when user types
    if (otpError) {
      setOtpError('');
    }
  };

  // Handle OTP input keydown (for backspace navigation)
  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  // Handle OTP paste
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      otpInputRefs.current[5].focus();
    }
  };

  // Verify OTP
  const verifyOtp = () => {
    const enteredOtp = otp.join('');

    if (timeLeft <= 0) {
      setOtpError('OTP has expired. Please request a new one.');
      return;
    }

    if (enteredOtp === generatedOtp) {
      setOtpVerified(true);
      setOtpError('');

      // Close popup and submit form
      setTimeout(() => {
        setShowOtpPopup(false);
        handleFormSubmit();
      }, 1500);
    } else {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  // Resend OTP
  const resendOtp = () => {
    const newOtp = generateOtp();
    setOtp(['', '', '', '', '', '']);
    setOtpError('');
    if (otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }

    // Resend OTP via EmailJS
    emailjs.send(
      'service_emks25r',
      'template_h8r9vlo',
      {
        passcode: newOtp,
        email: formData.email,
      },
      'HiT1qgF3NG4BIwyQY'
    )
    .then((response) => {
      console.log('✅ OTP resent successfully!', response.status);
    })
    .catch((err) => {
      console.error('❌ Failed to resend OTP:', err);
    });
  };

  // Email validation function
  const validateEmail = async (email) => {
    try {
      console.log('Validating email:', email);
      
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return false;
      }

      // Optional: Backend validation (uncomment if you have a backend)
      /*
      const response = await fetch(
        `https://shakil-kandhal-portfolio.onrender.com/validate-email?email=${encodeURIComponent(email)}`
      );

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const data = await response.json();
      return data.status === 'valid';
      */

      return true;
    } catch (error) {
      console.error('Email validation error:', error);
      return false;
    }
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Modified handleSubmit to show OTP popup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setFormStatus({ submitting: false, submitted: false, error: null });
      setErrors(newErrors);
      return;
    }

    // Email validation
    const isValidEmail = await validateEmail(formData.email);
    if (!isValidEmail) {
      setFormStatus({ submitting: false, submitted: false, error: null });
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setFormStatus({ submitting: false, submitted: false, error: null });
    showOtpModal(formData.email);
  };

  // Submit form after OTP verification
  const handleFormSubmit = async () => {
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '33866287-8f32-480e-8f47-d1d64a519a3c');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  const resetForm = () => {
    setFormStatus({ submitting: false, submitted: false, error: null });
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/kandhal-shakil-5311302b6', color: '#0077B5' },
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/KandhalShakil', color: '#181717' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://x.com/ShakilKandhal', color: '#1DA1F2' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://www.instagram.com/kandhal_shakil_551', color: '#E4405F' }
  ];

  return (
    <section className="contact" id="contact">
      <div className="section-divider"></div>
      
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Let's Build Something Great Together</h2>
          <p className="contact-subtitle">Have a project or idea? I'd love to hear from you.</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div>
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {formStatus.submitted ? (
              <div className="success-card">
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <h2 className="success-title">Thank You!</h2>
                <p className="success-message">
                  Your message has been successfully sent. I appreciate you reaching out and will get back to you as soon as possible.
                </p>

                <div className="info-box">
                  <div className="info-item">
                    <FaEnvelope className="info-icon-small" />
                    <span>You should receive a confirmation email shortly</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faClock} className="info-icon-small" />
                    <span>Typical response time: within 24 hours</span>
                  </div>
                </div>

                <motion.button
                  onClick={resetForm}
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '0.75rem' }} />
                  Send Another Message
                </motion.button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${isFocused.name ? 'focused' : ''} ${errors.name ? 'error' : ''}`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required
                  />
                  <label className={`floating-label ${formData.name || isFocused.name ? 'active' : ''}`}>
                    Your Name
                  </label>
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    className={`form-control ${isFocused.email ? 'focused' : ''} ${errors.email ? 'error' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                  />
                  <label className={`floating-label ${formData.email || isFocused.email ? 'active' : ''}`}>
                    Your Email
                  </label>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <textarea
                    className={`form-control textarea ${isFocused.message ? 'focused' : ''} ${errors.message ? 'error' : ''}`}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    rows="6"
                    required
                  ></textarea>
                  <label className={`floating-label ${formData.message || isFocused.message ? 'active' : ''}`}>
                    Your Message
                  </label>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>
                
                <motion.button 
                  type="submit" 
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '0.75rem' }} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {formStatus.error && (
                  <div className="alert alert-error">
                    {formStatus.error}
                  </div>
                )}
              </form>
            )}
</motion.div>
            <motion.div 
              className="availability-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="availability-header">
                <div className="status-indicator"></div>
                <h3>Current Availability</h3>
              </div>
              <p className="availability-text">
                I'm currently <span className="highlight">available</span> for freelance projects and full-time opportunities. 
                Let's discuss how we can work together!
              </p>
              <div className="availability-badges">
                <span className="badge">Open to Work</span>
                <span className="badge">Freelance Available</span>
                <span className="badge">Remote Ready</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-details">
              <h3 className="info-title gradient-text">Get in Touch</h3>
              <p className="info-subtitle">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <FaEnvelope />
                </div>
                <div className="detail-content">
                  <h3>Email</h3>
                  <p>kandhalshakil@gmail.com</p>
                  <a href="mailto:kandhalshakil@gmail.com" className="detail-link">Send Email →</a>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <FaPhone />
                </div>
                <div className="detail-content">
                  <h3>Phone</h3>
                  <p>+91 9725845511</p>
                  <a href="tel:+919725845511" className="detail-link">Call Now →</a>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="detail-content">
                  <h3>Location</h3>
                  <p>Gujarat, India</p>
                  <span className="detail-status">🟢 Available for Office or Remote Work</span>
                </div>
              </div>
            </div>
            
            <div className="social-card">
              <h3 className="social-title gradient-text">Connect With Me</h3>
              <p className="social-subtitle">Let's connect on social media and stay in touch!</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* OTP Verification Popup */}
      {showOtpPopup && (
        <div className="otp-overlay">
          <motion.div 
            className="otp-popup"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="close-button"
              onClick={() => setShowOtpPopup(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <h2 className="otp-title">Verify Your Identity</h2>
            <p className="otp-message">
              We've sent a 6-digit verification code to your email address. Please enter it below to continue.
            </p>

            {otpVerified ? (
              <div className="success-text">
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '0.5rem' }} />
                Verification successful! Submitting your message...
              </div>
            ) : (
              <>
                <div className={`otp-timer ${timeLeft <= 60 ? 'warning' : ''}`}>
                  {timeLeft > 0 ? `Code expires in: ${formatTime(timeLeft)}` : 'Code expired'}
                </div>

                <div className="otp-container">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      ref={(ref) => (otpInputRefs.current[index] = ref)}
                      className="otp-input"
                      disabled={timeLeft <= 0}
                    />
                  ))}
                </div>

                {otpError && <div className="otp-error">{otpError}</div>}

                <motion.button
                  className="verify-btn"
                  onClick={verifyOtp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={timeLeft <= 0}
                >
                  Verify OTP
                </motion.button>

                <div style={{ textAlign: 'center' }}>
                  <button className="resend-btn" onClick={resendOtp}>
                    Resend OTP
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;

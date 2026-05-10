import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [timeLeft, setTimeLeft] = useState(300);
  const otpInputRefs = useRef([]);

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    otpSending: false,
  });

  useEffect(() => {
    if (!showOtpPopup || timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [showOtpPopup, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const generateOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setTimeLeft(300);
    return newOtp;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtpEmail = async (email, otpCode) => {
    try {
      await emailjs.send(
        "service_emks25r",
        "template_h8r9vlo",
        { passcode: otpCode, email: email, message: `Your OTP verification code is: ${otpCode}.` },
        'HiT1qgF3NG4BIwyQY'
      );
      return true;
    } catch (error) {
      setOtpError("Failed to send OTP.");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus.otpSending) return; // Prevent multi-click spam

    if (!formData.email || !formData.name || !formData.subject || !formData.message) {
      setFormStatus({ ...formStatus, error: "Please fill in all fields" });
      return;
    }

    setFormStatus(prev => ({ ...prev, otpSending: true, error: null }));
    
    const newOtp = generateOtp();
    const sent = await sendOtpEmail(formData.email, newOtp);
    
    if (sent) {
      setShowOtpPopup(true);
      setOtpVerified(false);
      setOtpError("");
      setOtp(["", "", "", "", "", ""]);
      setFormStatus(prev => ({ ...prev, otpSending: false }));
      setTimeout(() => otpInputRefs.current[0]?.focus(), 100);
    } else {
      setFormStatus(prev => ({ ...prev, otpSending: false, error: "Failed to send verification code. Please try again." }));
    }
  };

  const handleResendOtp = async () => {
    if (timeLeft > 0 || formStatus.otpSending) return;
    
    setFormStatus(prev => ({ ...prev, otpSending: true }));
    const newOtp = generateOtp();
    const sent = await sendOtpEmail(formData.email, newOtp);
    
    if (sent) {
      setOtpError("");
      setOtp(["", "", "", "", "", ""]);
      setFormStatus(prev => ({ ...prev, otpSending: false }));
      setTimeout(() => otpInputRefs.current[0]?.focus(), 100);
    } else {
      setFormStatus(prev => ({ ...prev, otpSending: false }));
      setOtpError("Failed to resend code.");
    }
  };

  const verifyOtp = async () => {
    if (otp.join("") === generatedOtp) {
      setOtpVerified(true);
      setTimeout(async () => {
        setShowOtpPopup(false);
        await submitForm();
      }, 1500);
    } else {
      setOtpError("Invalid OTP.");
    }
  };

  const submitForm = async () => {
    setFormStatus({ submitting: true, submitted: false, error: null });
    try {
      const response = await fetch("https://formspree.io/f/xzddgjdl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _subject: `Portfolio Contact: ${formData.subject}` }),
      });
      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: "Failed to send message." });
    }
  };

  return (
    <section className="contact-6d" id="contact">
      <div className="contact-container-6d">
        <motion.div
          className="contact-header-6d"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="label-6d">COMMUNICATION LINK</span>
          <h2 className="title-6d">INITIALIZE <span className="gradient-6d">CONNECTION</span></h2>
        </motion.div>

        <div className="contact-grid-6d">
          {/* Left Side: Info */}
          <motion.div
            className="contact-info-6d"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-terminal glass-6d">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="terminal-title">IDENTITY DATA</span>
              </div>

              <div className="info-items">
                <div className="info-item-6d">
                  <div className="info-icon-6d"><FaEnvelope /></div>
                  <div className="info-text-6d">
                    <span className="info-label">EMAIL</span>
                    <a href="mailto:kandhalshakil@gmail.com" style={{ textDecoration: 'none' }}>kandhalshakil@gmail.com</a>
                  </div>
                </div>

                <div className="info-item-6d">
                  <div className="info-icon-6d"><FaMapMarkerAlt /></div>
                  <div className="info-text-6d">
                    <span className="info-label">GEOLOCATION</span>
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                </div>

                <div className="info-item-6d">
                  <div className="info-icon-6d"><div className="status-pulse"></div></div>
                  <div className="info-text-6d">
                    <span className="info-label">AVAILABILITY</span>
                    <span className="status-text">OPEN FOR FREELANCE WORK</span>
                  </div>
                </div>
              </div>

              <div className="social-grid-6d">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="social-card-6d glass-6d">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/kandhal-shakil-5311302b6" target="_blank" rel="noreferrer" className="social-card-6d glass-6d">
                  <FaLinkedin />
                </a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="social-card-6d glass-6d">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            className="contact-form-6d-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {formStatus.submitted ? (
              <motion.div
                className="success-terminal glass-6d"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="success-icon-wrapper">
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon-6d" />
                </div>
                <h3>Verification Complete</h3>
                <p>Your secure session has been initialized successfully. I will review your transmission and respond shortly.</p>
                <button className="btn-6d primary-6d btn-success-cta" onClick={() => setFormStatus({ ...formStatus, submitted: false })}>
                  Return to Dashboard
                </button>
              </motion.div>
            ) : (
              <form className="contact-form-6d glass-6d" onSubmit={handleSubmit}>
                <div className="form-row-6d">
                  <div className="input-group-6d">
                    <label>NAME</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name..." />
                    <div className="input-focus-glow"></div>
                  </div>
                  <div className="input-group-6d">
                    <label>EMAIL</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter uplink address..." />
                    <div className="input-focus-glow"></div>
                  </div>
                </div>

                <div className="input-group-6d">
                  <label>SUBJECT</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Define inquiry..." />
                  <div className="input-focus-glow"></div>
                </div>

                <div className="input-group-6d">
                  <label>MESSAGE</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Input transmission content..."></textarea>
                  <div className="input-focus-glow"></div>
                </div>

                <button 
                  type="submit" 
                  className={`btn-6d primary magnetic-btn ${formStatus.otpSending ? 'loading' : ''}`} 
                  disabled={formStatus.otpSending}
                >
                  <FaPaperPlane className="btn-icon" />
                  <span>{formStatus.otpSending ? "SENDING OTP..." : "EXECUTE TRANSMISSION"}</span>
                  <div className="btn-glow"></div>
                </button>
                {formStatus.error && <div className="form-error-msg">{formStatus.error}</div>}
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* OTP Popup remains similar but styled 6D */}
      <AnimatePresence>
        {showOtpPopup && (
          <div className="otp-overlay-6d">
            <motion.div className="otp-terminal glass-6d" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
              <h3>SECURITY VERIFICATION</h3>
              <p>ENCRYPTED CODE SENT TO {formData.email}</p>

              <div className="otp-inputs-6d">
                {otp.map((digit, index) => (
                  <input key={index} type="text" maxLength="1" value={digit} onChange={(e) => {
                    const val = e.target.value;
                    if (!/^\d*$/.test(val)) return;
                    const newOtp = [...otp];
                    newOtp[index] = val;
                    setOtp(newOtp);
                    if (val && index < 5) otpInputRefs.current[index + 1].focus();
                  }} onKeyDown={(e) => {
                    if (e.key === "Backspace" && !otp[index] && index > 0) otpInputRefs.current[index - 1].focus();
                  }} ref={el => otpInputRefs.current[index] = el} className="otp-input-6d" />
                ))}
              </div>

              <div className="otp-timer-6d">{formatTime(timeLeft)}</div>
              {otpError && <div className="otp-error-6d">{otpError}</div>}

              <button className="btn-6d primary-6d verify-main" onClick={verifyOtp} disabled={otp.join("").length !== 6 || otpVerified}>
                {otpVerified ? "VERIFIED SUCCESS" : "VERIFY DATA"}
              </button>
              
              <div className="otp-actions-row">
                <button 
                  className="resend-link" 
                  onClick={handleResendOtp} 
                  disabled={timeLeft > 0 || formStatus.otpSending}
                >
                  {formStatus.otpSending ? "SENDING..." : timeLeft > 0 ? `RESEND IN ${timeLeft}s` : "RESEND CODE"}
                </button>
                <button className="abort-link" onClick={() => setShowOtpPopup(false)}>ABORT SESSION</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

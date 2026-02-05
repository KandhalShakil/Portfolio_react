import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
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
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const otpInputRefs = useRef([]);

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  // Timer for OTP expiry
  useEffect(() => {
    if (!showOtpPopup || timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showOtpPopup, timeLeft]);

  // Format time (mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Generate 6-digit OTP
  const generateOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setTimeLeft(300);
    return newOtp;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send OTP via EmailJS
  const sendOtpEmail = async (email, otpCode) => {
    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        "service_emks25r", // Your EmailJS Service ID
        "template_h8r9vlo", // Your EmailJS Template ID
        {
          passcode: otpCode,
          email: email,
          message: `Your OTP verification code is: ${otpCode}. This code will expire in 5 minutes.`,
        },
        'HiT1qgF3NG4BIwyQY' , // Replace with your EmailJS Public Key
      );
      console.log("✅ OTP sent successfully!");
      return true;
    } catch (error) {
      console.error("❌ Failed to send OTP:", error);
      setOtpError("Failed to send OTP. Please try again.");
      return false;
    }
  };

  // Handle form submission - show OTP popup
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.name ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all fields",
      });
      return;
    }

    const newOtp = generateOtp();
    const sent = await sendOtpEmail(formData.email, newOtp);

    if (sent) {
      setShowOtpPopup(true);
      setOtpVerified(false);
      setOtpError("");
      setOtp(["", "", "", "", "", ""]);

      setTimeout(() => {
        if (otpInputRefs.current[0]) {
          otpInputRefs.current[0].focus();
        }
      }, 100);
    }
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpInputRefs.current[index + 1].focus();
    }

    if (otpError) setOtpError("");
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      otpInputRefs.current[5].focus();
    }
  };

  // Verify OTP and submit form
  const verifyOtp = async () => {
    const enteredOtp = otp.join("");

    if (timeLeft <= 0) {
      setOtpError("OTP has expired. Please request a new one.");
      return;
    }

    if (enteredOtp === generatedOtp) {
      setOtpVerified(true);
      setOtpError("");

      setTimeout(async () => {
        setShowOtpPopup(false);
        await submitForm();
      }, 1500);
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

  // Submit form to Formspree
  const submitForm = async () => {
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("https://formspree.io/f/xzddgjdl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setFormStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  // Resend OTP
  const resendOtp = async () => {
    const newOtp = generateOtp();
    await sendOtpEmail(formData.email, newOtp);
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
    if (otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "kandhalshakil@gmail.com",
      link: "mailto:kandhalshakil@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "@KandhalShakil",
      link: "https://github.com/KandhalShakil",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Kandhal Shakil",
      link: "https://www.linkedin.com/in/kandhal-shakil-5311302b6",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="section-divider"></div>

      <div className="contact-container">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's work together on your next project
        </motion.p>

        <div className="contact-intro">
          <div>
            <h3>Let’s build something memorable</h3>
            <p>
              Share your project goals and I’ll help craft the right solution—
              from strategy to launch-ready UI.
            </p>
          </div>
          <div className="contact-chips">
            <span>Fast replies</span>
            <span>Remote-friendly</span>
            <span>Full-stack delivery</span>
          </div>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-panel contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-details">
                    <span className="contact-info-label">{info.label}</span>
                    <span className="contact-info-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <p>Connect on social media</p>
              <div className="social-icons">
                <a
                  href="https://twitter.com/kandhalshakil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/KandhalShakil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kandhal-shakil-5311302b6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-panel contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {formStatus.submitted ? (
              <div className="success-message-card">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="success-icon"
                />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() =>
                    setFormStatus({
                      submitting: false,
                      submitted: false,
                      error: null,
                    })
                  }
                  className="submit-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? "Sending..." : "Send Message"}
                </button>

                {formStatus.error && (
                  <div className="form-message error">{formStatus.error}</div>
                )}
              </form>
            )}
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
              className="close-otp-btn"
              onClick={() => setShowOtpPopup(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <h2 className="otp-title">Verify Your Email</h2>
            <p className="otp-message">
              We've sent a 6-digit code to <strong>{formData.email}</strong>
            </p>

            {otpVerified ? (
              <div className="otp-success">
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>Verification successful! Sending your message...</p>
              </div>
            ) : (
              <>
                <div className={`otp-timer ${timeLeft <= 60 ? "warning" : ""}`}>
                  {timeLeft > 0
                    ? `Code expires in: ${formatTime(timeLeft)}`
                    : "Code expired"}
                </div>

                <div className="otp-inputs">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      inputMode="numeric"
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

                <button
                  className="verify-otp-btn"
                  onClick={verifyOtp}
                  disabled={timeLeft <= 0 || otp.join("").length !== 6}
                >
                  Verify OTP
                </button>

                <button className="resend-otp-btn" onClick={resendOtp}>
                  Resend OTP
                </button>
              </>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;

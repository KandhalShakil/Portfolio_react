import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEnvelope,
  faClock,
  faPaperPlane,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  // New state for OTP popup
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpExpiry, setOtpExpiry] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const otpInputRefs = useRef([]);

  // Timer effect
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
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Generate a random 6-digit OTP
  const generateOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);

    // Set expiry time (15 minutes from now)
    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + 5);
    setOtpExpiry(expiryTime);

    // Reset timer
    setTimeLeft(300);

    return newOtp;
  };

  // Show OTP popup and generate OTP
  const showOtpModal = (email) => {
    const newOtp = generateOtp();
    setShowOtpPopup(true);
    setOtpVerified(false);
    setOtpError("");
    setOtp(["", "", "", "", "", ""]);

    // Auto-focus first input when modal opens
    setTimeout(() => {
      if (otpInputRefs.current[0]) {
        otpInputRefs.current[0].focus();
      }
    }, 100);

    // In a real application, you would send the OTP to the user's email here
    console.log("Generated OTP:", newOtp);
    emailjs.send("service_emks25r", "template_h8r9vlo", {
      passcode: newOtp,
      email: email,
    } , "HiT1qgF3NG4BIwyQY")
    .then((response) => {
    console.log("✅ OTP sent successfully!", response.status, response.text);
  })
  .catch((err) => {
    console.error("❌ Failed to send OTP:", err);
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
      setOtpError("");
    }
  };

  // Handle OTP input keydown (for backspace navigation)
  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  // Handle OTP paste
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);

      // Focus the last input
      otpInputRefs.current[5].focus();
    }
  };

  // Verify OTP
  const verifyOtp = () => {
    const enteredOtp = otp.join("");

    // Check if OTP is expired
    if (timeLeft <= 0) {
      setOtpError("OTP has expired. Please request a new one.");
      return;
    }

    // Check if OTP matches
    if (enteredOtp === generatedOtp) {
      setOtpVerified(true);
      setOtpError("");

      // Close popup after a short delay and submit the form
      setTimeout(() => {
        setShowOtpPopup(false);
        handleFormSubmit();
      }, 1500);
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

  // Resend OTP
  const resendOtp = () => {
    generateOtp();
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
    if (otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }

    // In a real application, you would resend the OTP to the user's email here
    console.log("Resent OTP:", generatedOtp);
  };

  const validateEmail = async (email) => {
    try {
      console.log("Validating email:", email);

      const response = await fetch(
        `https://shakil-kandhal-portfolio.onrender.com/validate-email?email=${encodeURIComponent(
          email
        )}`
      );

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Validation result:", data);

      return data.status === "valid";
    } catch (error) {
      console.error("Email validation error:", error);
      return false;
    }
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Modified handleSubmit to show OTP popup instead of submitting directly
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    // Basic validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setFormStatus({ submitting: false, submitted: false, error: null });
      setErrors(newErrors);
      return;
    }

    // Email validation
    const isValidEmail = await validateEmail(formData.email);
    if (!isValidEmail) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    showOtpModal(formData.email);
  };

  // This function would be called after OTP verification
  const handleFormSubmit = async () => {
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "33866287-8f32-480e-8f47-d1d64a519a3c"
      );
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: null,
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: error.message,
      });
    }
  };

  const resetForm = () => {
    setFormStatus({ submitting: false, submitted: false, error: null });
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  // Enhanced inline styles with improved design
  const styles = {
    section: {
      position: "relative",
      padding: "5rem 0",
      overflow: "hidden",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.5rem",
      width: "100%",
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
    row: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    col: {
      flex: "0 0 100%",
      maxWidth: "650px",
    },
    contactCard: {
      background: "rgba(30, 41, 59, 0.8)",
      borderRadius: "24px",
      padding: "3rem",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(99, 102, 241, 0.3)",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
      position: "relative",
      overflow: "hidden",
      transform: "translateY(0)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    contactCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 35px 60px rgba(0, 0, 0, 0.3)",
    },
    formGroup: {
      marginBottom: "2rem",
      position: "relative",
    },
    formControl: {
      width: "100%",
      padding: "1.6rem 1.5rem 0.8rem",
      borderRadius: "16px",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      background: "rgba(15, 23, 42, 0.7)",
      color: "#ffffff",
      fontSize: "1.05rem",
      transition: "all 0.3s ease",
      backdropFilter: "blur(5px)",
      fontWeight: "400",
    },
    formControlFocus: {
      borderColor: "#6366f1",
      boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.15)",
      background: "rgba(15, 23, 42, 0.9)",
    },
    formControlError: {
      borderColor: "#ef4444",
      boxShadow: "0 0 0 4px rgba(239, 68, 68, 0.15)",
    },
    textarea: {
      minHeight: "150px",
      resize: "vertical",
    },
    submitButton: {
      width: "100%",
      padding: "1.25rem 2rem",
      borderRadius: "16px",
      border: "none",
      background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
      color: "white",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      letterSpacing: "0.025em",
    },
    submitButtonHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 30px rgba(99, 102, 241, 0.5)",
    },
    submitButtonActive: {
      transform: "translateY(0)",
    },
    submitButtonDisabled: {
      opacity: "0.8",
      cursor: "not-allowed",
      transform: "translateY(0)",
    },
    buttonContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    spinner: {
      width: "1.5rem",
      height: "1.5rem",
      border: "3px solid rgba(255, 255, 255, 0.3)",
      borderTop: "3px solid #ffffff",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginRight: "0.75rem",
    },
    alert: {
      padding: "1.25rem 1.5rem",
      borderRadius: "16px",
      marginTop: "2rem",
      border: "1px solid transparent",
      display: "flex",
      alignItems: "center",
    },
    alertSuccess: {
      background: "rgba(16, 185, 129, 0.15)",
      borderColor: "rgba(16, 185, 129, 0.3)",
      color: "#10b981",
    },
    alertError: {
      background: "rgba(239, 68, 68, 0.15)",
      borderColor: "rgba(239, 68, 68, 0.3)",
      color: "#ef4444",
    },
    errorText: {
      color: "#ef4444",
      fontSize: "0.9rem",
      marginTop: "0.5rem",
      display: "block",
      fontWeight: "500",
    },
    floatingLabel: {
      position: "absolute",
      top: "1.2rem",
      left: "1.5rem",
      color: "rgba(255, 255, 255, 0.6)",
      transition: "all 0.3s ease",
      pointerEvents: "none",
      fontSize: "1.05rem",
      fontWeight: "400",
    },
    floatingLabelFocus: {
      top: "0.5rem",
      left: "1rem",
      fontSize: "0.8rem",
      background: "rgba(15, 23, 42, 0.95)",
      padding: "0 0.6rem",
      color: "#818cf8",
      fontWeight: "600",
    },
    floatingLabelFilled: {
      top: "0.5rem",
      left: "1rem",
      fontSize: "0.8rem",
      background: "rgba(15, 23, 42, 0.95)",
      padding: "0 0.6rem",
      fontWeight: "500",
    },
    successCard: {
      textAlign: "center",
      padding: "2.5rem 2rem",
    },
    checkIcon: {
      fontSize: "5rem",
      color: "#10b981",
      marginBottom: "2rem",
      filter: "drop-shadow(0 5px 15px rgba(16, 185, 129, 0.4))",
    },
    successTitle: {
      fontSize: "2.25rem",
      fontWeight: "800",
      marginBottom: "1.25rem",
      background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      letterSpacing: "-0.025em",
    },
    successMessage: {
      fontSize: "1.15rem",
      color: "rgba(255, 255, 255, 0.85)",
      marginBottom: "2.5rem",
      lineHeight: "1.7",
      fontWeight: "400",
    },
    infoBox: {
      background: "rgba(16, 185, 129, 0.15)",
      borderRadius: "16px",
      padding: "1.75rem",
      marginBottom: "2.5rem",
      border: "1px solid rgba(16, 185, 129, 0.3)",
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      marginBottom: "1.25rem",
      color: "rgba(255, 255, 255, 0.9)",
      fontSize: "1.05rem",
    },
    infoIcon: {
      color: "#10b981",
      fontSize: "1.35rem",
    },
    decorativeElement: {
      position: "absolute",
      width: "300px",
      height: "300px",
      background:
        "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
      borderRadius: "50%",
      top: "-150px",
      right: "-150px",
      zIndex: "0",
    },
    decorativeElement2: {
      position: "absolute",
      width: "200px",
      height: "200px",
      background:
        "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
      borderRadius: "50%",
      bottom: "-100px",
      left: "-100px",
      zIndex: "0",
    },
  };

  // OTP Popup Styles
  const otpPopupStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      backdropFilter: "blur(5px)",
    },
    popup: {
      background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      borderRadius: "24px",
      padding: "2.5rem",
      width: "90%",
      maxWidth: "450px",
      border: "1px solid rgba(99, 102, 241, 0.3)",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
      position: "relative",
      overflow: "hidden",
    },
    closeButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      background: "none",
      border: "none",
      color: "rgba(255, 255, 255, 0.7)",
      fontSize: "1.5rem",
      cursor: "pointer",
      padding: "0.5rem",
      borderRadius: "50%",
      width: "2.5rem",
      height: "2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
    },
    closeButtonHover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#fff",
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "1.5rem",
      background: "linear-gradient(135deg, #818cf8 0%, #38bdf8 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    message: {
      textAlign: "center",
      color: "rgba(255, 255, 255, 0.8)",
      marginBottom: "2rem",
      lineHeight: "1.6",
    },
    otpContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "1.5rem",
      gap: "0.5rem",
    },
    otpInput: {
      width: "3rem",
      height: "3.5rem",
      borderRadius: "12px",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      background: "rgba(15, 23, 42, 0.7)",
      color: "#ffffff",
      fontSize: "1.5rem",
      textAlign: "center",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    otpInputFocus: {
      borderColor: "#6366f1",
      boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.3)",
      background: "rgba(15, 23, 42, 0.9)",
    },
    verifyButton: {
      width: "100%",
      padding: "1rem",
      borderRadius: "16px",
      border: "none",
      background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
      color: "white",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginBottom: "1rem",
    },
    verifyButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(99, 102, 241, 0.4)",
    },
    verifyButtonActive: {
      transform: "translateY(0)",
    },
    resendButton: {
      background: "none",
      border: "none",
      color: "#818cf8",
      cursor: "pointer",
      fontSize: "0.9rem",
      textDecoration: "underline",
      transition: "all 0.3s ease",
    },
    resendButtonHover: {
      color: "#6366f1",
    },
    errorText: {
      color: "#ef4444",
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: "0.9rem",
    },
    successText: {
      color: "#10b981",
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: "1rem",
      fontWeight: "600",
    },
    timer: {
      textAlign: "center",
      color: timeLeft > 60 ? "rgba(255, 255, 255, 0.6)" : "#ef4444",
      fontSize: "0.9rem",
      marginBottom: "1rem",
      fontWeight: "500",
    },
    timerWarning: {
      color: "#ef4444",
      animation: "pulse 1s infinite",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>
          Let's Connect
          <span style={styles.titleUnderline}></span>
        </h2>
        <div style={styles.row}>
          <div style={styles.col}>
            <div
              style={styles.contactCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  styles.contactCardHover.transform;
                e.currentTarget.style.boxShadow =
                  styles.contactCardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = styles.contactCard.transform;
                e.currentTarget.style.boxShadow = styles.contactCard.boxShadow;
              }}
            >
              <div style={styles.decorativeElement}></div>
              <div style={styles.decorativeElement2}></div>

              {formStatus.submitted ? (
                <div style={styles.successCard}>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={styles.checkIcon}
                  />
                  <h2 style={styles.successTitle}>Thank You!</h2>
                  <p style={styles.successMessage}>
                    Your message has been successfully sent. I appreciate you
                    reaching out and will get back to you as soon as possible.
                  </p>

                  <div style={styles.infoBox}>
                    <div style={styles.infoItem}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={styles.infoIcon}
                      />
                      <span>
                        You should receive a confirmation email shortly
                      </span>
                    </div>
                    <div style={styles.infoItem}>
                      <FontAwesomeIcon icon={faClock} style={styles.infoIcon} />
                      <span>Typical response time: within 24 hours</span>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    style={styles.submitButton}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        styles.submitButtonHover.transform;
                      e.target.style.boxShadow =
                        styles.submitButtonHover.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = styles.submitButton.transform;
                      e.target.style.boxShadow = styles.submitButton.boxShadow;
                    }}
                    onMouseDown={(e) => {
                      e.target.style.transform =
                        styles.submitButtonActive.transform;
                    }}
                    onMouseUp={(e) => {
                      e.target.style.transform =
                        styles.submitButtonHover.transform;
                    }}
                  >
                    <div style={styles.buttonContent}>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ marginRight: "0.75rem" }}
                      />
                      Send Another Message
                    </div>
                  </button>
                </div>
              ) : (
                <form id="contactForm" onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="33866287-8f32-480e-8f47-d1d64a519a3c"
                  />

                  <div style={styles.formGroup}>
                    <input
                      type="text"
                      style={{
                        ...styles.formControl,
                        ...(isFocused.name ? styles.formControlFocus : {}),
                        ...(errors.name ? styles.formControlError : {}),
                      }}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={() => handleBlur("name")}
                      required
                    />
                    <label
                      style={{
                        ...styles.floatingLabel,
                        ...(formData.name || isFocused.name
                          ? {
                              ...styles.floatingLabelFilled,
                              ...(isFocused.name
                                ? styles.floatingLabelFocus
                                : {}),
                            }
                          : {}),
                      }}
                    >
                      Your Name
                    </label>
                    {errors.name && (
                      <span style={styles.errorText}>{errors.name}</span>
                    )}
                  </div>

                  <div style={styles.formGroup}>
                    <input
                      type="email"
                      style={{
                        ...styles.formControl,
                        ...(isFocused.email ? styles.formControlFocus : {}),
                        ...(errors.email ? styles.formControlError : {}),
                      }}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      required
                    />
                    <label
                      style={{
                        ...styles.floatingLabel,
                        ...(formData.email || isFocused.email
                          ? {
                              ...styles.floatingLabelFilled,
                              ...(isFocused.email
                                ? styles.floatingLabelFocus
                                : {}),
                            }
                          : {}),
                      }}
                    >
                      Your Email
                    </label>
                    {errors.email && (
                      <span style={styles.errorText}>{errors.email}</span>
                    )}
                  </div>

                  <div style={styles.formGroup}>
                    <textarea
                      style={{
                        ...styles.formControl,
                        ...styles.textarea,
                        ...(isFocused.message ? styles.formControlFocus : {}),
                        ...(errors.message ? styles.formControlError : {}),
                      }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={() => handleBlur("message")}
                      required
                    ></textarea>
                    <label
                      style={{
                        ...styles.floatingLabel,
                        ...(formData.message || isFocused.message
                          ? {
                              ...styles.floatingLabelFilled,
                              ...(isFocused.message
                                ? styles.floatingLabelFocus
                                : {}),
                            }
                          : {}),
                      }}
                    >
                      Your Message
                    </label>
                    {errors.message && (
                      <span style={styles.errorText}>{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    style={{
                      ...styles.submitButton,
                      ...(formStatus.submitting
                        ? styles.submitButtonDisabled
                        : {}),
                    }}
                    onMouseEnter={(e) => {
                      if (!formStatus.submitting) {
                        e.target.style.transform =
                          styles.submitButtonHover.transform;
                        e.target.style.boxShadow =
                          styles.submitButtonHover.boxShadow;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = styles.submitButton.transform;
                      e.target.style.boxShadow = styles.submitButton.boxShadow;
                    }}
                    onMouseDown={(e) => {
                      if (!formStatus.submitting) {
                        e.target.style.transform =
                          styles.submitButtonActive.transform;
                      }
                    }}
                    onMouseUp={(e) => {
                      if (!formStatus.submitting) {
                        e.target.style.transform =
                          styles.submitButtonHover.transform;
                      }
                    }}
                    disabled={formStatus.submitting}
                  >
                    <div style={styles.buttonContent}>
                      {formStatus.submitting ? (
                        <>
                          <span style={styles.spinner}></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{ marginRight: "0.75rem" }}
                          />
                          Send Message
                        </>
                      )}
                    </div>
                  </button>

                  {formStatus.error && (
                    <div style={{ ...styles.alert, ...styles.alertError }}>
                      {formStatus.error}
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* OTP Popup */}
      {showOtpPopup && (
        <div style={otpPopupStyles.overlay}>
          <div style={otpPopupStyles.popup}>
            <button
              style={otpPopupStyles.closeButton}
              onClick={() => setShowOtpPopup(false)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor =
                  otpPopupStyles.closeButtonHover.backgroundColor;
                e.target.style.color = otpPopupStyles.closeButtonHover.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "";
                e.target.style.color = otpPopupStyles.closeButton.color;
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <h2 style={otpPopupStyles.title}>Verify Your Identity</h2>

            <p style={otpPopupStyles.message}>
              We've sent a 6-digit verification code to your email address.
              Please enter it below to continue.
            </p>

            {otpVerified ? (
              <div style={otpPopupStyles.successText}>
                Verification successful! Submitting your message...
              </div>
            ) : (
              <>
                <div
                  style={{
                    ...otpPopupStyles.timer,
                    ...(timeLeft <= 60 ? otpPopupStyles.timerWarning : {}),
                  }}
                >
                  {timeLeft > 0
                    ? `Code expires in: ${formatTime(timeLeft)}`
                    : "Code expired"}
                </div>

                <div style={otpPopupStyles.otpContainer}>
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
                      style={{
                        ...otpPopupStyles.otpInput,
                        ...(digit ? otpPopupStyles.otpInputFocus : {}),
                      }}
                      disabled={timeLeft <= 0}
                    />
                  ))}
                </div>

                {otpError && (
                  <div style={otpPopupStyles.errorText}>{otpError}</div>
                )}

                <button
                  style={otpPopupStyles.verifyButton}
                  onClick={verifyOtp}
                  onMouseEnter={(e) => {
                    e.target.style.transform =
                      otpPopupStyles.verifyButtonHover.transform;
                    e.target.style.boxShadow =
                      otpPopupStyles.verifyButtonHover.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "";
                    e.target.style.boxShadow = "";
                  }}
                  onMouseDown={(e) => {
                    e.target.style.transform =
                      otpPopupStyles.verifyButtonActive.transform;
                  }}
                  onMouseUp={(e) => {
                    e.target.style.transform =
                      otpPopupStyles.verifyButtonHover.transform;
                  }}
                  disabled={timeLeft <= 0}
                >
                  Verify OTP
                </button>

                <div style={{ textAlign: "center" }}>
                  <button
                    style={otpPopupStyles.resendButton}
                    onClick={resendOtp}
                    onMouseEnter={(e) => {
                      e.target.style.color =
                        otpPopupStyles.resendButtonHover.color;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = otpPopupStyles.resendButton.color;
                    }}
                  >
                    Resend OTP
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Add style tag with animations */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          
          @keyframes scale {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #7c3aed 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;

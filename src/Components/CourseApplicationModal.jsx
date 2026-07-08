import React, { useState, useEffect } from "react";
import styles from "../Styles/CourseApplicationModal.module.css";
import successCircleIcon from "../assets/icons/success-circle (1).svg";
import successTickIcon from "../assets/icons/success-tick.svg";

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  city: "",
  state: "",
  pincode: ""
};

const initialTouched = {
  name: false,
  email: false,
  mobile: false,
  city: false,
  state: false,
  pincode: false,
  consent: false
};

export default function CourseApplicationModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState(initialTouched);
  const [warnings, setWarnings] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setForm(initialForm);
      setTouched(initialTouched);
      setWarnings({});
      setIsSubmitted(false);
      setIsFadingOut(false);
      setIsAgreed(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsFadingOut(false);
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setForm(initialForm);
        setTouched(initialTouched);
        setWarnings({});
        setIsAgreed(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isFadingOut) return null;

  const handleClose = () => {
    setIsFadingOut(true);
    setTimeout(onClose, 300);
  };

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    
    if (type === "tel" || name === "mobile") {
      value = value.replace(/[^0-9]/g, '');
      if (value.length > 10) {
        setWarnings(prev => ({ ...prev, mobile: true }));
        value = value.slice(0, 10);
      } else {
        setWarnings(prev => ({ ...prev, mobile: false }));
      }
    }
    
    if (name === "pincode") {
      value = value.replace(/[^0-9]/g, '');
      if (value.length > 6) {
        setWarnings(prev => ({ ...prev, pincode: true }));
        value = value.slice(0, 6);
      } else {
        setWarnings(prev => ({ ...prev, pincode: false }));
      }
    }
    
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleConsentChange = (e) => {
    setIsAgreed(e.target.checked);
    setTouched((prev) => ({ ...prev, consent: true }));
  };

  const isMobileValid = form.mobile.length === 10;
  const isPincodeValid = form.pincode.length === 6;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  
  const isValid = 
    form.name.trim() !== "" &&
    isEmailValid &&
    form.city.trim() !== "" &&
    form.state.trim() !== "" &&
    isMobileValid &&
    isPincodeValid &&
    isAgreed;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sahana19362004@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New BPT Course Application Submission of Mother Terasa College of Physiotherapy",
          Name: form.name,
          Email: form.email,
          Mobile: form.mobile,
          City: form.city,
          State: form.state,
          Pincode: form.pincode
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
        setIsAgreed(false);
        setForm(initialForm);
        setTouched(initialTouched);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className={`${styles.overlay} ${isFadingOut ? styles.fadeOut : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      {!isSubmitted ? (
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={handleClose}>
            ✕
          </button>

          <div className={styles.content}>
            <h2>Bachelor of Physiotherapy</h2>
            <p className={styles.subtitle}>Duration - 3 Years</p>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.grid}>
                <div className={styles.inputGroup}>
                  <input type="text" name="name" placeholder={touched.name && form.name.trim() === "" ? "Please fill this" : "Full Name"} value={form.name} onChange={handleChange} onBlur={handleBlur} required className={touched.name && form.name.trim() === "" ? styles.error : ""} />
                </div>
                
                <div className={styles.inputGroup}>
                  <input type="email" name="email" placeholder={touched.email && form.email.trim() === "" ? "Please fill this" : "Mail Id"} value={form.email} onChange={handleChange} onBlur={handleBlur} required className={touched.email && (!form.email.trim() || !isEmailValid) ? styles.error : ""} />
                  {touched.email && form.email.trim() !== "" && !isEmailValid && <p className={styles.errorText}>Please enter a valid email address</p>}
                </div>
                
                <div className={styles.inputGroup}>
                  <input type="tel" name="mobile" placeholder={touched.mobile && form.mobile.trim() === "" ? "Please fill this" : "Mobile Number"} value={form.mobile} onChange={handleChange} onBlur={handleBlur} required className={touched.mobile && (!form.mobile.trim() || !isMobileValid) ? styles.error : ""} />
                  {warnings.mobile && <p className={styles.errorText}>Maximum 10 digits allowed</p>}
                  {!warnings.mobile && touched.mobile && form.mobile.trim() !== "" && !isMobileValid && <p className={styles.errorText}>Mobile number must be exactly 10 digits</p>}
                </div>
                
                <div className={styles.inputGroup}>
                  <input type="text" name="city" placeholder={touched.city && form.city.trim() === "" ? "Please fill this" : "City"} value={form.city} onChange={handleChange} onBlur={handleBlur} required className={touched.city && form.city.trim() === "" ? styles.error : ""} />
                </div>
                
                <div className={styles.inputGroup}>
                  <input type="text" name="state" placeholder={touched.state && form.state.trim() === "" ? "Please fill this" : "State"} value={form.state} onChange={handleChange} onBlur={handleBlur} required className={touched.state && form.state.trim() === "" ? styles.error : ""} />
                </div>
                
                <div className={styles.inputGroup}>
                  <input type="text" name="pincode" placeholder={touched.pincode && form.pincode.trim() === "" ? "Please fill this" : "Pincode"} value={form.pincode} onChange={handleChange} onBlur={handleBlur} required className={touched.pincode && (!form.pincode.trim() || !isPincodeValid) ? styles.error : ""} />
                  {warnings.pincode && <p className={styles.errorText}>Maximum 6 digits allowed</p>}
                  {!warnings.pincode && touched.pincode && form.pincode.trim() !== "" && !isPincodeValid && <p className={styles.errorText}>Pincode must be exactly 6 digits</p>}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="consent" required checked={isAgreed} onChange={handleConsentChange} onBlur={() => setTouched(prev => ({ ...prev, consent: true }))} />
                  <span>By submitting this form, you agree to receive admission-related emails and calls from our team.</span>
                </label>
                {touched.consent && !isAgreed && <p className={styles.errorText}>Please agree to the terms to proceed</p>}
              </div>

              <button type="submit" className={styles.submitBtn} disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Please wait..." : "Apply Now"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className={styles.successModal}>
          <div className={styles.successContent}>
            <div className={styles.successIcon}>
              <div style={{ position: 'relative', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={successCircleIcon} alt="" style={{ position: 'absolute', width: '32px', height: '32px', inset: 0 }} />
                <img src={successTickIcon} alt="Success" style={{ position: 'absolute', zIndex: 1 }} />
              </div>
            </div>
            <h2>Application Submitted</h2>
            <p>We have received your BPT Course Application, our admissions team will Reach you shortly.</p>
            <button className={styles.submitBtn} onClick={handleClose}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
}

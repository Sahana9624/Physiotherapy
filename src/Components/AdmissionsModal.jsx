import React, { useState, useEffect } from "react";
import styles from "../Styles/AdmissionsModal.module.css";
import modalImg from "../assets/images/admission-modal.jpg";
import successCircleIcon from "../assets/icons/success-circle (1).svg";
import successTickIcon from "../assets/icons/success-tick.svg";

const initialForm = {
  name: "",
  email: "",
  mobile: ""
};

const initialTouched = {
  name: false,
  email: false,
  mobile: false,
  consent: false
};

export default function AdmissionsModal({ isOpen, onClose }) {
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
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const isValid =
    form.name.trim() !== "" &&
    isEmailValid &&
    isMobileValid &&
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
          _subject: "New Admissions Enquiry Submission of Mother Terasa College of Physiotherapy",
          Name: form.name,
          Mobile: form.mobile,
          Email: form.email
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
        if (e.target === e.currentTarget && !isSubmitted) {
          handleClose();
        } else if (e.target === e.currentTarget && isSubmitted) {
          // If submitted, usually clicking outside also closes it, we can allow it
          handleClose();
        }
      }}
    >
      <div className={`${styles.modal} ${isSubmitted ? styles.modalSmall : ''}`}>
        {!isSubmitted && (
          <button className={styles.closeBtn} onClick={handleClose}>
            ✕
          </button>
        )}

        {!isSubmitted ? (
          <div className={styles.content}>
            <div className={styles.leftPanel}>
              <h2>Admissions Open for <span>2026-2027</span></h2>
              <p>Limited seats available—apply now to secure your place in our prestigious law programs.</p>

              <div className={styles.imageWrapper}>
                <img src={modalImg} alt="Student" />
                <div className={styles.badgeContainer}>
                  <div className={styles.badgeTab}>Programs Offered</div>
                  <div className={styles.badgeBody}>Bachelor Of Physiotherapy - BPT</div>
                </div>
              </div>
            </div>

            <div className={styles.rightPanel}>
              <div className={styles.formCard}>
                <h3>Admission Enquiry Form</h3>
                <p>Please share the following Details</p>

                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.inputGroup}>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder={touched.name && form.name.trim() === "" ? "Please fill this" : "Enter your Name"} 
                      value={form.name} 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      required 
                      className={touched.name && form.name.trim() === "" ? styles.error : ""}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <input 
                      type="tel" 
                      name="mobile" 
                      placeholder={
                        touched.mobile && form.mobile.trim() === "" 
                          ? "Please fill this" 
                          : (touched.mobile && !isMobileValid ? "Nos should be in 10 digits" : "Enter your Mobile Number")
                      } 
                      value={form.mobile}
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      required 
                      className={touched.mobile && (!form.mobile.trim() || !isMobileValid) ? styles.error : ""}
                    />
                    {warnings.mobile && <p className={styles.errorText}>Maximum 10 digits allowed</p>}
                    {!warnings.mobile && touched.mobile && form.mobile.trim() !== "" && !isMobileValid && <p className={styles.errorText}>Mobile number must be exactly 10 digits</p>}
                  </div>

                  <div className={styles.inputGroup}>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder={touched.email && form.email.trim() === "" ? "Please fill this" : "Enter your mail Id"} 
                      value={form.email} 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      required 
                      className={touched.email && (!form.email.trim() || !isEmailValid) ? styles.error : ""}
                    />
                    {touched.email && form.email.trim() !== "" && !isEmailValid && <p className={styles.errorText}>Please enter a valid email address</p>}
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
          </div>
        ) : (
          <div className={styles.successContent}>
            <div className={styles.successIcon}>
              <div style={{ position: 'relative', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={successCircleIcon} alt="" style={{ position: 'absolute', width: '32px', height: '32px', inset: 0 }} />
                <img src={successTickIcon} alt="Success" style={{ position: 'absolute', zIndex: 1 }} />
              </div>
            </div>
            <h2>Enquiry Form Submitted</h2>
            <p>We have received your Admission Enquiry form and our admissions team will Reach you shortly.</p>
            <button className={styles.submitBtn} onClick={handleClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "../Styles/Contact.module.css";

import heroImg from "../assets/images/contact-hero.jpg";

import locationIcon from "../assets/icons/location-blue.svg";
import mailIcon from "../assets/icons/mail-blue.svg";
import phoneIcon from "../assets/icons/phone-blue.svg";
import successCircleIcon from "../assets/icons/success-circle (1).svg";
import successTickIcon from "../assets/icons/success-tick.svg";

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  message: "",
  consent: false,
};

const initialTouched = {
  name: false,
  mobile: false,
  email: false,
  message: false,
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState(initialTouched);
  const [warnings, setWarnings] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    
    if (type === "tel" || name === "mobile") {
      value = value.replace(/[^0-9]/g, '');
      if (value.length > 10) {
        setWarnings(prev => ({ ...prev, mobile: true }));
        value = value.slice(0, 10);
      } else {
        setWarnings(prev => ({ ...prev, mobile: false }));
      }
    }
    
    // clear error state
    e.target.classList.remove(styles.error);
    if (e.target.dataset.origPlaceholder) {
      e.target.placeholder = e.target.dataset.origPlaceholder;
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isMobileValid = form.mobile.length === 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  
  const isValid = 
    form.name.trim() !== "" &&
    isMobileValid &&
    isEmailValid &&
    form.message.trim() !== "" &&
    form.consent;

  const handleInvalid = (e) => {
    e.preventDefault();
    e.target.classList.add(styles.error);
    if (e.target.type !== "checkbox") {
      if (!e.target.dataset.origPlaceholder) {
        e.target.dataset.origPlaceholder = e.target.placeholder;
      }
      e.target.placeholder = "Please fill this";
    }
  };

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
            _subject: "New Contact Form Submission of Mother Terasa College of Physiotherapy",
            Name: form.name,
            Mobile: form.mobile,
            Email: form.email,
            Message: form.message
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
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
    <main className={styles.contact}>
      {/* HERO */}
      <section className={styles.hero}>
        <img src={heroImg} alt="Mother Terasa College of Physiotherapy campus" className={styles["hero__bg"]} />
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className={styles["contact-section"]}>
        <div className={styles["contact-card"]}>
          <div className={styles["contact-card__info"]}>
            <h1>Contact Us</h1>
            <p className={styles.intro}>
              Please feel free to contact us with any questions or
              enquiries you may have.
            </p>

            <h2>Contact Details</h2>

            <div className={styles["detail-item"]}>
              <span className={styles["detail-item__icon"]} aria-hidden="true">
                <img src={phoneIcon} alt="Phone" />
              </span>
              <div>
                <h3>Contact Number</h3>
                <p>
                  <a href="tel:+918668169844">+91 - 86681 69844</a>
                  <br />
                  <a href="tel:+919443372151">+91 - 94433 72151</a>
                </p>
              </div>
            </div>

            <div className={styles["detail-item"]}>
              <span className={styles["detail-item__icon"]} aria-hidden="true">
                <img src={locationIcon} alt="Location" />
              </span>
              <div>
                <h3>Our Address</h3>
                <p>
                  Mother Terasa College of Physiotherapy, Mettusalai,
                  Illuppur, Pudukkottai(Dt), Tamilnadu-622102.
                </p>
              </div>
            </div>

            <div className={styles["detail-item"]}>
              <span className={styles["detail-item__icon"]} aria-hidden="true">
                <img src={mailIcon} alt="Mail" />
              </span>
              <div>
                <h3>Mail Us</h3>
                <p>
                  <a href="mailto:mtcppdk@gmail.com">mtcppdk@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles["contact-card__form"]}>
            <h2>Contact Form</h2>
            <p className={styles["form-subtitle"]}>Please share the following Details</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder={touched.name && form.name.trim() === "" ? "Please fill this" : "Enter your Name"}
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`${styles.input} ${touched.name && form.name.trim() === "" ? styles.error : ""}`}
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
                  className={`${styles.input} ${touched.mobile && (!form.mobile.trim() || !isMobileValid) ? styles.error : ""}`}
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
                  className={`${styles.input} ${touched.email && (!form.email.trim() || !isEmailValid) ? styles.error : ""}`}
                />
                {touched.email && form.email.trim() !== "" && !isEmailValid && <p className={styles.errorText}>Please enter a valid email address</p>}
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder={touched.message && form.message.trim() === "" ? "Please fill this" : "Any Questions or Preferences"}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={4}
                  className={`${styles.textarea} ${touched.message && form.message.trim() === "" ? styles.error : ""}`}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.consent}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={(e) => {
                      handleChange(e);
                      setTouched((prev) => ({ ...prev, consent: true }));
                    }}
                    onBlur={() => setTouched((prev) => ({ ...prev, consent: true }))}
                    required
                  />
                  <span>
                    By submitting this form, you agree to receive
                    admission-related emails and calls from our team.
                  </span>
                </label>
                {touched.consent && !form.consent && <p className={styles.errorText}>Please agree to the terms to proceed</p>}
              </div>

              <button type="submit" className={styles["submit-btn"]} disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Please wait..." : "Submit Form"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles["map-section"]}>
        <div className={styles["map-card"]}>
          <div className={styles["map-card__header"]}>
            <h2>Mother Terasa College of Physiotherapy</h2>
            <p>Mettusalai, Illuppur, Pudukkottai(Dt), Tamilnadu-622102.</p>
          </div>
          <iframe
            title="Mother Terasa College of Physiotherapy location"
            className={styles["map-card__iframe"]}
            src="https://maps.google.com/maps?q=Mother%20Teresa%20College%20of%20Physiotherapy%2C%20Illuppur%2C%20Pudukkottai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {submitted && (
        <div className={styles.overlay}>
          <div className={styles.successModal}>
            <div className={styles.successContent}>
              <div className={styles.successIcon}>
                <div style={{ position: 'relative', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={successCircleIcon} alt="" style={{ position: 'absolute', width: '32px', height: '32px', inset: 0 }} />
                  <img src={successTickIcon} alt="Success" style={{ position: 'absolute', zIndex: 1 }} />
                </div>
              </div>
              <h2>Contact Form Submitted</h2>
              <p>We have received your Contact form and our admissions team will Reach you shortly.</p>
              <button className={styles["submit-btn"]} onClick={() => setSubmitted(false)}>Done</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
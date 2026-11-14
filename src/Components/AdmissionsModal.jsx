import React, { useState, useEffect } from "react";
import styles from "../Styles/AdmissionsModal.module.css";
import modalImg from "../assets/images/admission-modal.webp";
import successCircleIcon from "../assets/icons/success-circle (1).svg";
import successTickIcon from "../assets/icons/success-tick.svg";

const STATE_CITIES = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kurnool"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Mandi", "Solan"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Kannur"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Manipur": ["Imphal", "Thoubal", "Bishnupur"],
  "Meghalaya": ["Shillong", "Tura", "Jowai"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  "Sikkim": ["Gangtok", "Namchi", "Gyalshing"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Vellore", "Erode", "Thanjavur", "Cuddalore", "Villupuram"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Varanasi", "Agra", "Prayagraj"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Haldwani", "Roorkee"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
  "Andaman and Nicobar Islands": ["Port Blair"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  "Delhi": ["New Delhi", "Delhi"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag"],
  "Ladakh": ["Leh", "Kargil"],
  "Lakshadweep": ["Kavaratti"],
  "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"]
};

const DEGREE_COURSES = {
  "UG": ["BPT"]
};

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  state: "",
  city: "",
  degree: "",
  course: ""
};

const initialTouched = {
  name: false,
  email: false,
  mobile: false,
  state: false,
  city: false,
  degree: false,
  course: false,
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
    
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "state") next.city = "";
      if (name === "degree") next.course = "";
      return next;
    });
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
    form.state !== "" &&
    form.city !== "" &&
    form.degree !== "" &&
    form.course !== "" &&
    isAgreed;

  const selectClass = (field) =>
    [
      !form[field] ? styles.placeholder : "",
      touched[field] && !form[field] ? styles.error : ""
    ].join(" ").trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "9f26eec7-0a35-48ff-8cc8-1f92075d10f4", // Replace with your actual key
          subject: "New Admissions Enquiry Submission of Mother Terasa College of Physiotherapy",
          Name: form.name,
          Mobile: form.mobile,
          Email: form.email,
          State: form.state,
          City: form.city,
          Degree: form.degree,
          Course: form.course
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
              <p>Limited seats available—apply now to secure your place in our prestigious physiotherapy programs.</p>

              <div className={styles.imageWrapper}>
                <img src={modalImg} alt="Mother Terasa Pudukottai admission student" />
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
                    <select name="state" value={form.state} onChange={handleChange} onBlur={handleBlur} required className={selectClass("state")}>
                      <option value="" disabled>Select your State</option>
                      {Object.keys(STATE_CITIES).map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <select name="city" value={form.city} onChange={handleChange} onBlur={handleBlur} required className={selectClass("city")}>
                      <option value="" disabled>Select City</option>
                      {(STATE_CITIES[form.state] || []).map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.selectRow}>
                    <div className={styles.inputGroup}>
                      <select name="degree" value={form.degree} onChange={handleChange} onBlur={handleBlur} required className={selectClass("degree")}>
                        <option value="" disabled>Select Degree</option>
                        {Object.keys(DEGREE_COURSES).map((degree) => (
                          <option key={degree} value={degree}>{degree}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <select name="course" value={form.course} onChange={handleChange} onBlur={handleBlur} required className={selectClass("course")}>
                        <option value="" disabled>Select Course</option>
                        {(DEGREE_COURSES[form.degree] || []).map((course) => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
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

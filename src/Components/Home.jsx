import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Home.module.css";
import Cta from "./Cta";

import heroImg from "../assets/images/hero-students.jpg";
import labImg1 from "../assets/images/lab-1.jpg";
import labImg2 from "../assets/images/lab-2.jpg";
import labImg3 from "../assets/images/lab-3.jpg";
import labImg4 from "../assets/images/lab-4.jpg";
import campusImg1 from "../assets/images/campus-life-1.png";
import campusImg2 from "../assets/images/campus-life-2.png";
import campusImg3 from "../assets/images/campus-life-3.png";
import handsOnIcon from "../assets/icons/settings-01.svg";
import handsOnIconHover from "../assets/icons/settings-hover.svg";
import infraIcon from "../assets/icons/building2.svg";
import infraIconHover from "../assets/icons/building2 - hover.svg";
import careerIcon from "../assets/icons/graduation-cap.svg";
import careerIconHover from "../assets/icons/graduation-cap - hover.svg";
import facultyIcon from "../assets/icons/teaching.svg";
import facultyIconHover from "../assets/icons/teaching - hover.svg";
import stethIcon from "../assets/icons/stethoscope.svg";
const faqData = [
  {
    q: "What is The Duration of BPT Program?",
    a: "The Bachelor of Physiotherapy (BPT) program is a 4.5-year course, including a 6-month mandatory clinical internship.",
  },
  {
    q: "Does the college provide internships?",
    a: "Yes, all BPT students complete a structured 6-month internship in affiliated hospitals and clinical centers as part of the curriculum.",
  },
  {
    q: "Does the college provide Practical Learning?",
    a: "Yes, students get hands-on training through fully equipped labs, simulations, and real-world clinical exposure throughout the course.",
  },
  {
    q: "What are the career opportunities after completing BPT?",
    a: "Graduates can work in hospitals, sports clinics, rehabilitation centers, fitness clubs, or start their own private practice.",
  },
  {
    q: "What is the eligibility criteria for the BPT program?",
    a: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology from a recognized board.",
  }
];

const testimonials = [
  {
    quote:
      "I am grateful for the hands-on training and guidance provided by the faculty. The curriculum is well-structured and helps us understand both the theoretical and practical aspects of physiotherapy.",
    name: "Arun K. – BPT Student",
  },
  {
    quote:
      "The clinical training opportunities have been invaluable in preparing me for real-world healthcare settings. The faculty members are approachable, knowledgeable, and always willing to help.",
    name: "Divya R. – BPT Student",
  },
  {
    quote:
      "Mother Terasa College of Physiotherapy offers a perfect blend of academics and practical learning. The modern facilities and patient-centered training have helped me develop strong clinical skills.",
    name: "Vignesh M. – BPT Student",
  },
  {
    quote:
      "The college has provided me with numerous opportunities to learn and grow. The supportive campus environment, experienced faculty, and practical exposure have made my educational journey truly rewarding.",
    name: "Keerthana P. – BPT Alumni",
  },
  {
    quote:
      "Studying here has been a wonderful experience. The emphasis on practical learning, internships, and professional development has prepared me well for a successful career in physiotherapy.",
    name: "Naveena R. – BPT Student",
  },
];

const offers = [
  {
    title: "Hands-on Learning",
    desc: "Gain practical experience through labs, real-world projects, and internship opportunities.",
    icon: handsOnIcon,
    hoverIcon: handsOnIconHover,
  },
  {
    title: "Modern Infrastructure & Facilities",
    desc: "Experience a smart and student-friendly campus designed with advanced laboratories",
    icon: infraIcon,
    hoverIcon: infraIconHover,
  },
  {
    title: "Career & Placement Support",
    desc: "Comprehensive training and placement assistance to help you build a successful career.",
    icon: careerIcon,
    hoverIcon: careerIconHover,
  },
  {
    title: "Expert Faculty & Mentorship",
    desc: "Learn from experienced educators and industry professionals who guide your academic journey.",
    icon: facultyIcon,
    hoverIcon: facultyIconHover,
  },
];

const stats = [
  { value: "4+", label: "Academic Courses" },
  { value: "5+", label: "Advanced Lab Facilities" },
  { value: "1000+", label: "Graduating Students" },
];

export default function Home({ setAdmissionsModalOpen }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [isTouchPaused, setIsTouchPaused] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <img src={heroImg} alt="MTCP students" className={styles["hero__bg"]} />
        <div className={styles["hero__overlay"]} />
        <div className={styles["hero__content"]}>
          <h1>Mother Terasa College Of <span>Physiotherapy</span></h1>
          <p>
            Build a successful healthcare career through advanced
            physiotherapy education, practical training, and expert
            mentorship.
          </p>
          <div className={styles.ctaGroup}>
            <Link to="/academics" className={`${styles.btn} ${styles["btn--primary"]}`}>
              Explore Programs <span className={styles["btn-arrow"]} aria-hidden="true"></span>
            </Link>
            <button 
              className={`${styles.btn} ${styles["btn--secondary"]} ${styles.mobileAdmissionsBtn}`}
              onClick={() => setAdmissionsModalOpen?.(true)}
            >
              Admissions Open <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* NEWS BAR */}
      <section className={styles.newsbar}>
        <div className={styles["newsbar__badge-container"]}>
          <Link to="/news" className={styles["newsbar__badge"]}>Latest News</Link>
        </div>
        <div className={styles["newsbar__marquee"]}>
          <div className={styles["newsbar__track"]}>
            {[1, 2, 3].map((i) => (
              <Link to="/news" key={`t1-${i}`} className={styles["newsbar__text"]}>
                Nov 2025 Examination Timetable Download
              </Link>
            ))}
          </div>
          <div className={styles["newsbar__track"]}>
            {[1, 2, 3].map((i) => (
              <Link to="/news" key={`t2-${i}`} className={styles["newsbar__text"]}>
                Nov 2025 Examination Timetable Download
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STUDY / STATS */}
      <section className={styles["stats-section"]}>
        <div className={styles["stats-section__inner"]}>
          <div className={styles["section-eyebrow"]}>Our Impact</div>
          <h2 className={styles["section-title"]}>
            Why Study at <span>MTCP</span>
          </h2>
          <p className={styles["section-subtitle"]}>
            Delivering quality physiotherapy education with practical learning
            and professional development.
          </p>
        </div>

        <div className={styles["stats-grid"]}>
          {stats.map((s) => (
            <div className={styles["stat-card"]} key={s.label}>
              <span className={styles["stat-card__value"]}>{s.value}</span>
              <span className={styles["stat-card__label"]}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className={styles["offer-section"]}>
        <div className={styles["offer-section__inner"]}>
          <h2
            className={`${styles["section-title"]} ${styles["section-title--light"]}`}
          >
            What we Offer
          </h2>
          <p
            className={`${styles["section-subtitle"]} ${styles["section-subtitle--light"]}`}
          >
            Experience quality physiotherapy education with expert faculty,
            modern infrastructure, and hands-on clinical training.
          </p>

          <div className={styles["offer-grid"]}>
            {offers.map((o) => (
              <div className={styles["offer-card"]} key={o.title}>
                <span className={styles["offer-card__icon"]}>
                  <img src={o.icon} alt="" aria-hidden="true" className={styles["icon-default"]} />
                  <img src={o.hoverIcon} alt="" aria-hidden="true" className={styles["icon-hover"]} />
                </span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HANDS ON LEARNING */}
      <section className={styles["handson-section"]}>
        <div className={styles["handson-section__inner"]}>
          <div className={styles["handson-gallery"]}>
            <img src={labImg1} alt="Faculty guiding student" />
            <img src={labImg2} alt="Students in group session" />
            <img src={labImg3} alt="Anatomy model training" />
            <img src={labImg4} alt="Student with model" />
            <div className={styles["handson-badge"]}>
              <div className={styles["handson-badge__text"]}>
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                  <path id="badge-curve" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="none" />
                  <text fill="#122056" fontSize="17" fontWeight="400">
                    <textPath href="#badge-curve" startOffset="0" textLength="420">
                      Practical  Training  Laboratories
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className={styles["handson-badge__center"]}>
                <img src={stethIcon} alt="Stethoscope" />
              </div>
            </div>
          </div>

          <div className={styles["handson-content"]}>
            <h2>Hands-On Learning for Real Healthcare Environments</h2>
            <p>
              Gain real-world clinical exposure and hands-on training through
              advanced labs, simulations, and healthcare-based practical
              sessions.
            </p>
            <h3>Electrotherapy Lab</h3>
            <p className={styles["desc-2"]}>
              College has well equipped lab to study the intricacies of
              function of the body and to teach the students regarding the
              various biochemical, electrophysiological analysis using
              sophisticated instruments.
            </p>
            <a href="/facilities" className={styles["link-arrow"]}>
              <span className={styles["link-arrow__icon"]} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.807 4.27005C10.807 4.27005 14.844 7.72132 14.8441 8.77584C14.8441 9.8303 10.807 13.2815 10.807 13.2815M14.3958 8.77582L3.60309 8.77582" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span> Know more
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles["testimonial-section"]}>
        <div
          className={`${styles["section-eyebrow"]} ${styles["section-eyebrow--pill"]}`}
        >
          Student Testimonials
        </div>
        <h2 className={`${styles["section-title"]} ${styles["section-title--light"]}`}>
          Real Stories. Real Success.
        </h2>
        <p
          className={`${styles["section-subtitle"]} ${styles["section-subtitle--light"]}`}
        >
          Hear from our students as they share their experiences,
          achievements, and learning journey at Mother Terasa College of
          Physiotherapy.
        </p>

        <div 
          className={styles["testimonial-marquee-container"]}
          onTouchStart={() => setIsTouchPaused(true)}
          onTouchEnd={() => setIsTouchPaused(false)}
        >
          <div 
            className={styles["testimonial-marquee-track"]}
            style={{ animationPlayState: isTouchPaused ? 'paused' : undefined }}
          >
            {Array(20).fill(testimonials).flat().map((t, i) => (
              <div className={styles["testimonial-card"]} key={`${t.name}-${i}`}>
                <p className={styles["testimonial-card__quote"]}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className={styles["testimonial-card__name"]}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        <p className={styles["testimonial-section__footer"]}>
          5000+ Satisfied Students
        </p>
      </section>

      {/* CAMPUS LIFE */}
      <section className={styles["campus-section"]}>
        <div className={styles["campus-header-mobile"]}>
          <h2 className={styles["campus-title"]}>Campus Life @MTCP</h2>
          <p className={styles["campus-subtitle"]}>
            Discover a Campus That Encourages Innovation, Collaboration, and Care.
          </p>
        </div>
        <div className={styles["campus-card"]}>
          <div className={styles["campus-header-desktop"]}>
            <h2 className={styles["campus-title"]}>Campus Life @MTCP</h2>
            <p className={styles["campus-subtitle"]}>
              Discover a Campus That Encourages Innovation, Collaboration, and Care.
            </p>
          </div>

          <div className={styles["campus-grid"]}>
            {/* Top row: text left, big image right */}
            <div className={styles["campus-text"]}>
              <h3>Aranga 2026</h3>
              <p>
                Mother Terasa Group of Institutions Celebrated  <strong>Aranga '26</strong>, a grand
                cultural fest filled with colorful performances, creative talents,
                exciting competitions, and joyful moments. The event showcased the spirit of unity,
                teamwork, and excellence, creating lasting memories for everyone on campus.
              </p>
            </div>
            <div className={styles["campus-img--main"]}>
              <img src={campusImg1} alt="Aranga 2026 stage performance" />
            </div>

            {/* Bottom row: two equal images */}
            <div className={styles["campus-img--sub-1"]}>
              <img src={campusImg2} alt="Singer performing at Aranga 2026" />
            </div>
            <div className={styles["campus-img--sub-2"]}>
              <img src={campusImg3} alt="Hosts at Aranga 2026" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles["faq-section"]}>
        <div
          className={`${styles["section-eyebrow"]} ${styles["section-eyebrow--accent"]}`}
        >
          Frequently asked questions
        </div>
        <h2 className={styles["section-title"]}>
          Got Questions? We’ve Got Answers
        </h2>
        <p className={styles["section-subtitle"]}>
          Everything you need to know about our programs and admission
          process.
        </p>

        <div className={styles["faq-list"]}>
          {faqData.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                className={`${styles["faq-item"]} ${isOpen ? styles["faq-item--open"] : ""
                  }`}
                key={item.q}
              >
                <button
                  className={styles["faq-item__question"]}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className={styles["faq-item__chevron"]} aria-hidden="true" />
                </button>
                <div
                  className={`${styles["faq-item__answer-wrapper"]} ${isOpen ? styles["faq-item__answer-wrapper--open"] : ""
                    }`}
                >
                  <div className={styles["faq-item__answer"]}>
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </main>
  );
}
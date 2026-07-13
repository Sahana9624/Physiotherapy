import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Academics.module.css";
import Cta from "./Cta";

import heroImg from "../assets/images/academics-hero.png";
import highlightImg from "../assets/images/academics-highlight.jpg";

import handsOnIcon from "../assets/icons/teaching.svg";
import handsOnIconHover from "../assets/icons/teaching - hover.svg";
import capIcon from "../assets/icons/graduation-cap.svg";
import capIconHover from "../assets/icons/graduation-cap - hover.svg";
import buildingIcon from "../assets/icons/building2.svg";
import buildingIconHover from "../assets/icons/building2 - hover.svg";
import briefcaseIcon from "../assets/icons/hospital-02.svg";
import briefcaseIconHover from "../assets/icons/hospital-02 - hover.svg";

const stats = [
  { value: "5+", label: "Advanced Lab Facilities" },
  { value: "6+", label: "Years of Excellence" },
  { value: "500+", label: "Hours of Practical Learning" },
];

const highlights = [
  {
    title: "Hands-on Clinical Training",
    desc: "Hands on Training at Government Medical college & Hospital",
    icon: handsOnIcon,
    hoverIcon: handsOnIconHover,
  },
  {
    title: "Academic Excellence",
    desc: "Academic Excellence by Experienced and dedicated faculty",
    icon: capIcon,
    hoverIcon: capIconHover,
  },
  {
    title: "Modern Infrastructure",
    desc: "Modern Infrastructure by well equipped labs and Digital Class room",
    icon: buildingIcon,
    hoverIcon: buildingIconHover,
  },
  {
    title: "Clinical & Field Exposure",
    desc: "Develop professional skills through practical training in healthcare.",
    icon: briefcaseIcon,
    hoverIcon: briefcaseIconHover,
  },
];



export default function Academics() {
  return (
    <main className={styles.academics}>
      {/* HERO */}
      <section className={styles.hero}>
        <img src={heroImg} alt="Faculty teaching anatomy with skeleton model" className={styles["hero__bg"]} />
        <div className={styles["hero__overlay"]} />
        
        <div className={styles["hero__inner"]}>
          <div className={styles["hero__content"]}>
            <h1>Building Strong Foundations in <span>Physiotherapy Education</span></h1>
            <p>
              Build a successful healthcare career through advanced
              physiotherapy education, practical training, and expert
              mentorship.
            </p>
            <a 
              href="#enroll-section" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('enroll-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`${styles.btn} ${styles["btn--primary"]}`}
            >
              Explore Programs <span className={styles["btn-arrow"]} aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </section>

      {/* ACADEMIC EXCELLENCE STAT CARD */}
        <div className={styles["stat-card"]}>
          <div className={styles["stat-card__intro"]}>
            <h2>Academic Excellence</h2>
            <p>
              Delivering quality physiotherapy education with practical
              learning and professional development.
            </p>
          </div>
          <div className={styles["stat-card__grid"]}>
            {stats.map((s) => (
              <div className={styles["stat-card__item"]} key={s.label}>
                <span className={styles["stat-card__value"]}>{s.value}</span>
                <span className={styles["stat-card__label"]}>{s.label}</span>
              </div>
            ))}
          </div>
      </div>

      {/* ENROLL / PROGRAM */}
      <section id="enroll-section" className={styles["enroll-section"]}>
        <div className={styles["enroll-card"]}>
          <h2>
            Enroll in Our <strong>Bachelor of Physiotherapy</strong> Program
          </h2>
          <p>
            Develop the expertise to assess, treat, and improve movement
            through advanced physiotherapy education and practical exposure.
          </p>

          <div className={styles["program-row"]}>
            <div className={styles["program-row__info"]}>
              <span className={styles["program-row__title"]}>Bachelor of Physiotherapy</span>
              <span className={styles["program-row__duration"]}>Duration : 5 Years + 1 Year Internship</span>
            </div>
            <Link to="/course-description" className={styles["program-row__btn"]}>
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className={styles["highlights-wrap"]}>
        <div className={styles["highlights-card"]}>
          <div className={styles["highlights-card__heading"]}>
            <span className={styles["section-eyebrow"]}>Program Highlights</span>
            <h2 className={styles["section-title"]}>A Comprehensive Learning Experience</h2>
            <p className={styles["section-subtitle"]}>
              Gain real-world clinical exposure and hands-on training through
              advanced labs, simulations, and healthcare-based practical
              sessions.
            </p>
          </div>

          <div className={styles["highlights-grid"]}>
            <img
              src={highlightImg}
              alt="Students examining an anatomical heart model"
              className={styles["highlights-grid__img"]}
            />

            <ul className={styles["highlights-list"]}>
              {highlights.map((h) => (
                <li className={styles["highlights-list__item"]} key={h.title}>
                  <span className={styles["highlights-list__icon"]} aria-hidden="true">
                    <img src={h.icon} alt={h.title} className={styles["icon-normal"]} />
                    <img src={h.hoverIcon} alt={h.title} className={styles["icon-hover"]} />
                  </span>
                  <div>
                    <h3>{h.title}</h3>
                    <p>{h.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </main>
  );
}
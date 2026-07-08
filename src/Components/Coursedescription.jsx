import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Coursedescription.module.css";
import CourseApplicationModal from "./CourseApplicationModal";

import heroImg from "../assets/images/course-hero.jpg";
import overviewImg from "../assets/images/about-mission.jpg";

const careerOpportunities = [
  "Hospitals and rehabilitation centers",
  "Private physiotherapy clinics",
  "Sports teams and fitness centers",
  "Home healthcare services",
  "Academic and research institutions",
  "Corporate wellness programs",
  "NGOs and community outreach",
  "Government and defense medical services",
  "Opportunities abroad (Middle East, Canada, Australia, UK, etc.)",
];

export default function CourseDescription() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <main className={styles.course}>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          src={heroImg}
          alt="Students examining a reflex hammer in a clinical training session"
          className={styles["hero__bg"]}
        />

        {/* HEADER CARD */}
        <div className={styles["header-card"]}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/academics">Academics</Link>
            <span aria-hidden="true">›</span>
            <span className={styles["breadcrumb__current"]}>BPT</span>
          </nav>

          <h1>Bachelor of Physiotherapy</h1>

          <div className={styles["header-card__meta"]}>
            <span>Course Duration - 4 Years</span>
            {/* <span className={styles["meta-divider"]} aria-hidden="true" /> */}
            <span>Internship - 1 Year</span>
          </div>

          <button onClick={() => setIsModalOpen(true)} className={styles["apply-btn"]}>
            Apply Now
          </button>
        </div>
      </section>

      {/* COURSE DETAILS */}
      <section className={styles["details-section"]}>
        <div className={styles["details-grid"]}>
          <img
            src={overviewImg}
            alt="Faculty member assisting student with clinical equipment"
            className={styles["details-grid__img"]}
          />

          <div className={styles["details-grid__content"]}>
            <h2>Course Overview</h2>
            <ul className={styles["bullet-list"]}>
              <li>
                The Bachelor of Physiotherapy (BPT) is a comprehensive
                5-year undergraduate program that equips students with the
                knowledge and clinical skills necessary to assess, diagnose,
                and treat individuals with physical disabilities, movement
                disorders, and functional impairments. The course blends
                foundational sciences such as anatomy, physiology, and
                biomechanics with hands-on training in therapeutic
                techniques including exercise therapy, electrotherapy, and
                manual rehabilitation. Students gain in-depth exposure to
                various medical disciplines, including orthopedics,
                neurology, cardiopulmonary care, and community-based
                rehabilitation. The final six months of the program are
                dedicated to a compulsory clinical internship, allowing
                students to apply their learning in real-world healthcare
                settings under expert supervision. Graduates of the BPT
                program are well-prepared to work in hospitals,
                rehabilitation centers, sports teams, private practice, and
                academic or research institutions, making meaningful
                contributions to patient care and the broader field of
                physical rehabilitation.
              </li>
            </ul>

            <h2>Carrier Opportunities</h2>
            <ul className={styles["bullet-list"]}>
              {careerOpportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Eligibility Criteria</h2>
            <ul className={styles["bullet-list"]}>
              <li>
                <strong>Pass in +2</strong> or equivalent with{" "}
                <strong>minimum 50 % of marks</strong> in aggregate in
                Physics, Chemistry, Biology (Botany &amp; Zoology) or
                Mathematics.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <CourseApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Cta.module.css";
import arrowUpRight from "../assets/icons/arrow-up-right.svg";
import arrowRight from "../assets/icons/arrow-right.svg";

export default function Cta() {
  return (
    <section className={styles["cta-section"]}>
      <div className={styles["cta-card"]}>
        <span className={styles["section-eyebrow"]}>Apply Now</span>
        <h2 className={styles["section-title"]}>
          Need Guidance for Undergraduate BPT Program ?
        </h2>
        <p className={styles["section-subtitle"]}>
          Get complete information about admissions, curriculum,
          facilities, and practical training opportunities.
        </p>
        <Link to="/contact" className={`${styles.btn} ${styles["btn--cta"]}`}>
          <span className={styles["btn-icon"]} aria-hidden="true">
            <img src={arrowUpRight} alt="" className={styles["icon-default"]} />
            <img src={arrowRight} alt="" className={styles["icon-hover"]} />
          </span> 
          <span className={styles["btn-text"]}>Enquire Now</span>
        </Link>
      </div>
    </section>
  );
}

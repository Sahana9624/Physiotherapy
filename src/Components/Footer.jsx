import React from "react";
import { Link,useLocation } from "react-router-dom";
import styles from "../Styles/Footer.module.css";
import logo from "../assets/images/logo-footer.png";

import locationIcon from "../assets/icons/location.svg";
import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import facebookHoverIcon from "../assets/icons/facebook-hover.svg";
import linkedinHoverIcon from "../assets/icons/linkedin-hover.svg";
import instagramHoverIcon from "../assets/icons/instagram - hover.svg";
import twitterHoverIcon from "../assets/icons/twitter-hover.svg";


const quickLinks = [
  { label: "About MTCP", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Facilities", to: "/facilities" },
  { label: "News and Events", to: "/news" },
  { label: "Gallery", to: "/gallery" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms and Conditions", to: "/terms-and-conditions" },
  { label: "Return and Refund Policy", to: "/return-refund-policy" },
  { label: "Cancellation Policy", to: "/cancellation-policy" },
];

export default function Footer() {
  const location = useLocation();
  const isCoursePage = location.pathname === '/course-description';
  return (
    <footer className={`${styles.footer} ${isCoursePage ? styles.footerCourse : ''}`}>
      {!isCoursePage && (
        <div className={styles["footer__top"]}>
        {/* BRAND COLUMN */}
        <div className={styles["footer__brand"]}>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="Mother Terasa College logo" className={styles["brand__logo"]} />
            <span className={styles["brand__text"]}>
              <span className={styles["brand__name"]}>MOTHER TERASA</span>
              <span className={styles["brand__tagline"]}>
                COLLEGE OF PHYSIOTHERAPY
              </span>
              <span className={styles["brand__affiliation"]}>
                Affiliated to Dr.M.G.R Medical University, Chennai
              </span>
            </span>
          </Link>

          <p className={styles["footer__desc"]}>
            The establishment of Mother Terasa Physiotherapy College in 2020 mark a significant 
            milestone in the journey of the 
            Mother Terasa Group of Institution at Illupur, 
            Pudukkottai, Tamil Nadu  {" "}
            {location.pathname !=='/about' && <Link to="/about" className={styles["read-more"]}>
              Read More
            </Link>}
          </p>

          <div className={styles["footer__social"]}>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" className={styles.iconNormal} />
              <img src={facebookHoverIcon} alt="Facebook Hover" className={styles.iconHover} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className={styles.iconNormal} />
              <img src={linkedinHoverIcon} alt="LinkedIn Hover" className={styles.iconHover} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className={styles.iconNormal} />
              <img src={instagramHoverIcon} alt="Instagram Hover" className={styles.iconHover} />
            </a>
            <a href="https://twitter.com" aria-label="X (Twitter)" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" className={styles.iconNormal} />
              <img src={twitterHoverIcon} alt="Twitter Hover" className={styles.iconHover} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS COLUMN */}
        <div className={styles["footer__col"]}>
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div className={styles["footer__col"]}>
          <h3>Contact us</h3>
          <ul className={styles["contact-list"]}>
            <li>
              <img src={locationIcon} alt="location" className={styles["icon-wrap"]} />
              <span>
                Mother Terasa College of Physiotherapy, Mettusalai, Illuppur,
                Pudukkottai(Dt), Tamilnadu-622102.
              </span>
            </li>
            <li>
              <img src={phoneIcon} alt="Phone" className={styles["icon-wrap"]} />
              <span>
                +91-94433 72151
                <br />
                +91-99429 88610,
                <br />
                +91-94433 72151
              </span>
            </li>
            <li>
              <img src={mailIcon} alt="Email" className={styles["icon-wrap"]} />
              <a href="mailto:mtcppdk@gmail.com">mtcppdk@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      )}

      {/* BOTTOM BAR */}
      <div className={styles["footer__bottom"]}>
        <ul className={styles["legal-links"]}>
          {legalLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <p className={styles.copyright}>
          © 2026 Mother Terasa College of Physiotherapy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
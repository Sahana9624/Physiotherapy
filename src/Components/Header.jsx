import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "../Styles/Header.module.css";
import logo from "../assets/images/logo.png";
import phoneIcon from "../assets/images/phone.svg";
import mailIcon from "../assets/images/mail.svg";
import arrowIcon from "../assets/icons/arrow-right.svg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Facilities", to: "/facilities" },
  { label: "News and Events", to: "/news" },
  { label: "Gallery", to: "/gallery" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        {/* TOP CONTACT BAR */}
        <div className={styles["top-bar"]}>
          <div className={styles["top-bar__inner"]}>
            <div className={styles["top-bar__phones"]}>
              <img src={phoneIcon} alt="" aria-hidden="true" className={styles["icon-wrap"]} />
              <a href="tel:+919442293938">+91 - 944229 3938</a>
              <span className={styles.divider}>|</span>
              <a href="tel:+918668169844">+91 - 8668169844</a>
            </div>

            <div className={styles["top-bar__email"]}>
              <img src={mailIcon} alt="" aria-hidden="true" className={styles["icon-wrap"]} />
              <a href="mailto:mtcppdk@gmail.com">mtcppdk@gmail.com</a>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className={styles.navbar}>
          <div className={styles["navbar__inner"]}>
            <Link to="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Mother Terasa College logo" className={styles.brand__logo} />
              <span className={styles.brand__text}>
                <span className={styles.brand__name}>MOTHER TERASA</span>
                <span className={styles.brand__tagline}>COLLEGE OF PHYSIOTHERAPY</span>
                <span className={`${styles.brand__affiliation} ${styles.desktopOnly}`}>
                  AFFILIATED TO THE TAMILNADU DR.M.G.R MEDICAL UNIVERSITY
                </span>
                <span className={`${styles.brand__affiliation} ${styles.mobileOnly}`}>
                  Affiliated to Dr.M.G.R Medical University,Chennai
                </span>
              </span>
            </Link>

            <nav
              className={`${styles.nav} ${menuOpen ? styles["nav--open"] : ""}`}
              aria-label="Primary"
              onClick={() => menuOpen && setMenuOpen(false)}
            >
              <div 
                className={styles["mobile-nav-links-container"]} 
                onClick={(e) => e.stopPropagation()}
              >
                {navLinks.map((link) => (
                  <NavLink
                    to={link.to}
                    key={link.label}
                    className={({ isActive }) => {
                      const isCourseDescActive = link.label === "Academics" && location.pathname === "/course-description";
                      return isActive || isCourseDescActive
                        ? `${styles.nav__link} ${styles["nav__link--active"]}`
                        : styles.nav__link;
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Contact Us Button */}
              <Link to="/contact" className={styles["mobile-cta"]} onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </nav>

            <Link to="/contact" className={styles.cta}>
              <span className={styles["cta-text"]}>Contact Us</span>
              <img src={arrowIcon} alt="" aria-hidden="true" className={styles["cta-arrow"]} />
            </Link>

            <button
              type="button"
              className={`${styles["menu-toggle"]} ${menuOpen ? styles["menu-toggle--open"] : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
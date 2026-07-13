import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Gallery.module.css";
import Cta from "./Cta";
import { galleryItems } from "../data/galleryData";

export default function Gallery() {
  return (
    <main className={styles.gallery}>
      {/* HEADER */}
      <section className={styles.header}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span className={styles["breadcrumb__current"]}>Gallery</span>
        </nav>

        <h1>Gallery</h1>
        <p>Campus and Department Images</p>
      </section>

      {/* GALLERY GRID */}
      <section className={styles["grid-section"]}>
        <div className={styles["gallery-grid"]}>
          {galleryItems.map((item) => (
            <Link
              to={`/gallery/${item.slug}`}
              className={styles["gallery-card"]}
              key={item.title}
            >
              <div className={styles["gallery-card__img-wrap"]}>
                <img src={item.coverImg} alt={item.title} className={styles["gallery-card__img"]} />
                <div className={styles["gallery-card__overlay"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles["plus-icon"]}>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
              <span className={styles["gallery-card__title"]}>{item.title}</span>
              <span className={styles["gallery-card__link"]}>
                <span className={styles["gallery-card__link-arrow"]} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.807 4.27005C10.807 4.27005 14.844 7.72132 14.8441 8.77584C14.8441 9.8303 10.807 13.2815 10.807 13.2815M14.3958 8.77582L3.60309 8.77582" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span> Know more
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </main>
  );
}
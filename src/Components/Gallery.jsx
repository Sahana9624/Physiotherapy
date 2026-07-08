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
              <img src={item.coverImg} alt={item.title} className={styles["gallery-card__img"]} />
              <span className={styles["gallery-card__title"]}>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </main>
  );
}
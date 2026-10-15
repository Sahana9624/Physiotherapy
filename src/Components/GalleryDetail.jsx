import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { galleryItems } from "../data/galleryData";
import styles from "../Styles/GalleryDetail.module.css";
import Cta from "./Cta";
import FadeUp from "./FadeUp";

export default function GalleryDetail() {
  const { slug } = useParams();
  
  const galleryItem = galleryItems.find((item) => item.slug === slug);

  if (!galleryItem) {
    return <Navigate to="/gallery" />;
  }

  return (
    <main className={styles.galleryDetail}>
      <section className={styles.header}>
        <FadeUp>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/gallery" className={styles.active}>Gallery</Link>
          </nav>
          <h1>{galleryItem.title}</h1>
          <p>Campus and Department Images</p>
        </FadeUp>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.imageGrid}>
          {galleryItem.images.map((imgSrc, idx) => (
            <FadeUp key={idx} delay={(idx % 3) * 100}>
              <img src={imgSrc} alt={`${galleryItem.title} ${idx + 1}`} className={styles.gridImg} />
            </FadeUp>
          ))}
        </div>
      </section>

      <Cta />
    </main>
  );
}

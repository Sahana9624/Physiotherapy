import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/News.module.css";
import Cta from "./Cta";

import { newsItems } from "../data/newsData";

export default function News() {
  return (
    <main className={styles.news}>
      {/* HEADER */}
      <section className={styles.header}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span className={styles["breadcrumb__current"]}>News and Events</span>
        </nav>

        <h1>Happenings @ MTCP</h1>
        <p>Campus Updates &amp; Highlights</p>
      </section>

      {/* NEWS GRID */}
      <section className={styles["grid-section"]}>
        <div className={styles["news-grid"]}>
          {newsItems.map((item) => (
            <Link to={item.href} className={styles["news-card"]} key={item.title}>
              <div className={styles["news-card__img-wrap"]}>
                <img src={item.img} alt={item.title} className={styles["news-card__img"]} />
                {item.isNew && <span className={styles["news-card__badge"]}>New</span>}
              </div>

              <h2>{item.title}</h2>
              <p className={styles["news-card__date"]}>{item.date}</p>
              <p className={styles["news-card__excerpt"]}>{item.excerpt}</p>

              <span className={styles["news-card__link"]}>
                <span className={styles["news-card__link-arrow"]} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
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
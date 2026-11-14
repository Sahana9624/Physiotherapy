import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/News.module.css";
import Cta from "./Cta";
import FadeUp from "./FadeUp";
import { newsItems } from "../data/newsData";

export default function News() {
  return (
    <main className={styles.news}>
      {/* HEADER */}
      <section className={styles.header}>
        <FadeUp>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span className={styles["breadcrumb__current"]}>News and Events</span>
          </nav>

          <h1>Happenings @ MTCP</h1>
          <p>Campus Updates &amp; Highlights</p>
        </FadeUp>
      </section>

      {/* NEWS GRID */}
      <section className={styles["grid-section"]}>
        <div className={styles["news-grid"]}>
          {newsItems.map((item, idx) => (
            <FadeUp
              as={Link}
              to={item.href}
              className={styles["news-card"]}
              key={item.title}
              delay={(idx % 3) * 120}
            >
              <div className={styles["news-card__img-wrap"]}>
                <img src={item.img} alt={`Mother Terasa Pudukottai ${item.title}`} className={styles["news-card__img"]} />
                {item.isNew && <span className={styles["news-card__badge"]}>New</span>}
              </div>

              <h2>{item.title}</h2>
              <p className={styles["news-card__date"]}>{item.date}</p>
              <p className={styles["news-card__excerpt"]}>{item.excerpt}</p>

              <span className={styles["news-card__link"]}>
                <span className={styles["news-card__link-arrow"]} aria-hidden="true"></span> Know more
              </span>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </main>
  );
}
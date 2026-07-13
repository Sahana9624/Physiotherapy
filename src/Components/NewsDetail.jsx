import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { newsItems } from "../data/newsData";
import styles from "../Styles/NewsDetail.module.css";
import Cta from "./Cta";

export default function NewsDetail() {
  const { slug } = useParams();
  
  const newsItem = newsItems.find((item) => item.href === `/news/${slug}`);

  if (!newsItem) {
    return <Navigate to="/news" />;
  }

  return (
    <main className={styles.newsDetail}>
      <section className={styles.header}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/news" className={styles.active}>News and Events</Link>
        </nav>
        <h1>{newsItem.title}</h1>
        <p>Campus Updates &amp; Highlights</p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.newsCard}>
          <div className={styles.imageWrapper}>
            <img src={newsItem.img} alt={newsItem.title} />
          </div>
          <div className={styles.textContent}>
            {newsItem.isNew && <span className={styles.badge}>Latest</span>}
            <h2 className={styles.title}>{newsItem.title}</h2>
            <p className={styles.date}>{newsItem.date}</p>
            <div className={styles.description}>
              {newsItem.description}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}

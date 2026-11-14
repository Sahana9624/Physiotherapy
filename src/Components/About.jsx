import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/About.module.css";
import Cta from "./Cta";
import FadeUp from "./FadeUp";

import aboutHeroImg from "../assets/images/about-hero.webp";
import purposeImg from "../assets/images/about-purpose.webp";
import visionImg from "../assets/images/about-building.webp";
import missionImg from "../assets/images/about-mission.webp";
import founderImg from "../assets/images/founder.webp";
import chairmanImg from "../assets/images/chairman.webp";
import principalImg from "../assets/images/principal.webp";

export default function About() {
  return (
    <main className={styles.about}>
      {/* HERO */}
      <section className={styles.hero}>
        <img src={aboutHeroImg} alt="Mother Terasa Pudukottai about hero" className={styles["hero__bg"]} />
        <div className={styles["hero__overlay"]} />
        <FadeUp className={styles["hero__content"]}>
          <h1>
            About Mother Terasa College <span>Of Physiotherapy</span>
          </h1>
          <p>
            The establishment of Mother Terasa Physiotherapy College in 2020
            mark a significant milestone in the journey of the Mother Terasa
            Group of Institution at Pudukkottai.
          </p>
        </FadeUp>
      </section>

      {/* OUR PURPOSE */}
      <section className={styles["purpose-section"]}>
        <FadeUp className={styles["purpose-card"]}>
          <img
            src={purposeImg}
            alt="Mother Terasa Pudukottai purpose"
            className={styles["purpose-card__img"]}
          />
          <div className={styles["purpose-card__content"]}>
            <span className={styles["section-eyebrow"]}>Our Purpose</span>
            <h2>Mother Terasa College Of Physiotherapy</h2>
            <p>
              The establishment of Mother Terasa Physiotherapy College in
              2020 mark a significant milestone in the journey of the Mother
              Terasa Group of Institution at Illuppur, Pudukkottai, Tamil
              Nadu with a vision to offer standardized Education and clinical
              exposure in Physiotherapy. MTCP is constituent of Dr APJ Abdul
              Kalam Educational Charitable Trust.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* OUR VISION */}
      <section className={styles["vision-section"]}>
        <div className={styles["vision-section__inner"]}>
          <FadeUp direction="left" duration={850} className={styles["vision-card"]}>
            <h2>Our Vision</h2>
            <p>
              &ldquo;To ignite a global movement in physiotherapy education
              by cultivating bold, compassionate, and visionary professionals
              who redefine rehabilitation, elevate human potential, and lead
              the future of movement science with integrity, innovation, and
              impact.&rdquo;
            </p>
          </FadeUp>
          <FadeUp duration={850} className={styles["vision-section__img-wrap"]}>
            <img
              src={visionImg}
              alt="Mother Terasa Pudukottai campus building"
              className={styles["vision-section__img"]}
            />
          </FadeUp>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className={styles["mission-section"]}>
        <div className={styles["mission-section__inner"]}>
          <FadeUp duration={850} className={styles["mission-section__img-wrap"]}>
            <img
              src={missionImg}
              alt="Mother Terasa Pudukottai mission"
              className={styles["mission-section__img"]}
            />
          </FadeUp>
          <FadeUp direction="right" duration={850} className={styles["mission-card"]}>
            <h2>Our Mission</h2>
            <p>
              &ldquo;Our mission is to educate and empower future
              physiotherapists through excellence in evidence-based
              teaching, hands-on clinical training, and innovative research
              — fostering compassionate leaders committed to restoring
              movement, enhancing function, and transforming lives across
              diverse communities.&rdquo;
            </p>
          </FadeUp>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className={styles["leadership-section"]}>
        <FadeUp>
          <h2 className={`${styles["section-title"]} ${styles["section-title--light"]}`}>
            Leadership That Inspires Excellence
          </h2>
          <p className={`${styles["section-subtitle"]} ${styles["section-subtitle--light"]}`}>
            Our leadership is committed to fostering an environment where
            knowledge, innovation, and practical learning empower every
            student to succeed.
          </p>
        </FadeUp>

        <FadeUp className={styles["leader-card"]}>
          <div className={styles["leader-card__photo-wrap"]}>
            <img src={founderImg} alt="Mother Terasa Pudukottai founder Shri R. Chinnathambi" className={styles["leader-card__photo"]} />
            <p className={styles["leader-card__name"]}>Shri R.Chinnathambi</p>
            <p className={styles["leader-card__role"]}>Founder</p>
          </div>
          <div className={styles["leader-card__content"]}>
            <h3>Founder of Mother Terasa Educational &amp; Charitable Trust</h3>
            <p>
              Love cannot remain by itself - it has no meaning. Love has to
              be put into action, and that action is service – Mother
              Terasa.
            </p>
            <p>
              Our Mother Terasa Group of Institutions is committed to the
              philosophy that students in rural areas need to learn the
              basic of how to succeed in a global Capitalist Economy through
              their daily educational process. This educational process
              begins as early as kindergarten and extends through adult
              education. I feel a sense of honor, delight and a sacred
              responsibility to serve this rural community through quality
              education that makes the most formative period of growth and
              development in their lives. I pray that God, in His divine
              benevolence, continues to lead and guide this prestigious group
              of Institutions for generations to come.
            </p>
          </div>
        </FadeUp>

        <FadeUp className={`${styles["leader-card"]} ${styles["leader-card--reverse"]}`}>
          <div className={styles["leader-card__content"]}>
            <h3>Chairman of Mother Terasa Educational &amp; Charitable Trust</h3>
            <p>
              Mother Terasa Group of Institutions has been pioneering an
              innovative model of career-ready courses and higher education
              through its new-age programs. We have been delivering industry
              relevant, full-time programs in diploma, undergraduate and
              postgraduate levels that suits the fast-growing sectors of the
              country.
            </p>
            <p>
              The 21st century brings with it a highly dynamic and unpredictable work environment,
              consequently necessitating a huge shift in the education model. In alignment with
              exponential changes in the higher education, the Mother Terasa Group of institutions
              continues to strengthen its academic portfolio through an intensive research of
              studying best practices across top global institutes and demonstrates exemplary
              standards with cutting-edge technology-enabled programs, state-of-the-art architecture,
              and multiple facets of student centered events as its defining characters.
            </p>
            <p>
              Enabling productive employment remains its primary focus and
              is being realized through conduction of large-scale
              recruitment drive inviting more than 100 companies and a
              record breaking 1000 plus employment to the fresh graduates of
              Pudukkottai District every year.
            </p>
            <p>
              All of us do not have equal talent. But all of us have an
              equal opportunity to develop our talents – Abdul Kalam.
            </p>
          </div>
          <div className={styles["leader-card__photo-wrap"]}>
            <img
              src={chairmanImg}
              alt="Mother Terasa Pudukottai chairman Mr. R.C. Uthayakumar"
              className={`${styles["leader-card__photo"]} ${styles["leader-card__photo--chairman"]}`}
            />
            <p className={styles["leader-card__name"]}>Mr.R.C.Uthayakumar B.A</p>
            <p className={styles["leader-card__role"]}>Chairman</p>
          </div>
        </FadeUp>

        <FadeUp className={styles["leader-card"]}>
          <div className={styles["leader-card__photo-wrap"]}>
            <img src={principalImg} alt="Mother Terasa Pudukottai principal Prof. R. Anbu Dhanabalan" className={styles["leader-card__photo"]} />
            <p className={styles["leader-card__name"]}>Prof. R. Anbu Dhanabalan</p>
            <p className={styles["leader-card__role"]}>Principal</p>
          </div>
          <div className={styles["leader-card__content"]}>
            <h3>Principal of Mother Terasa College Of Physiotherapy</h3>
            <p>
              Welcome to our esteemed physiotherapy college, where we
              are dedicated to shaping the next generation of
              physiotherapists who will make a meaningful impact in the
              lives of individuals and communities. Our mission is to
              provide a supportive and inclusive learning environment that
              fosters academic excellence, clinical competence, and
              professional growth.
            </p>
            <p>
              We believe that physiotherapy is not just a profession, but a
              calling that requires compassion, empathy, and a deep
              understanding of the human body. Our faculty comprises
              experienced physiotherapists who are passionate about teaching,
              research, and clinical practice. We are committed to
              delivering a curriculum that is evidence-based, innovative,
              and relevant to the needs of the healthcare industry.
            </p>
            <p>
              Our students engage in hands-on learning experiences,
              participate in research projects, and have opportunities to
              interact with renowned experts in the field. We take pride in
              our graduates who have gone on to become leaders in
              physiotherapy practice, research, and education.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* CTA */}
      <Cta />
    </main>
  );
}
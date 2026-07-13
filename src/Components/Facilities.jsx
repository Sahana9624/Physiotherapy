import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Facilities.module.css";
import Cta from "./Cta";

import heroImg from "../assets/images/facilities-hero.jpg";
import amenitiesImg from "../assets/images/facilities-amenities.jpg";

import anatomyImg from "../assets/images/lab-anatomy.png";
import physiologyImg from "../assets/images/lab-physiology.png";
import exerciseImg from "../assets/images/lab-exercise.png";
import computerImg from "../assets/images/lab-computer.png";
import neuroImg from "../assets/images/lab-neuro.jpg";
import electrotherapyImg from "../assets/images/lab-electrotherapy.png";
import canteenImg from "../assets/images/facility-canteen.png";
import transportImg from "../assets/images/facility-transport.png";
import hostelImg from "../assets/images/facility-hostel.jpg";
import libraryImg from "../assets/images/facility-library.png";

const quickLinks = [
  "Modern Labs",
  "Physio Labs",
  "Canteen",
  "Digital Library",
  "Sports and Games",
];

const amenityStats = [
  { value: "10+", label: "Modern Facilities" },
  { value: "5+", label: "Advanced Labs" },
  { value: "10+", label: "Expert Faculties" },
];

const facilities = [
  {
    title: "Electrotherapy Lab",
    desc: "Electrotherapy includes a range of treatments using electricity to reduce pain, improve circulation, repair tissues, strengthen muscles, and promote bone growth, leading to improvements in physical functioning. Electrotherapy has been used to address chronic pain and chronic fatigues in general, as well as the spacious and well-ventilated lab in the college provide students a learning environment so they can improve their skills. It includes all the modern modalities that are used to relieve pain. The lab is well equipped with equipment's like",
    img: electrotherapyImg,
  },
  {
    title: "Anatomy Lab",
    desc: "The college maintains a laboratory for anatomy offering state-of-the-art facilities to the students for mastering the knowledge of the human body. Students are guided through the intricacies of anatomy with comprehensive support. This is enhanced by a variety of specimens, models, and computer-aided learning, completing the educational experience.",
    img: anatomyImg,
  },
  {
    title: "Physiology Lab",
    desc: "College has well equipped lab to study the intricacies of function of the body and to teach the students regarding the various biochemical, electrophysiological analysis using sophisticated instruments.",
    img: physiologyImg,
  },
  {
    title: "Exercise Therapy Lab",
    desc: "The Exercise Therapy Lab is equipped with modern rehabilitation equipment such as gait re-education units, strength training stations, balance and posture rehab setups, and movement therapy units. Students are trained in various exercise techniques and are encouraged to practice on each other, helping them build confidence in applying their skills. The lab also prepares students to educate patients and families on promoting health, fitness, and quality of life across all age groups. Exercise therapy uses specific movements to enhance body function, relieve symptoms, improve mobility, and support overall wellness. It is also used in managing pain and preventive care. Equipment includes: Parallel Bars with Postural Mirror, Shoulder Wheel, Pulley, Suspension Apparatus, Delorme's Table, Treadmill, Twister, Multi Exercise Bed, Swiss Ball, Medicine Ball, TheraBands, Hand Rehab Unit, Walking Aids, Wrist and Hand Exerciser, Ankle Exerciser, and more.",
    img: exerciseImg,
  },
  {
    title: "Computer Lab",
    desc: "Computer Centre provides the students with hands on experience in state-of-the-art technology. The college has well equipped computer lab with Pentium based computers and latest software required for teaching and research.",
    img: computerImg,
  },
  {
    title: "Neuro Lab",
    desc: "The college is running Neuro Developmental therapy and Sensory Integration Unit for the Cerebral Palsy and other exceptional children inside the campus. The college is serving these children purely on a charitable basis.",
    img: neuroImg,
  },

  {
    title: "Canteen",
    desc: "The homely atmosphere and aroma of delicious food permeates the air as they eat, drink and chat. It remains a focal place of the students for rest and refreshment.",
    img: canteenImg,
  },
  {
    title: "Transport",
    desc: "The college provides the conveyance for the students coming from in and around Pudukkottai & Neighboring district. College takes the students to the hospital for clinic training.",
    img: transportImg,
  },
  {
    title: "Hostel",
    desc: "Complete, hygienic and fully furnished hostel is provided by the management for both Boys and Girls separately with in the campus. The rooms are safe, secure, clean and airy. Students enjoy delicious, quality and homely vegetarian and non-vegetarian food. Menu is prepared to satisfy the taste of all students. Their stay in the hostel enables them to imbibe a different life style and involve in activities such as yoga, meditation, sports etc., suiting to their individual taste and preferences.",
    img: hostelImg,
  },
  {
    title: "Library",
    desc: "Our Institution has a well equipped and a comprehensive library, which offers students with all the reference material, they require for an in-depth understanding of their specific subjects. The library also subscribes for International and Indian journals on the relevant subjects.",
    img: libraryImg,
  },
];

export default function Facilities() {
  return (
    <main className={styles.facilities}>
      {/* HERO */}
      <section className={styles.hero}>
        <img src={heroImg} alt="Faculty demonstrating clinical equipment" className={styles["hero__bg"]} />
        <div className={styles["hero__overlay"]} />
        <div className={styles["hero__inner"]}>
          <div className={styles["hero__content"]}>
            <h1>
              Facilities of Mother Terasa College
            <span> of Physiotherapy</span>
            </h1>
            <p>
              Experience a modern learning environment equipped with advanced
              laboratories, clinical training facilities to support academic
              excellence and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK LINKS BAR */}
      <nav className={styles["quicklinks"]} aria-label="Facility categories">
        <div className={styles["quicklinks__track"]}>
          {[...quickLinks, ...quickLinks].map((label, idx) => (
            <span key={`track1-${label}-${idx}`} className={styles["quicklinks__item"]}>
              {label}
            </span>
          ))}
        </div>
        <div className={styles["quicklinks__track"]}>
          {[...quickLinks, ...quickLinks].map((label, idx) => (
            <span key={`track2-${label}-${idx}`} className={styles["quicklinks__item"]}>
              {label}
            </span>
          ))}
        </div>
      </nav>

      {/* STUDENT AMENITIES */}
      <section className={styles["amenities-section"]}>
        <div className={styles["amenities-card"]}>
          <img src={amenitiesImg} alt="Faculty demonstrating equipment to a student" className={styles["amenities-card__img"]} />
          <div className={styles["amenities-card__content"]}>
            <span className={styles["section-eyebrow"]}>Student Amenities</span>
            <h2>Comprehensive Facilities</h2>
            <p>
              Mother Terasa College of Physiotherapy provides students with a
              comprehensive list of features and facilities to cater to our
              student's learning needs and comfort during their years with
              us. We believe in creating an environment that is conducive
              for learning and development to complement our academic
              progammes.
            </p>
            <div className={styles["amenities-card__stats"]}>
              {amenityStats.map((s) => (
                <div className={styles["amenities-stat"]} key={s.label}>
                  <span className={styles["amenities-stat__value"]}>{s.value}</span>
                  <span className={styles["amenities-stat__label"]}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY LIST */}
      <section className={styles["list-section"]}>
        <div className={styles["list-section__heading"]}>
          <h2 className={styles["section-title"]}>Comprehensive Facilities</h2>
          <p className={styles["section-subtitle"]}>
            Gain real-world clinical exposure and hands-on training through
            advanced labs, simulations, and healthcare-based practical
            sessions.
          </p>
        </div>

        <div className={styles["facility-rows"]}>
          {facilities.map((f, idx) => (
            <div
              id={f.title.toLowerCase().replace(/\s+/g, "-")}
              key={f.title}
              className={`${styles["facility-row"]} ${idx % 2 === 0 ? styles["facility-row--reverse"] : ""
                }`}
            >
              <img src={f.img} alt={f.title} className={styles["facility-row__img"]} />
              <div className={styles["facility-row__content"]}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </main>
  );
}
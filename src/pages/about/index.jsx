"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import styles from "./style.module.scss";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {}, [isInView]);
  return (
    <motion.div
      className={styles.about}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className={styles.aboutGrid}>
        <div className={styles.aboutGridInfo}>
          <h1>ABOUT</h1>
          <p className={styles.aboutGridInfoText}>
            Hello! My name is <span>Andrew R. Villalon</span>, and I have almost 2
            years experience in Frontend Web Development. My interest in web
            development was sparked in 2022 when I created my first landing page
            website built using HTML and CSS.
          </p>

          <p className={styles.aboutGridInfoText}>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className={styles.aboutGridInfoList}>
            <li className={styles.aboutGridInfoListItem}>Next.js</li>
            <li className={styles.aboutGridInfoListItem}>React</li>
            <li className={styles.aboutGridInfoListItem}>Javascript (ES6+)</li>
            <li className={styles.aboutGridInfoListItem}>Typescript</li>
            <li className={styles.aboutGridInfoListItem}>Tailwind</li>
          </ul>
        </div>
        <div className={styles.aboutGridPhoto}>
          <div className={styles.overlay}></div>
          <div className={styles.overlayBorder}></div>
          <div className={styles.aboutGridPhotoContainer}>
            <Image src="/images/andrew.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

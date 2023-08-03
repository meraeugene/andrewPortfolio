"use client";

import styles from "./style.module.scss";

import Button from "@/components/button";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className={styles.hero}>
      <motion.h1
        className={styles.heroTitle}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi, my name is
      </motion.h1>
      <motion.h2
        className={styles.heroTitleLarge}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Andrew R. Villalon.
      </motion.h2>
      <motion.h3
        // className="hero-title-large hero-title-sub"
        className={styles.heroTitleSub}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        Front-End React Developer
      </motion.h3>
      <motion.p
        className={styles.heroText}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        Explore my professional front-end web developer portfolio, showcasing my
        expertise in
        <span className="purple"> HTML, CSS, JavaScript, React,</span> and
        <span className="purple"> TypeScript</span>. With a focus on visually
        stunning and user-friendly websites, I strive to deliver seamless online
        experiences that impress both users and clients.
      </motion.p>
      <motion.div
        className={styles.heroButton}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button text="Hire me" />
      </motion.div>
    </div>
  );
}

export default Hero;

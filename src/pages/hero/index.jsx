"use client";

import styles from "./style.module.scss";

import Button from "@/components/button";
import React from "react";
function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>Hi, my name is</h1>
      <h2 className={styles.heroTitleLarge}>Andrew R. Villalon.</h2>
      <h3
        // className="hero-title-large hero-title-sub"
        className={styles.heroTitleSub}
      >
        Full Stack MERN Developer
      </h3>
      <p className={styles.heroText}>
        Explore my professional front-end web developer portfolio, showcasing my
        expertise in
        <span className="purple"> Mongoose</span>,{" "}
        <span className="purple">Express</span>,{" "}
        <span className="purple">React</span>,{" "}
        <span className="purple">Node</span> and
        <span className="purple"> TypeScript</span>. With a focus on visually
        stunning and user-friendly websites, I strive to deliver seamless online
        experiences that impress both users and clients.
      </p>
      <div className={styles.heroButton}>
        <Button text="Hire me" />
      </div>
    </div>
  );
}

export default Hero;

"use client";
import ScrollToTop from "react-scroll-to-top";

import styles from "./style.module.scss";
import SocialIcons from "@/components/socialicons";
import Email from "@/components/email";
import { MaskText } from "@/components/textMaskAnimation";
import Hero from "@/pages/hero";
import Project from "@/pages/projects";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import "./page.module.css";

export default function Index() {
  return (
    <>
      <ScrollToTop
        smooth
        top={1000}
        className={styles.scrollUp}
        viewBox="0 0 24 24"
        svgPath="M4.5 15.75l7.5-7.5 7.5 7.5"
        color="#9d00ff"
      />

      <SocialIcons />
      <Email />
      <main className={styles.main}>
        <Hero />
        <div className={styles.container}>
          <MaskText />
        </div>
        <Project id="projects" />
        <About id="about" />
        <Contact id="contact" />
      </main>
    </>
  );
}

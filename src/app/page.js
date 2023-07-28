import styles from "./style.module.scss";
import SocialIcons from "@/components/socialicons";
import Email from "@/components/email";
import Hero from "@/sections/hero";
import Project from "@/sections/projects";
import About from "@/sections/about";
import { MaskText } from "@/components/textMaskAnimation";
import Contact from "@/sections/contact";

export default function Index() {
  return (
    <div className="app">
      <SocialIcons />
      <Email />
      <main className={styles.main}>
        <Hero />
        <div className={styles.container}>
          <MaskText />
        </div>
        <Project id="project" />
        <About id="about" />
        <Contact id="contact" />
      </main>
    </div>
  );
}

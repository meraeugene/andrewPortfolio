import styles from "./style.module.scss";
import SocialIcons from "@/components/socialicons";
import Email from "@/components/email";
import { MaskText } from "@/components/textMaskAnimation";
import Hero from "@/pages/hero";
import Project from "@/pages/projects";
import About from "@/pages/about";
import Contact from "@/pages/contact";

export default function Index() {
  return (
    <>
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
    </>
  );
}

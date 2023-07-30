"use client";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fixedPart = "From Basic Landing Pages to ";

const phrases = [
  "From Figma into Fully Functional Website.",
  "Builds Responsive Website and Amazing UI Design.",
];

export function MaskText() {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.08 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      <div className={styles.lineMask}>
        <motion.p
          custom={0}
          variants={animation}
          initial="initial"
          animate={inView ? "enter" : ""}
        >
          <span>▹</span>
          {fixedPart}
          <span>Dynamic Web Applications</span>.
        </motion.p>
      </div>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index + 1}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              <span>▹</span>
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

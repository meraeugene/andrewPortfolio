import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { mountAnim, rotateX } from "../anim";
import Image from "next/image";
import gsap from "gsap";
import { Link as ScrollLink } from "react-scroll";
import { useRef } from "react";

export default function link({ data, index, closeMenu }) {
  const { title, description, images } = data;
  const outer = useRef(null);
  const inner = useRef(null);

  const manageMouseEnter = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: "-100%" });
      gsap.set(inner.current, { top: "100%" });
    } else {
      gsap.set(outer.current, { top: "100%" });
      gsap.set(inner.current, { top: "-100%" });
    }
    gsap.to(outer.current, { top: "0%", duration: 0.3 });
    gsap.to(inner.current, { top: "0%", duration: 0.3 });
  };

  const manageMouseLeave = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: "-100%", duration: 0.3 });
      gsap.to(inner.current, { top: "100%", duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: "100%", duration: 0.3 });
      gsap.to(inner.current, { top: "-100%", duration: 0.3 });
    }
  };

  return (
    <motion.div
      onMouseEnter={(e) => {
        manageMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        manageMouseLeave(e);
      }}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className={styles.el}
    >
      <ScrollLink
        to={data.title.toLowerCase()} // Assumes that the section ids match the title names (e.g., "projects", "about", "contact")
        spy={true}
        smooth={true}
        offset={-25} // Adjust this offset as needed to ensure proper positioning
        duration={200} // Adjust the duration for the smooth scroll animation
        onClick={() => {
          closeMenu();
        }}
      >
        {title}
      </ScrollLink>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className={styles.container}>
                <div className={styles.imageContainer}>
                  <Image src={`/images/${images[0]}`} fill aalt="image" />
                </div>
                <p>{description}</p>
                <div className={styles.imageContainer}>
                  <Image src={`/images/${images[1]}`} fill alt="image" />
                </div>
                <p>{description}</p>
                <div className={styles.imageContainer}>
                  <Image src={`/images/${images[2]}`} fill alt="image" />
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";
import styles from "./style.module.scss";
import Link from "./link";

import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

const menu = [
  {
    title: "Project",
    description: "To See Everything",
    images: ["projects1.png", "projects2.png", "projects3.png"],
  },
  {
    title: "About",
    description: "To Learn Everything",
    images: ["andrew.jpg", "andrew.jpg", "andrew.jpg"],
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ["contact1.png", "contact2.png", "projects4.png"],
  },
];

export default function index({ closeMenu }) {
  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return (
            <Link data={el} index={index} key={index} closeMenu={closeMenu} />
          );
        })}
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}
      >
        <a href="https://www.facebook.com/villalonandrew">
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/andrewxvxv/">
          <FiInstagram />
        </a>
        <a href="https://github.com/meraeugene">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/username/">
          <FiLinkedin />
        </a>
      </motion.div>
    </motion.div>
  );
}

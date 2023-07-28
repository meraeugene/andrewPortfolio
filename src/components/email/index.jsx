"use client";

import styles from "./style.module.scss";
import React from "react";
import { motion } from "framer-motion";
function Email() {
  return (
    <motion.div
      className={styles.email}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <a
        href="mailto:villalon.andrew123@gmail.com"
        className={styles.emailLink}
      >
        villalon.andrew123@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;

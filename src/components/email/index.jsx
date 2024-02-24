"use client";

import styles from "./style.module.scss";
import React from "react";
function Email() {
  return (
    <div className={styles.email}>
      <a
        href="mailto:villalon.andrew123@gmail.com"
        className={styles.emailLink}
      >
        villalon.andrew123@gmail.com
      </a>
    </div>
  );
}

export default Email;

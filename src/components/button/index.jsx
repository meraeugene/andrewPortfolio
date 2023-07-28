"use client";

import styles from "./styles.module.scss";

import React from "react";

function Button({ text }) {
  return <div className={styles.btn}>{text}</div>;
}

export default Button;

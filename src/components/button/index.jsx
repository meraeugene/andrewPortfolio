import styles from "./styles.module.scss";
import React from "react";
import { scroller } from "react-scroll"; // Import the scroller object

function Button({ text }) {
  const handleClick = () => {
    // Smoothly scroll to the #contact section
    scroller.scrollTo("contact", {
      spy: true,
      smooth: true,
      offset: -25,
      duration: 200,
    });
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <span className="text">{text}</span>
      <span>I'm worthy</span>
    </button>
  );
}

export default Button;

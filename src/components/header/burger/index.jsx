"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export default function BurgerMenu({ openMenu }) {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      // Hide the button if the screen width is less than or equal to 428px
      if (window.innerWidth <= 855) {
        setIsButtonVisible(currentScrollPos === 0);
      }
      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {isButtonVisible && (
        <div
          onClick={() => {
            openMenu();
          }}
          className={styles.button}
        >
          <div className={styles.background}></div>
          <svg
            width="56"
            height="7"
            viewBox="0 0 56 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="56"
              y1="0.5"
              x2="4.37114e-08"
              y2="0.500005"
              stroke="white"
            />
            <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
          </svg>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            Menu
          </motion.p>
        </div>
      )}
    </>
  );
}

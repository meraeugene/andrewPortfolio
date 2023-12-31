"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Link from "next/link";

export default function Double({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    // Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    // Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth <= 855;
      if (isMobile) {
        window.removeEventListener("mousemove", manageMouseMove);
      } else {
        window.addEventListener("mousemove", manageMouseMove);
      }
    }

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.double}
    >
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Link
            href={projects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <Image
              src={`/images/${projects[0].src}`}
              fill={true}
              alt={"image"}
            />
          </Link>
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
          <div className={styles.technologies}>
            {projects[0].technologies.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>
          <Link
            href={projects[0].source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.source}
          >
            {truncateText(projects[0].source, 35)}
          </Link>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Link
            href={projects[1].link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <Image
              src={`/images/${projects[1].src}`}
              fill={true}
              alt={"image"}
            />
          </Link>
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
          <div className={styles.technologies}>
            {projects[1].technologies.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>
          <Link
            href={projects[1].source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.source}
          >
            {truncateText(projects[1].source, 35)}
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

function Contact() {
  return (
    <motion.div
      className={styles.contact}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className={styles.title}>CONTACT</h2>
      <p className={styles.text}>
        My contact portfolio is always open for inquiries and potential job
        opportunities. If you are interested in discussing potential
        collaborations or hiring me, please don't hesitate to reach out. I look
        forward to engaging in a fruitful conversation with you!
      </p>
      <form
        action="https://formsubmit.co/villalon.andrew123@gmail.com"
        method="POST"
      >
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea name="Message" rows={6} placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </motion.div>
  );
}

export default Contact;

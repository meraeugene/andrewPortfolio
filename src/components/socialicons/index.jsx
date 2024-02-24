"use client";

import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/meraeugene",
    },
    {
      name: "Facebook",
      icon: <FiFacebook />,
      link: "https://www.facebook.com/villalonandrew",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/username/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/andrewxvxv/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/",
    },
  ];
  return (
    <div className={styles.socialIcons}>
      <ul className={styles.socialIconsList}>
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className={styles.socialIconsListItem}>
            <Link
              href={link}
              className={styles.socialIconsListItemLink}
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;

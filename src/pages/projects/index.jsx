import React from "react";
import styles from "./style.module.scss";
import Double from "@/components/double";
import { projects } from "@/data/data";

const Project = ({ id }) => {
  return (
    <div id={id} className={styles.project}>
      <h1 className={styles.projectTitle}>PROJECTS</h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} />
        <Double projects={[projects[6], projects[7]]} reversed={true} />
        <Double projects={[projects[8], projects[9]]} />
      </div>
    </div>
  );
};

export default Project;

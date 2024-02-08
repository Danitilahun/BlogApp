// components/HeroSection.js
import React from "react";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to My Blog</h1>
        <p>
          Exploring the worlds of coding, travel, and more through in-depth
          articles and guides.
        </p>
        <a href="#blog" className={styles.ctaButton}>
          Start Reading
        </a>
      </div>
    </div>
  );
};

export default Featured;

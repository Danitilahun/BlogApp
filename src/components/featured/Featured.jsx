import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Daniel here!</b> Explore Ideas, Embrace Insight. Elevate Your
        Journey with Every Read.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/pr.webp" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Developer&apos;s Notes: Navigating the Path to Excellence
          </h1>
          <p className={styles.postDesc}>
            In the ever-evolving realm of software development, every line of
            code tells a story, and each bug conquered is a lesson learned.
            Developer&apos;s Notes: Navigating the Path to Excellence is not
            just a blog; it&apos;s a collection of insights, experiences
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;

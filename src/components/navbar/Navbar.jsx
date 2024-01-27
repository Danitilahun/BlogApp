import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="/">
          <div
            style={{ width: "200px", height: "100px", position: "relative" }}
          >
            <Image
              src="/572.png"
              alt="My Image Alt Text"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      {/* <div className={styles.logo}>WanderWisdom</div> */}
      <div className={styles.links}>
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

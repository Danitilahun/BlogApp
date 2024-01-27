"use client";
import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { FaBlogger } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="/">
          <FaBlogger
            style={{
              fontSize: "3em",
              color: theme !== "dark" ? "black" : "white",
            }}
          />
        </Link>
      </div>

      <div className={styles.links}>
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

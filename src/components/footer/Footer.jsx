"use client";
import React, { useContext } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaBlogger } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Link href="/">
            <FaBlogger
              style={{
                fontSize: "3em",
                color: theme !== "dark" ? "black" : "white",
              }}
            />
          </Link>
        </div>
        <p className={styles.desc}>
          Thank you for stepping into the world of our thoughts. As you journey
          through our blog, may each word inspire, educate, and ignite your
          curiosity. Stay connected for more insights and stories – your
          feedback is the heartbeat of our narrative. Happy reading!
        </p>
        {/* <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div> */}
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="#blog">Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/https://github.com/Danitilahun">Github</Link>
          <Link href="/http://www.linkedin.com/in/daniel-tilahun-017878264/">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

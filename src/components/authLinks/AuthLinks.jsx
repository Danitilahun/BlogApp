"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  console.log(status);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link
            href="/"
            onClick={() => {
              setOpen(false);
            }}
          >
            Homepage
          </Link>

          {status === "unauthenticated" ? (
            <Link
              href="/login"
              onClick={() => {
                setOpen(false);
              }}
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href="/write"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Write
              </Link>
              <span
                className={styles.lin}
                onClick={() => {
                  setOpen(false);
                  signOut();
                }}
              >
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

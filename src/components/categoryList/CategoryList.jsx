"use client";
import React, { useState, useEffect } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    return Array.isArray(data) ? data : []; // Ensure data is always an array
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return an empty array in case of error
  }
};

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await getData();
      setData(categoriesData);
    };

    fetchData();
  }, []);

  return (
    <div id="blog" className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((item) => (
          <Link href={`/blog?cat=${item.slug}`} key={item._id}>
            <a className={`${styles.category} ${styles[item.slug]}`}>
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {item.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

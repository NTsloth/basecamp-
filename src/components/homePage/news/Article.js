import React, { useState, useEffect } from "react";
import ScrollComponent from "../../UI/ScrollComponent";
import styles from "./News.module.css";

const Article = () => {
  const [displayedContent, setDisplayedContent] = useState([]);
  const content = [
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },

    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      img: "/images/moon.jpeg",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
  ];

  return (
    <div className={`${styles.news} ${styles.article}`}>
      <h1>პოპულარული</h1>
      <div className={styles.scrollContainer}>
        <ScrollComponent content={content} />
      </div>
    </div>
  );
};

export default Article;

import React, { useState, useEffect } from "react";
import ScrollComponent from "../../UI/ScrollComponent";
import styles from "./News.module.css";

const News = () => {
  const [displayedContent, setDisplayedContent] = useState([]);
  const content = [
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "7:30",
      span: "02.01.2023 ",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },

    {
      time: "11:00 AM",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "11:00 AM",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "11:00 AM",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "11:00 AM",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
    {
      time: "11:00 AM",
      text: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
    },
  ];

  return (
    <div className={styles.news}>
      <h1>ყველა სიახლე</h1>
      <div className={styles.scrollContainer}>
        <ScrollComponent type={"scroll"} content={content} />
      </div>
    </div>
  );
};

export default News;

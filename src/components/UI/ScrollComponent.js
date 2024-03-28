import React from "react";
import styles from "./ScrollComponent.module.css";

const ScrollComponent = ({ content }) => {
  return (
    <div style={{ overflowY: "scroll" }}>
      {content.map((item, index) => (
        <div key={index} className={styles.scrollWrapper}>
          {item.hasOwnProperty("time") ? (
            <>
              <h3 className={`${styles.date} flex align-center`}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1801_512)">
                    <path
                      d="M9.99199 1.6665C5.39199 1.6665 1.66699 5.39984 1.66699 9.99984C1.66699 14.5998 5.39199 18.3332 9.99199 18.3332C14.6003 18.3332 18.3337 14.5998 18.3337 9.99984C18.3337 5.39984 14.6003 1.6665 9.99199 1.6665ZM10.0003 16.6665C6.31699 16.6665 3.33366 13.6832 3.33366 9.99984C3.33366 6.3165 6.31699 3.33317 10.0003 3.33317C13.6837 3.33317 16.667 6.3165 16.667 9.99984C16.667 13.6832 13.6837 16.6665 10.0003 16.6665ZM10.417 5.83317H9.16699V10.8332L13.542 13.4582L14.167 12.4332L10.417 10.2082V5.83317Z"
                      fill="#585EE3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1801_512">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {item.time} <span>{item.span}</span>
              </h3>
              <p>{item.text}</p>
            </>
          ) : (
            <>
              <div className={styles.titleWrapper}>
                <h3>{item.title}</h3>
                <div className={styles.articleContent}>
                  <img src={item.img} alt={item.title} />
                  <p>{item.text}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScrollComponent;

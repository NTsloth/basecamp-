import React from "react";
import MainSlider from "./mainSlider/MainSlider";
import News from "./news/News";
import Slider from "../UI/Slider";
import styles from "./HomePage.module.css";
import Article from "./news/Article";

const HomePage = () => {
  return (
    <div>
      <div className="containerWrapper">
        <div
          className={`grid gap-8 md:grid-cols-4 sm:grid-cols-1 ${styles.gridWrapper}`}
        >
          <div className="md:col-span-3 sm:col-span-full">
            <MainSlider className="h-full" />
          </div>
          <div className="md:col-span-1 sm:col-span-full">
            <News className="h-full" />
          </div>
        </div>
        <div
          className={`${styles.sliderContainer} ${styles.gridWrapper} grid gap-8 md:grid-cols-4 sm:grid-cols-1`}
        >
          <div className="md:col-span-3 sm:col-span-full">
            <Slider className={styles.slider} />
            <div>heyyyy</div>
          </div>
          <div className="md:col-span-1 sm:col-span-full">
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

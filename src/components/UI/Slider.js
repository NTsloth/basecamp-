import React, { useState, useRef } from "react";

import "swiper/css";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./Slider.module.css";
import Cart from "./Cart";

SwiperCore.use([Pagination, Navigation]);

const SliderContent = [
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
  {
    img: "/images/pic.jpeg",
    date: "12.08.2023",
    tag: "პოლიტიკა",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
    teaser:
      "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
  },
];

const buttonSliderContent = [
  {
    img: "/images/image.jpeg",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ",
  },
  {
    img: "/images/image.jpeg",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ",
  },
  {
    img: "/images/image.jpeg",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ",
  },
  {
    img: "/images/image.jpeg",
    text: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ",
  },
];

function SwiperSlider() {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      lazy="true"
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      className={styles.mySwiper}
      spaceBetween={30}
    >
      {SliderContent.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={styles.buttons}>
            <div
              className={`${styles.prev} custom-prev`}
              style={{ left: "10px", top: "50%" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0303 7.46967C14.7374 7.17678 14.2626 7.17678 13.9697 7.46967L9.96967 11.4697C9.67678 11.7626 9.67678 12.2374 9.96967 12.5303L13.9697 16.5303C14.2626 16.8232 14.7374 16.8232 15.0303 16.5303C15.3232 16.2374 15.3232 15.7626 15.0303 15.4697L11.5607 12L15.0303 8.53033C15.3232 8.23744 15.3232 7.76256 15.0303 7.46967Z"
                  fill="#1D2D35"
                />
              </svg>
            </div>
            <div
              className={`${styles.next} custom-next`}
              style={{ right: "10px", top: "50%" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.96967 7.46967C9.26256 7.17678 9.73744 7.17678 10.0303 7.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L10.0303 16.5303C9.73744 16.8232 9.26256 16.8232 8.96967 16.5303C8.67678 16.2374 8.67678 15.7626 8.96967 15.4697L12.4393 12L8.96967 8.53033C8.67678 8.23744 8.67678 7.76256 8.96967 7.46967Z"
                  fill="#1D2D35"
                />
              </svg>
            </div>
          </div>
          <img
            style={{ borderRadius: "20px" }}
            src={slide.img}
            alt={`Slide ${index + 1}`}
          />
          <div className={styles.sliderContent}>
            <div className="flex align-center">
              <p>{slide.date}</p>
              <p>{slide.tag}</p>
            </div>
            <p
              className="text-24 text-main leading-40"
              style={{ fontSize: "24px" }}
            >
              {slide.text}
            </p>
            <p className="text-16 text-teaser">{slide.teaser}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
function ButtonSlider({ buttonSliderContent }) {
  return (
    <div className={styles.buttonSwiper}>
      <div className={styles.swiperContent}>
        <p>ცნობილი ფაქტები</p>
        <div className={styles.swiperButtons}>
          <div className={`${styles.prev} custom-prev-button`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0303 7.46967C14.7374 7.17678 14.2626 7.17678 13.9697 7.46967L9.96967 11.4697C9.67678 11.7626 9.67678 12.2374 9.96967 12.5303L13.9697 16.5303C14.2626 16.8232 14.7374 16.8232 15.0303 16.5303C15.3232 16.2374 15.3232 15.7626 15.0303 15.4697L11.5607 12L15.0303 8.53033C15.3232 8.23744 15.3232 7.76256 15.0303 7.46967Z"
                fill="#1D2D35"
              />
            </svg>
          </div>
          <div className={`${styles.next} custom-next-button`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.96967 7.46967C9.26256 7.17678 9.73744 7.17678 10.0303 7.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L10.0303 16.5303C9.73744 16.8232 9.26256 16.8232 8.96967 16.5303C8.67678 16.2374 8.67678 15.7626 8.96967 15.4697L12.4393 12L8.96967 8.53033C8.67678 8.23744 8.67678 7.76256 8.96967 7.46967Z"
                fill="#1D2D35"
              />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        breakpoints={{
          1900: { spaceBetween: 22, slidesPerView: 2.5 },
          1023: { spaceBetween: 22, slidesPerView: 2.7 },
          767: { spaceBetween: 16, slidesPerView: 1.7 },
          0: { spaceBetween: 16, slidesPerView: 1.2 },
        }}
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
      >
        {buttonSliderContent.map((item, index) => (
          <SwiperSlide key={index}>
            <Cart buttonSliderContent={[item]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
function Slider({ type }) {
  return (
    <div className=" mx-auto">
      {type === "swiper" ? (
        <SwiperSlider />
      ) : (
        <ButtonSlider buttonSliderContent={buttonSliderContent} />
      )}
    </div>
  );
}

export default Slider;

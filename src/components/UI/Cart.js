import React from "react";
import styles from "./Cart.module.css";

const Cart = ({ buttonSliderContent }) => {
  return (
    <div>
      {buttonSliderContent.map((item, index) => (
        <div key={index} className={styles.cart}>
          <img src={item.img} alt="Slide" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

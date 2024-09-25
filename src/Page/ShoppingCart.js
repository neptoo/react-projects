import React from "react";

import "../index.css";
import styles from "./14/index14.module.css";

import Navbar from "./14/Navbar";
import CartContainer from "./14/CartContainer";

const ShoppingCart = () => {
  return (
    <>
      <Navbar styles={styles} />
      <CartContainer styles={styles} />
    </>
  );
};

export default ShoppingCart;

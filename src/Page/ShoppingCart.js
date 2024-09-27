import React from "react";

import "../index.css";
import styles from "./14/index14.module.css";

import Navbar from "./14/Navbar";
import CartContainer from "./14/CartContainer";

import { useGlobalContext } from "../contexts";

const ShoppingCart = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className={styles["loading"]}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Navbar styles={styles} />
      <CartContainer styles={styles} />
    </>
  );
};

export default ShoppingCart;

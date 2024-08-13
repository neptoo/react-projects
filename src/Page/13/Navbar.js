import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../contexts";
import styles from "./index13.module.css";

const Navbar = () => {
  const { openSidebar_13, openSubmenu_13, closeSubmenu_13 } =
    useGlobalContext();
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <img src={logo} alt="logo" className={styles["nav-logo"]} />
          <button
            className={[styles["btn"], styles["toggle-btn"]].join(" ")}
            onClick={openSidebar_13}
          >
            <FaBars />
          </button>
        </div>
        <ul className={styles["nav-links"]}>
          <li>
            <button className={styles["link-btn"]}>products</button>
          </li>
          <li>
            <button className={styles["link-btn"]}>developers</button>
          </li>
          <li>
            <button className={styles["link-btn"]}>company</button>
          </li>
        </ul>
        <button className={[styles["btn"], styles["signin-btn"]].join(" ")}>
          sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

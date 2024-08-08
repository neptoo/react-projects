import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

import styles from "./index12.module.css";

import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    // ${styles["show-sidebar"]}
    <aside
      className={`${styles["sidebar"]} ${
        isSidebarOpen ? styles["show-sidebar"] : ""
      } }`}
    >
      <div className={styles["sidebar-header"]}>
        <img src={logo} alt="logo" className={styles["logo"]} />
        <button className={styles["close-btn"]} onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className={styles["links"]}>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={styles["social-icons"]}>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

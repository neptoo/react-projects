import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "../../contexts";
import styles from "./index13.module.css";

const Sidebar = () => {
  const { isSidebarOpen_13, closeSidebar_13 } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen_13
          ? [styles["sidebar-wrapper"], styles["show"]].join(" ")
          : styles["sidebar-wrapper"]
      }`}
    >
      <div className={styles["sidebar"]}>
        <button className={styles["close-btn"]} onClick={closeSidebar_13}>
          <FaTimes />
        </button>
        {/* 两层循环 */}
        <div className={styles["sidebar-links"]}>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            // console.log(links, page);
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className={styles["sidebar-sublinks"]}>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

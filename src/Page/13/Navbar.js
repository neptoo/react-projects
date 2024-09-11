import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../contexts";
import styles from "./index13.module.css";

const Navbar = () => {
  const { openSidebar_13, openSubmenu_13, closeSubmenu_13 } =
    useGlobalContext();
  // only show submenu when hovering btns
  const displaySubmenu = (e) => {
    // console.log(e.target);
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    // lift my submenu 3px on top of the btn
    const bottom = tempBtn.bottom - 3;
    openSubmenu_13(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    // 注意这里使用了styles自定义类名 所以判断时不是link-btn
    if (!e.target.classList.contains(styles["link-btn"])) {
      closeSubmenu_13();
    }
  };
  return (
    <nav className={styles["nav"]} onMouseOver={handleSubmenu}>
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
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              company
            </button>
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

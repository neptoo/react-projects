import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter, FaDiscord, FaMastodon } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

import styles from "./index11.module.css";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <img src={logo} alt="logo" />
          <button
            className={styles["nav-toggle"]}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* "links-container" "show-container" */}
        <div className={styles["links-container"]} ref={linksContainerRef}>
          {/* <div
          className={`${styles["links-container"]} ${
            showLinks ? styles["show-container"] : ""
          }`}
        > */}
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className={styles["social-icons"]}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../contexts";
import styles from "./index13.module.css";

// when close submenu:
// 1 check hover over the navbar but not the btns
// 2 hover over the hero

const Submenu = () => {
  const {
    isSubmenuOpen_13,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);

  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2"); // default
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      className={`${
        isSubmenuOpen_13
          ? [styles["submenu"], styles["show"]].join(" ")
          : styles["submenu"]
      } `}
      ref={container}
    >
      <h4>{page}</h4>
      {/* change the width depending on children node */}
      <div
        className={`${[styles["submenu-center"], styles[columns]].join(" ")}`}
      >
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;

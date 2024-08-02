import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

import styles from "./index9.module.css";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  // 每次剪贴成功后3s清除提示
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`${styles.color} 
      ${index > 10 && styles["color-light"]} 
      ${index === 10 && styles["color-shadow"]}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className={styles["percent-value"]}>{weight}%</p>
      <p className={styles["color-value"]}>{hexValue}</p>
      <HiOutlineClipboardDocument className={styles["clip-icon"]} />
      {alert && <p className={styles.alert}>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

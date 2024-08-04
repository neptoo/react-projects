import React, { useEffect } from "react";
import styles from "./index10.module.css";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
    // 这里的依赖用 list 而不是 [] 的原因
    // 确保每次Alert出现都会持续3s
  }, [list]);
  return (
    <p className={`${styles["alert"]} ${styles["alert-" + type]}`}>{msg}</p>
  );
};

export default Alert;

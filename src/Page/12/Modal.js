import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./index12.module.css";
import { AppContext, useGlobalContext } from "../../contexts";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    // ${styles["show-modal"]
    <div
      className={`${isModalOpen ? styles["show-modal"] : ""} ${
        styles["modal-overlay"]
      } }`}
    >
      <div className={styles["modal-container"]}>
        <h3>modal content</h3>
        <button className={styles["close-modal-btn"]} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

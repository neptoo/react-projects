import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import styles from "./index10.module.css";
const List = ({ items, removeItem, editItem }) => {
  return (
    <>
      <div className={styles["grocery-list"]}>
        {items.map((item) => {
          const { id, title } = item;
          return (
            <article className={styles["grocery-item"]} key={id}>
              <p className={styles.title}>{title}</p>
              <div className={styles["btn-container"]}>
                <button
                  type="button"
                  className={styles["edit-btn"]}
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className={styles["delete-btn"]}
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default List;

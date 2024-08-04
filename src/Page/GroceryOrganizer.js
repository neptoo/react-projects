import React, { useState, useEffect } from "react";
import List from "./10/List";
import Alert from "./10/Alert";

import "../index.css";
import styles from "./10/index10.module.css";

const GroceryOrganizer = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // click submit without passing any name
      // alert
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  return (
    <section className={styles["section-center"]}>
      <form className={styles["grocery-form"]} onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery organizer</h3>
        <div className={styles["form-control"]}>
          <input
            type="text"
            className={styles.grocery}
            placeholder="e.g. beans"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className={styles["submit-btn"]} type="submit">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className={styles["grocery-container"]}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className={styles["clear-btn"]} onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default GroceryOrganizer;

import React, { useState } from "react";
import data from "./01/data";
import List from "./01/List";
import styles from "./01/index1.module.css";

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h3>{people.length} birthday today</h3>
        <List people={people} styles={styles} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default BirthdayReminder;

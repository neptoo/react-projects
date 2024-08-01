import React, { useState } from "react";
import data from "./08/data";

import "../index.css";
import styles from "./08/index8.module.css";

const LoremLpsum = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ count, typeof: typeof count });
    // 拿到的count是string 不是 number
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    // slice(start, end) 不包括end
    setText(data.slice(0, amount));
  };
  return (
    <section className={[styles.sectionCenter, styles.section].join(" ")}>
      <h3 className={styles.h3}>tired of lorem lpsum</h3>
      <form className={styles.loremForm} onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          className={styles.input}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          generate
        </button>
      </form>
      <article className={styles.loremText}>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default LoremLpsum;

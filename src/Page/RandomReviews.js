import React from "react";
import Review from "./03/Review";
import "../index.css";
import styles from "./03/index3.module.css";

const RandomReviews = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.title}>
          <h2>Our Reviews</h2>
          <div className={styles.underline}></div>
        </div>
        <Review styles={styles} />
      </section>
    </main>
  );
};

export default RandomReviews;

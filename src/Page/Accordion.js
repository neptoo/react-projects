import React from "react";
import data from "./04/data";
import "../index.css";
import styles from "./04/index4.module.css";
import SingleQuestion from "./04/Question";

const Accordion = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h3>Questions and answers frequently asked</h3>
        <section className={styles.info}>
          {data.map((question) => {
            return (
              <SingleQuestion
                question={question}
                key={question.id}
                styles={styles}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordion;

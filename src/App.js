import React from "react";
import styles from "./app.module.css";

function App() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.title}>
          <h2>App</h2>
          <div className={styles.underline}></div>
        </div>
      </section>
      <div className={styles.center}>
        <p>
          <a href={`/01`}>01</a>
        </p>
        <p>
          <a href={`/02`}>02</a>
        </p>
        <p>
          <a href={`/03`}>03</a>
        </p>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import styles from "./app.module.css";
import data from "./data";

function App() {
  const [projects, setProjects] = useState(data);
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.title}>
          <h2>App</h2>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.container}>
          {projects.map((project) => {
            return (
              <article className={styles.singleProject} key={project.id}>
                <a href={project.href}>
                  <img
                    src={project.img}
                    alt={project.title}
                    className={styles.img}
                  />
                </a>
                <footer>
                  <h4 className={styles.subtitle}>{project.title}</h4>
                </footer>
              </article>
            );
          })}
        </div>
      </section>

      {/* <div className={styles.center}>
        <p>
          <a href={`/01`}>01</a>
        </p>
        <p>
          <a href={`/02`}>02</a>
        </p>
        <p>
          <a href={`/03`}>03</a>
        </p>
        <p>
          <a href={`/04`}>04</a>
        </p>
        <p>
          <a href={`/05`}>05</a>
        </p>
        <p>
          <a href={`/06`}>06</a>
        </p>
      </div> */}
    </div>
  );
}

export default App;

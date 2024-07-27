import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import "../index.css";
import styles from "./06/index6.module.css";

const url = "http://localhost:3000/tabs.json";

const Tabs = () => {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // if (loading) {
  //   return (
  //     <main>
  //       <section className="section loading">
  //         <h1>loading...</h1>
  //       </section>
  //     </main>
  //   );
  // }

  // 如果没有loading的判断
  // 会报错 因为此时jobs还没有值 为空！
  // 上面增加了loading判断 只有在拉取到数据的时候才执行下面的代码
  if (!loading) {
    const { company, title, dates, duties } = jobs[value];

    return (
      <main>
        <section className={styles.section}>
          <div className={styles.title}>
            <h2>experience</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles["jobs-center"]}>
            {/* btn-container */}
            <div className={styles["btn-container"]}>
              {jobs.map((job, index) => {
                // className={`job-btn ${index === value && "active-btn"} `}
                return (
                  <button
                    className={`${styles["job-btn"]} ${
                      index === value ? styles["active-btn"] : ""
                    }`}
                    key={job.id}
                    onClick={() => {
                      setValue(index);
                    }}
                  >
                    {job.company}
                  </button>
                );
              })}
            </div>
            {/* job info */}
            <article className={styles["job-info"]}>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className={styles["job-date"]}>{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div className={styles["job-desc"]} key={index}>
                    <FaAngleDoubleRight className={styles["job-icon"]} />
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          </div>
        </section>
      </main>
    );
  }
};

export default Tabs;

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tabs-project'
const url = "http://localhost:3000/tabs.json";
function App() {
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
        <section className="section">
          <div className="title">
            <h2>experience</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            {/* btn-container */}
            <div className="btn-container">
              {jobs.map((job, index) => {
                return (
                  <button
                    className={`job-btn ${index === value && "active-btn"} `}
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
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div className="job-desc" key={index}>
                    <FaAngleDoubleRight className="job-icon" />
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
}

export default App;

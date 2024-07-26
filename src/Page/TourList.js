import React, { useState, useEffect } from "react";
import Loading from "./02/Loading";
import Tours from "./02/Tours";
import "../index.css";
import styles from "./02/index2.module.css";

// 服务器不允许跨域 修改在线服务器为本地服务
const url = "http://localhost:3000/tours.json";

const TourList = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // 移除单个卡片
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // 获取api接口数据
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tourData = await response.json();
      setTours(tourData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main className={styles.main}>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.title}>
          <h2>no tour left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Tours tours={tours} removeTour={removeTour} styles={styles} />
    </main>
  );
};

export default TourList;

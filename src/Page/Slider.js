import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./07/data";

import "../index.css";
import styles from "./07/index7.module.css";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  // ?
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  // autoSlide
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    // ?
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <div className={styles.title}>
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className={styles.sectionCenter}>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              // 条件1：把一个slide挪到左边
              // 条件2： index为0时 把数组最后一个挪到最左边
              position = "lastSlide";
            }
            return (
              <article
                className={`${styles.article} ${styles[position]}`}
                key={id}
              >
                <img src={image} alt={name} className={styles.personImg} />
                <h4>{name}</h4>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{quote}</p>
                <FaQuoteRight className={styles.icon} />
              </article>
            );
          })}
          <button className={styles.prev} onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className={styles.next} onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Slider;

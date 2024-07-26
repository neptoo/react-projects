import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ styles }) => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const checkNum = (num) => {
    if (num < 0) {
      return people.length - 1;
    }
    if (num > people.length - 1) {
      return 0;
    }
    return num;
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNum(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  // 生成随机数
  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length); // let not const
    // console.log("randomNum", randomNum);
    if (randomNum === index) randomNum = randomNum + 1;
    setIndex(checkNum(randomNum));
  };

  return (
    <article className={styles.review}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.personImg} />
        <span className={styles.quoteIcon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{name}</h4>
      <p className={styles.job}>{job}</p>
      <p className={styles.info}>{text}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.prevBtn} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={styles.nextBtn} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={styles.randomBtn} onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;

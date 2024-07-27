import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question, styles }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, title, info } = question;
  return (
    <article className={styles.question}>
      <header>
        <h4>{title}</h4>
        {/* 这里用的是图标 */}
        <button className={styles.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

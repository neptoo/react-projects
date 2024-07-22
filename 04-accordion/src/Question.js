import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, title, info } = question;
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* 这里用的是图标 */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

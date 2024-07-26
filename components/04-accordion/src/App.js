import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and answers frequently asked</h3>
        <section className="info">
          {data.map((question) => {
            return <SingleQuestion question={question} key={question.id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

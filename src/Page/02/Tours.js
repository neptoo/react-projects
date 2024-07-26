import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, styles }) => {
  return (
    <section>
      <div className={styles.title}>
        <h2>our tours</h2>
        <div className={styles.underline}></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              removeTour={removeTour}
              styles={styles}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;

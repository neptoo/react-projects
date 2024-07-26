import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour, styles }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className={styles.singleTour}>
      <img src={image} alt={name} className={styles.img} />
      <footer>
        <div className={styles.tourInfo}>
          <h4>{name}</h4>
          <h4 className={styles.tourPrice}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}...
          <button
            onClick={() => setReadMore((readMore) => !readMore)}
            className={styles.button}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className={styles.deleteBtn} onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

import React from "react";

const Categories = ({ categories, filterItems, styles }) => {
  return (
    <div className={styles["btn-container"]}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className={styles["filter-btn"]}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

import React from "react";

const Menu = ({ items, styles }) => {
  return (
    <div className={styles["section-center"]}>
      {items.map((menu) => {
        const { id, title, category, price, img, desc } = menu;
        return (
          <article className={styles["menu-item"]} key={id}>
            <img src={img} alt={title} className={styles.photo} />
            <div className={styles["item-info"]}>
              <header>
                <h4>{title}</h4>
                <h4 className={styles.price}>${price}</h4>
              </header>
              <p className={styles["item-text"]}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

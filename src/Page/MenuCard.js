import React, { useState } from "react";
import Menu from "./05/Menu";
import Categories from "./05/Categories";
import items from "./05/data";

import "../index.css";
import styles from "./05/index5.module.css";

// 获取目录分类
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MenuCard = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  // 筛选
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className={[styles.menu, styles.section].join(" ")}>
        <div className={styles.title}>
          <h2>our menu</h2>
          <div className={styles.underline}></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
          styles={styles}
        />
        <Menu items={menuItems} styles={styles} />
      </section>
    </main>
  );
};

export default MenuCard;

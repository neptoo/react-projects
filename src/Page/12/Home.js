import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

import styles from "./index12.module.css";

const Home = () => {
  // const data = useContext(AppContext);
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main className={styles["main"]}>
      <button className={styles["sidebar-toggle"]} onClick={openSidebar}>
        <FaBars />
      </button>
      <button className={styles["btn"]} onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;

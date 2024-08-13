import React from "react";
import phoneImg from "./images/phone.svg";

import { useGlobalContext } from "../../contexts";
import styles from "./index13.module.css";

const Hero = () => {
  const { closeSubmenu_13 } = useGlobalContext();
  // console.log(data);

  return (
    <section className={[styles["hero"], styles["section"]].join(" ")}>
      <div className={styles["hero-center"]}>
        <article className={styles["hero-info"]}>
          <h1>Financial infrastructure to grow your revenue</h1>
          <p>
            Join the millions of companies of all sizes that use Stripe to
            accept payments online and in person, embed financial services,
            power custom revenue models, and build a more profitable business.
          </p>
          <button className={styles["btn"]}>Start now</button>
        </article>
        <article className={styles["hero-images"]}>
          <img src={phoneImg} alt="photo" className={styles["phone-img"]} />
        </article>
      </div>
    </section>
  );
};

export default Hero;

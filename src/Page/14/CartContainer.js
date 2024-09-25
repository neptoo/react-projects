import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../../contexts";

const CartContainer = ({ styles }) => {
  const { cart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className={styles["cart"]}>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className={styles["empty-cart"]}>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className={styles["cart"]}>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} styles={styles} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className={styles["cart-total"]}>
          <h4>
            total <span>$0.00</span>
          </h4>
        </div>
        <button
          className={[styles["btn"], styles["clear-btn"]].join(" ")}
          onClick={() => console.log("clear cart")}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

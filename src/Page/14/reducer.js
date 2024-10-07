import { act, useEffect } from "react";

const reducer = (state, action) => {
  // 清空购物车
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    let newCart = state.cart.filter((cartItem) => cartItem.id !== action.cargo);
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.cargo) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  // decrease时 如果数量减少到1以下 就移除那个商品
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.cargo) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.cargo.id) {
          if (action.cargo.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.cargo.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        amount: 0,
        total: 0,
      }
    );
    // 单独处理总价
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.cargo, loading: false };
  }

  // return state;
  throw new Error("no matching action type");
};
export default reducer;

// en: combine context.js in project12 & project13, import as a whole in index.js
// zh: 项目12和项目13的context集合，方便统一在index.js引入
import React, { useState, useContext, useReducer, useEffect } from "react";
import sublinks from "./Page/13/data";
import cartItems from "./Page/14/data";
import reducer from "./Page/14/reducer";

const AppContext = React.createContext();

const url = "http://localhost:3000/carts.json";

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const [isSidebarOpen_13, setSidebarOpen_13] = useState(false);
  const [isSubmenuOpen_13, setSubmenuOpen_13] = useState(false);

  // 14
  const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
  };
  // const [cart, setCart] = useState(cartItems);
  const [state, dispatch] = useReducer(reducer, initialState);

  // 清空
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  // 移除单个商品
  const remove = (id) => {
    dispatch({ type: "REMOVE", cargo: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", cargo: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", cargo: id });
  };

  // 每次操作购物车时 执行一些代码
  useEffect(() => {
    // console.log("change");
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  // 如何fetchData
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", cargo: cart });
  };
  // reassemble function
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", cargo: { id, type } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openSidebar_13 = () => {
    setSidebarOpen_13(true);
  };
  const closeSidebar_13 = () => {
    setSidebarOpen_13(false);
  };
  const openSubmenu_13 = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setSubmenuOpen_13(true);
  };
  const closeSubmenu_13 = () => {
    setSubmenuOpen_13(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        isSidebarOpen_13,
        isSubmenuOpen_13,
        openSidebar_13,
        closeSidebar_13,
        openSubmenu_13,
        closeSubmenu_13,
        location,
        page,
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 注意custom hook命名 e.g.useGlobal, useXXX, 不能用globalContext
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

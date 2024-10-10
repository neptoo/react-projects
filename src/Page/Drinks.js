import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./15/pages/Home";
import About from "./15/pages/About";
import SingleCocktail from "./15/pages/SingleCocktail";
import Error from "./15/pages/Error";
// import components
import Navbar from "./15/components/Navbar";
import "../index.css";
import styles from "./15/index15.module.css";

const Drinks = () => {
  return <h2>app component</h2>;
};

export default Drinks;

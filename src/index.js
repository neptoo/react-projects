import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import BirthdayReminder from "./Page/BirthdayReminder";
import TourList from "./Page/TourList";
import RandomReviews from "./Page/RandomReviews";
import Accordion from "./Page/Accordion";
import MenuCard from "./Page/MenuCard";
import Tabs from "./Page/Tabs";
import Slider from "./Page/Slider";
import LoremLpsum from "./Page/LoremLpsum";
import ColorGenerator from "./Page/ColorGenerator";
import GroceryOrganizer from "./Page/GroceryOrganizer";
import NavBar from "./Page/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "01",
    element: <BirthdayReminder />,
  },
  {
    path: "02",
    element: <TourList />,
  },
  {
    path: "03",
    element: <RandomReviews />,
  },
  {
    path: "04",
    element: <Accordion />,
  },
  {
    path: "05",
    element: <MenuCard />,
  },
  {
    path: "06",
    element: <Tabs />,
  },
  {
    path: "07",
    element: <Slider />,
  },
  {
    path: "08",
    element: <LoremLpsum />,
  },
  {
    path: "09",
    element: <ColorGenerator />,
  },
  {
    path: "10",
    element: <GroceryOrganizer />,
  },
  {
    path: "11",
    element: <NavBar />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

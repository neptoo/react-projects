import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import BirthdayReminder from "./Page/BirthdayReminder";
import TourList from "./Page/TourList";
import RandomReviews from "./Page/RandomReviews";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Global styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

// Pages
import HomePage from "./pages/home/HomePage";
import AboutThisProjectPage from "./pages/about/AboutThisProjectPage";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-this-project",
    element: <AboutThisProjectPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

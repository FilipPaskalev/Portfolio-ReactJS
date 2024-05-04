import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Global styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

// Enumerations
import EPagePaths from "./enum/EPagePaths";

// Pages
import HomePage from "./pages/home/HomePage";
import AboutThisProjectPage from "./pages/about/AboutThisProjectPage";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: EPagePaths.HOME,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: EPagePaths.ABOUT_THIS_PROJECT,
    element: <AboutThisProjectPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Global styles
import "./styles.scss";
// Pages
import { HomePage } from "./pages/home";
import { AboutThisProjectPage } from "./pages/about";
import { ErrorPage } from "./pages/error";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-this-project" element={<AboutThisProjectPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

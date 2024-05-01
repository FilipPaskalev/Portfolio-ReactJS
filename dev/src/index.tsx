import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Global styles
import "./index.css";
// Pages
import { HomePage } from "./pages/HomePage";
import { AboutThisProjectPage } from "./pages/AboutThisProjectPage";
import { ErrorPage } from "./pages/ErrorPage";

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

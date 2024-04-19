import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import "./index.css";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/noPage/NoPage";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NoPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <NoPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NoPage />,
  },
  {
    path: "/education",
    element: <Education />,
    errorElement: <NoPage />,
  },
  {
    path: "/skills",
    element: <Skills />,
    errorElement: <NoPage />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

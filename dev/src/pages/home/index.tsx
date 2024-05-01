// index.tsx

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";
import { NavBar } from "../../components/navBar/NavBar";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <h1>Home page</h1>
    </>
  );
};

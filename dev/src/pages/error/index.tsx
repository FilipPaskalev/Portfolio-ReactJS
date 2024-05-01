import "./styles.scss";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <h2>Error page</h2>
      <Link to="/">Go back to Home page</Link>
    </>
  );
};

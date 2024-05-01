import { Link } from "react-router-dom";

type ErrorPageProps = {};

export const ErrorPage = (props: ErrorPageProps) => {
  return (
    <>
      <h2>Error page</h2>
      <Link to="/">Go back to Home page</Link>
    </>
  );
};

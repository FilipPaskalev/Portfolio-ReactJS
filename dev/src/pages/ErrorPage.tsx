import { Link } from "react-router-dom";

type Props = {};

export const ErrorPage = (props: Props) => {
  return (
    <>
      <h2>Error page</h2>
      <Link to="/">Go back to Home page</Link>
    </>
  );
};

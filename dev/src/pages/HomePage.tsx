import { Link } from "react-router-dom";

type Props = {};

export const HomePage = (props: Props) => {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/about-tis-project">About this project</Link>
    </>
  );
};

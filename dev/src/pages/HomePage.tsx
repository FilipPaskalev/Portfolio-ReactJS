import { Link } from "react-router-dom";

type HomePageProps = {};

export const HomePage = (props: HomePageProps) => {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/about-tis-project">About this project</Link>
    </>
  );
};

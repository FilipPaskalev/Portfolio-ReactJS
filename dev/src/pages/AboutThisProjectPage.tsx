import { Link } from "react-router-dom";

type AboutTisPageProps = {};

export const AboutThisProjectPage = (props: AboutTisPageProps) => {
  return (
    <>
      <h2>About this project</h2>
      <Link to="/">Home page</Link>
    </>
  );
};

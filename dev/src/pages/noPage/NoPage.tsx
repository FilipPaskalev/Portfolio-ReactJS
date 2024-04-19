import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <div>404 Page Not Found</div>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default NoPage;

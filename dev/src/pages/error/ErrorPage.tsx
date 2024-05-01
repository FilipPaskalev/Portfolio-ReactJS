import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container text-center py-5">
      <h1 className="mb-4">Oops!</h1>
      <p className="mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="mb-4">
        <i>
          {(error as Error).message
            ? (error as Error).message
            : "Unknown Error"}
        </i>
      </p>
      <button className="btn btn-primary">
        <Link to="/" className="text-white text-decoration-none">
          Go Home
        </Link>
      </button>
    </div>
  );
};

export default ErrorPage;

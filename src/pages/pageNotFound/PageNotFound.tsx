import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <section className="container">
      <h1>Page Not Found</h1>
      <Link to="/">
        <Button className="btn btn-primary" onClick={() => <Link to="/" />}>
          Go back to home
        </Button>
      </Link>
    </section>
  );
};

export default PageNotFound;

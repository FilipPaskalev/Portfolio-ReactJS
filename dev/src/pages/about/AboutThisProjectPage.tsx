import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "../../components/navigation/Navigation";
import "./about-this-project-page.scss";

const AboutThisProjectPage = () => {
  const navMessage: string[] = [
    "What is about this project?",
    "About this project",
  ];

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const pageHeader: string = "Page header";

  return (
    <Container>
      <Navigation message={navMessage} />
      <Row>
        <Col>
          <header className="mx-3 my-3">
            <h2>{pageHeader}</h2>
            <p>
              add navigation inside the page so user can click straight away to
              what section is needed
            </p>
          </header>
        </Col>
      </Row>

      <section>
        <h3>Description</h3>
        <p>
          Irure adipisicing Lorem tempor laboris sunt ut mollit sunt ut sunt in
          cupidatat dolore. Elit esse aliqua quis proident nostrud et velit ut
          proident nulla officia aliqua id quis. Non nisi et exercitation
          ullamco consequat officia. Laborum incididunt duis dolor sint veniam
          id anim nisi aliqua et cupidatat amet incididunt. Anim aliquip cillum
          fugiat esse elit proident quis exercitation nisi nisi ipsum qui. Amet
          adipisicing magna enim qui deserunt do minim. Amet reprehenderit
          laboris dolor deserunt eu ullamco sit adipisicing eiusmod amet id
          dolore.
        </p>
        <footer className="d-flex justify-content-end">
          last update {formattedDate}
        </footer>
      </section>

      <hr />

      <section>
        <h3>About</h3>
        <p>
          Irure adipisicing Lorem tempor laboris sunt ut mollit sunt ut sunt in
          cupidatat dolore. Elit esse aliqua quis proident nostrud et velit ut
          proident nulla officia aliqua id quis. Non nisi et exercitation
          ullamco consequat officia. Laborum incididunt duis dolor sint veniam
          id anim nisi aliqua et cupidatat amet incididunt. Anim aliquip cillum
          fugiat esse elit proident quis exercitation nisi nisi ipsum qui. Amet
          adipisicing magna enim qui deserunt do minim. Amet reprehenderit
          laboris dolor deserunt eu ullamco sit adipisicing eiusmod amet id
          dolore.
        </p>
        <footer className="d-flex justify-content-end">
          last update {formattedDate}
        </footer>
      </section>

      <hr />

      <section>
        <h3>Feedback</h3>
        <p>ADD SOME DESCRIPTION</p>
        <footer className="d-flex justify-content-end">
          last update {formattedDate}
        </footer>
      </section>

      <hr />

      <section>
        <h3>Changelog</h3>
        <p>ADD SOME DESCRIPTION</p>
        <footer className="d-flex justify-content-end">
          last update {formattedDate}
        </footer>
      </section>

      <hr />

      <section>
        <h3>Contributions</h3>
        <p>ADD SOME DESCRIPTION</p>
        <footer className="d-flex justify-content-end">
          last update {formattedDate}
        </footer>
      </section>

      <hr />

      <section>
        <h3>License</h3>
        <section>
          <header>
            <h6>MIT</h6>
          </header>
          <p>ADD description</p>
        </section>
        <section>
          <header>
            <h6>Icons8</h6>
          </header>
          <p>ADD description</p>
        </section>
        <footer className="d-flex justify-content-end">
          last update {formattedDate}
        </footer>
      </section>

      <footer className="d-flex justify-content-center mt-5 mb-1">
        <p className="text-muted">
          Copyright &copy; {new Date().getFullYear()} Name First Name second
        </p>
      </footer>
    </Container>
  );
};

export default AboutThisProjectPage;

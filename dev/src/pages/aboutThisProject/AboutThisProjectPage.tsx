// React Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Custom components
import Navigation from "../../components/navigation/Navigation";
import AboutSection from "./aboutSection/AboutSection";
// Styles
import "./about-this-project-page.scss";
import Copyright from "../../components/copyright/Copyright";

const AboutThisProjectPage = () => {
  const navMessage: string[] = [
    "What is about this project?",
    "About this project",
  ];

  return (
    <Container>
      <Navigation message={navMessage} />
      <Row>
        <Col>
          <header className="mx-3 my-3">
            <h2>Page header here</h2>
            <p>
              add navigation inside the page so user can click straight away to
              what section is needed
            </p>
          </header>
        </Col>
      </Row>

      <AboutSection
        header="Some header"
        content="Some content here "
        lastUpdateDate={new Date().getTime()}
      />
      <hr />

      <AboutSection
        header="Some header"
        content="Some content here "
        lastUpdateDate={new Date().getTime()}
      />
      <hr />

      <AboutSection
        header="Some header"
        content="Some content here "
        lastUpdateDate={new Date().getTime()}
      />
      <hr />

      <AboutSection
        header="Some header"
        content="Some content here "
        lastUpdateDate={new Date().getTime()}
      />
      <hr />

      <AboutSection
        header="Some header"
        content="Some content here "
        lastUpdateDate={new Date().getTime()}
      />

      <footer className="d-flex justify-content-center mt-5 mb-1">
        <Copyright name="My name goes here" year={2024} />
      </footer>
    </Container>
  );
};

export default AboutThisProjectPage;

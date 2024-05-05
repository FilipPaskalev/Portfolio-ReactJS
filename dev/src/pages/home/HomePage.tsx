import "./home-page.scss";
import Navigation from "../../components/navigation/Navigation";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomePage = () => {
  const navMessage: string[] = [
    "Hi, there and Welcome",
    "This is my portfolio page!",
  ];

  return (
    <Container fluid>
      <Row>
        <Col xl={2} xxl={2}>
          <Navigation message={navMessage} />
        </Col>
        <Col xl={10} xxl={10}>
          <p>Home page</p>
          <p>
            Ullamco consequat quis tempor exercitation labore est sit ullamco
            voluptate occaecat. Sint eu fugiat voluptate sunt do laborum mollit
            reprehenderit. Veniam in proident consequat laboris consectetur
            commodo.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

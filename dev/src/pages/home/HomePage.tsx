// Styles
import "./home-page.scss";
// Custom components
import Navigation from "../../components/navigation/Navigation";
// React Bootstrap Icons
import {
  Envelope,
  GeoAltFill,
  Phone,
  Linkedin,
  Github,
  Discord,
  Facebook,
} from "react-bootstrap-icons";

// React Bootstrap components
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Copyright from "../../components/copyright/Copyright";

type TAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type TPhoneNumber = {
  plain: string;
  masked: string;
};

const HomePage = () => {
  const navMessage: string[] = [
    "Hi, there and Welcome",
    "This is my portfolio page!",
  ];
  const firstName: string = "Clarence";
  const lastName: string = "Taylor";
  const address: TAddress = {
    street: "3542 Berry Street",
    city: "Cheyenne Wells",
    state: "CO",
    zip: "80810",
  };
  const phoneNumber: TPhoneNumber = {
    plain: "+5555555555",
    masked: "(555) 555-5555",
  };
  const email: string = "myEmailAddress@example.com";
  const socialLinks = {
    linkedIn: "https://www.linkedin.com/in/paskalevfilip",
    gitHub: "https://github.com/",
    discord: "https://discord.com/",
    facebook: "https://www.facebook.com/",
  };

  return (
    <Container fluid>
      <Row>
        <Col xl={4} xxl={4} className="bg-secondary">
          <Navigation message={navMessage} />
        </Col>
        <Col xl={8} xxl={8}>
          <h1 className="mt-4 mb-3">
            <b>
              {firstName}
              <span className="text-primary">{lastName}</span>
            </b>
          </h1>
          <address className="mb-5">
            <Col className="mb-1">
              <GeoAltFill size={20} color="primary" />
              {"  "}
              {address.street}
              {" · "}
              {address.city}
              {" · "}
              {address.state} {address.zip}
            </Col>
            <Col>
              <Phone size={20} color="primary" />
              {"  "}
              <a href={`tel:${phoneNumber.plain}`}>{phoneNumber.masked}</a>
            </Col>
            <Col>
              <Envelope size={20} color="primary" />
              {"  "}
              <a href={`mailto:${email}`}>{email}</a>
            </Col>
          </address>
          <section>
            <header className="mb-4 display-1">
              <b>Hi, there !</b>
            </header>
            <p className="lead mb-4">
              Ea consequat magna aliquip veniam cillum duis tempor ex Lorem
              cupidatat ullamco irure. Irure laboris elit elit minim mollit qui
              quis voluptate fugiat excepteur minim est irure. Incididunt dolor
              duis ipsum id. Amet occaecat amet dolor do. Sit do do amet aliquip
              duis ipsum id. Amet occaecat amet dolor do. Sit do do amet aliquip
              duis ipsum id. Amet occaecat amet dolor do. Sit do do amet aliquip
              duis ipsum id. Amet occaecat amet dolor do. Sit do do amet aliquip
              duis ipsum id. Amet occaecat amet dolor do. Sit do do amet aliquip
              duis ipsum id. Amet occaecat amet dolor do. Sit do do amet aliquip
              duis ipsum id. Amet occaecat amet dolor do. Sit do do amet aliquip
            </p>
            <Container className="mx-auto text-center mt-5 ">
              <Row className="justify-content-center">
                <Col>
                  <a
                    href={socialLinks.linkedIn}
                    target="_blank"
                    className="mx-2"
                  >
                    <Linkedin size={38} title="LinkedIn" color="primary" />
                  </a>
                  <a href={socialLinks.gitHub} target="_blank" className="mx-2">
                    <Github size={38} title="GitHub" color="primary" />
                  </a>
                  <a
                    href={socialLinks.discord}
                    target="_blank"
                    className="mx-2"
                  >
                    <Discord size={38} title="Discord" color="primary" />
                  </a>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    className="mx-2"
                  >
                    <Facebook size={38} title="Facebook" color="primary" />
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
        </Col>
      </Row>
      <footer className="d-flex justify-content-center mt-5 mb-1">
        <Copyright name="My name goes here" year={2024} />
      </footer>
    </Container>
  );
};

export default HomePage;

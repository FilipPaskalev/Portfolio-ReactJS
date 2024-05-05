// Hooks
import { useState } from "react";

// Components
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Terminal } from "react-bootstrap-icons";

// Enumerations
import EPagePaths from "../../../enum/EPagePaths";

// Styles
import "./hamburger-nav-styles.sass";
type Props = {
  message?: string[];
};

const HamburgerNav = ({ message }: Props) => {
  const offcanvasHeaderTitle: string = "Menu";

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Terminal />{" "}
            <ReactTyped
              strings={message}
              typeSpeed={80}
              backSpeed={40}
              cursorChar="_"
              showCursor={true}
            />
          </Navbar.Brand>
          <Button onClick={handleShow}>
            <FontAwesomeIcon icon="bars" />
          </Button>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{offcanvasHeaderTitle}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar.Text>
            <Row className="mb-2">
              <Col>
                <FontAwesomeIcon icon="house" />{" "}
                <Link to={EPagePaths.HOME}>Home</Link>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <FontAwesomeIcon icon="info-circle" />{" "}
                <Link to={EPagePaths.ABOUT_THIS_PROJECT}>About</Link>
              </Col>
            </Row>
          </Navbar.Text>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HamburgerNav;

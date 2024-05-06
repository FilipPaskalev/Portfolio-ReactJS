import "./side-nav-styles.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Col, Image, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EPagePaths from "../../../enum/EPagePaths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNav = () => {
  return (
    <Navbar>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Navbar.Brand className="mx-2 text-center">
            Something here
          </Navbar.Brand>
          <Col
            xl={8}
            xxl={8}
            className="d-flex justify-content-center align-items-center mt-5"
          >
            <Image
              src="https://via.placeholder.com/150"
              roundedCircle
              className="w-75 mx-auto "
            />
          </Col>
          <Nav>
            <Container className="mt-5">
              <Row className="text-center mb-5">
                <Col xl={12} className="mb-3">
                  <FontAwesomeIcon icon="house" className="mx-2" />
                  <Link to={EPagePaths.HOME}>Home</Link>
                </Col>
                <Col xl={12} className="mb-3">
                  <FontAwesomeIcon icon="info-circle" className="mx-2" />
                  <Link to={EPagePaths.ABOUT_THIS_PROJECT}>About</Link>
                </Col>
                <Col xl={12} className="mb-3">
                  <FontAwesomeIcon icon="info-circle" className="mx-2" />
                  <Link to={EPagePaths.ABOUT_THIS_PROJECT}>About</Link>
                </Col>
                <Col xl={12} className="mb-3">
                  <FontAwesomeIcon icon="info-circle" className="mx-2" />
                  <Link to={EPagePaths.ABOUT_THIS_PROJECT}>About</Link>
                </Col>
                <Col xl={12} className="mb-3">
                  <FontAwesomeIcon icon="info-circle" className="mx-2" />
                  <Link to={EPagePaths.ABOUT_THIS_PROJECT}>About</Link>
                </Col>
                <Col xl={12} className="mb-3">
                  <FontAwesomeIcon icon="info-circle" className="mx-2" />
                  <Link to={EPagePaths.ABOUT_THIS_PROJECT}>About</Link>
                </Col>
              </Row>
            </Container>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
};

export default SideNav;

import "./side-nav-styles.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Image, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EPagePaths from "../../../enum/EPagePaths";

const SideNav = () => {
  return (
    <Navbar>
      <Container>
        <Row>
          <Image src="https://via.placeholder.com/150" roundedCircle />
          <Navbar.Brand className="mx-2">Something here</Navbar.Brand>
          <Nav>
            <Container>
              <Row>
                <Link to={EPagePaths.HOME}>Home</Link>
                <Link to={EPagePaths.ABOUT_THIS_PROJECT}>About</Link>
              </Row>
            </Container>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
};

export default SideNav;

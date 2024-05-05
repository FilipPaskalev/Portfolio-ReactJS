import "./horizontal-nav-styles.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ReactTyped } from "react-typed";
import { Terminal } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import EPagePaths from "../../../enum/EPagePaths";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

type Props = {
  message?: string[];
};

const HorizontalNav = ({ message }: Props) => {
  return (
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
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Row>
              <Col>
                <Link to={EPagePaths.HOME}>Home</Link>
              </Col>
              <Col>
                <Link to={EPagePaths.ABOUT_THIS_PROJECT}>About</Link>
              </Col>
            </Row>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HorizontalNav;

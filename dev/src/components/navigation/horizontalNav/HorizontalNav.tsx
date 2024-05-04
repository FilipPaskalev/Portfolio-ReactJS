import "./horizontal-nav-styles.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const HorizontalNav = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HorizontalNav;

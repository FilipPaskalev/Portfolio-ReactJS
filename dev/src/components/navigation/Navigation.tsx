import { Nav, Navbar } from 'react-bootstrap'; // React Bootstrap components
import '../../../global-styles.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome icons
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Import Font Awesome icons
import './navigation.css'; // Component styles
import userInfo from '../../data/userInfo.json'; // Data
import avatar from '../../assets/avatar.png'; // Assets
import TypeUserInfo from '../../types/TypeUserInfo'; // Types

const Navigation = () => {
  const { firstName, lastName } = userInfo as TypeUserInfo;

  return (
    <Navbar expand='lg' bg='primary' variant='dark' fixed='top' id='sideNav'>
      <Navbar.Brand>
        <span className='d-block d-lg-none'>
          {firstName} {lastName}
        </span>
        <span className='d-none d-lg-block'>
          <img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src={avatar}
            alt='profile avatar'
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarResponsive' />
      <Navbar.Collapse id='navbarResponsive'>
        <Nav className='navbar-nav'>
          <Nav.Link href='#about' className='nav-link'>
            About
          </Nav.Link>
          <Nav.Link href='#experience' className='nav-link'>
            Experience
          </Nav.Link>
          <Nav.Link href='#education' className='nav-link'>
            Education
          </Nav.Link>
          <Nav.Link href='#skills' className='nav-link'>
            Skills
          </Nav.Link>
          <Nav.Link href='#interests' className='nav-link'>
            Interests
          </Nav.Link>
          <Nav.Link href='#awards' className='nav-link'>
            Awards
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// Styles
// import '../../../global-styles.css';
import './about.css';
import Header from './header/Header';
import SubHeader from './subHeader/SubHeader';
import Body from './body/Body';
import Footer from './footer/Footer';
// Components

const About = () => {
  return (
    <section className='resume-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='resume-section-content'></Col>
          <Header />
          <SubHeader />
          <Body />
          <Footer />
        </Row>
      </Container>
    </section>
  );
};

export default About;

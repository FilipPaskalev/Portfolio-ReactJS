// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// Styles
import '../../../global-styles.css';
import './about.css';
// Components
import AboutHeader from './AboutHeader';
import AboutSubHeader from './AboutSubHeader';
import AboutBody from './AboutBody';
import AboutFooter from './AboutFooter';

const About = () => {
  return (
    <section className='resume-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='resume-section-content'>
            <AboutHeader />
            <AboutSubHeader />
            <AboutBody />
            <AboutFooter />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

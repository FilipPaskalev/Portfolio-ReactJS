// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// Styles
// import '../../../global-styles.css';
import './about.css';
// Components
import Header from './header/Header';
import SubHeader from './subHeader/SubHeader';
import Body from './body/Body';
import Footer from './footer/Footer';
// Utils
import DATA from '../../data/sectionsData.json';

//TODO: REFACTOR - get data for sectionData.json
//TODO: REFACTOR - replace TypeUserinfo & add Type file to component folder
//TODO: REFACTOR - pass the data to components as props, so every component doing just one thing with the data that received from the parent
const About = () => {
  const { header, subHeader, body, footer } = DATA.aboutSection;

  return (
    <section className='resume-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='resume-section-content'></Col>
          <Header firstName={header.firstName} lastName={header.lastName} />
          <SubHeader
            email={subHeader.email}
            phoneNumber={subHeader.phoneNumber}
            address={subHeader.address}
          />
          <Body />
          <Footer />
        </Row>
      </Container>
    </section>
  );
};

export default About;

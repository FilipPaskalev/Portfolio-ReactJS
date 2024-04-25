// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// Styles
// import '../../../global-styles.css';
import './about-me.css';
// Components
import Header from './header/Header';
import SubHeader from './subHeader/SubHeader';
import Body from './body/Body';
import Footer from './footer/Footer';
// Utils
import DATA from '../../data/sectionsData.json';

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
          <Body header={body.header} paragraphs={body.paragraphs} />
          <Footer icons={footer.icons} />
        </Row>
      </Container>
    </section>
  );
};

export default About;

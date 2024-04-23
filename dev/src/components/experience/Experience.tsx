// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// Styles
import '../../../global-styles.css';
import './experience.css';

const Experience = () => {
  return (
    <section className='resume-section' id='experience'>
      <Container>
        <h2 className='mb-5'>Experience</h2>
        <Row className='mb-5'>
          <Col md={8}>
            <h3 className='mb-0'>Senior Web Developer</h3>
            <div className='subheading mb-3'>Intelitec Solutions</div>
            <p>
              Bring to the table win-win survival strategies to ensure proactive domination. At the
              end of the day, going forward, a new normal that has evolved from generation X is on
              the runway heading towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </Col>
          <Col md={4}>
            <span className='text-primary'>March 2013 - Present</span>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={8}>
            <h3 className='mb-0'>Web Developer</h3>
            <div className='subheading mb-3'>Intelitec Solutions</div>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta
              test. Override the digital divide with additional clickthroughs from DevOps.
              Nanotechnology immersion along the information highway will close the loop on
              focusing solely on the bottom line.
            </p>
          </Col>
          <Col md={4}>
            <span className='text-primary'>December 2011 - March 2013</span>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={8}>
            <h3 className='mb-0'>Junior Web Designer</h3>
            <div className='subheading mb-3'>Shout! Media Productions</div>
            <p>
              Podcasting operational change management inside of workflows to establish a
              framework. Taking seamless key performance indicators offline to maximise the long
              tail. Keeping your eye on the ball while performing a deep dive on the start-up
              mentality to derive convergence on cross-platform integration.
            </p>
          </Col>
          <Col md={4}>
            <span className='text-primary'>July 2010 - December 2011</span>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <h3 className='mb-0'>Web Design Intern</h3>
            <div className='subheading mb-3'>Shout! Media Productions</div>
            <p>
              Collaboratively administrate empowered markets via plug-and-play networks.
              Dynamically procrastinate B2C users after installed base benefits. Dramatically
              visualize customer directed convergence without revolutionary ROI.
            </p>
          </Col>
          <Col md={4}>
            <span className='text-primary'>September 2008 - June 2010</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;

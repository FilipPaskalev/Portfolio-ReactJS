// React Bootstrap component
import Row from 'react-bootstrap/Row';
// Utils
import DATA from '../../data/sectionsData.json';
import ProgrammingAndTools from './programmingAndTools/ProgrammingAndTools';
import Workflow from './workflow/Workflow';

const Skills = () => {
  const title: string = DATA.skillsSection.title.toUpperCase();

  return (
    <section className='resume-section' id='skills'>
      <Row className='resume-section-content'>
        <h2 className='mb-5'>{title}</h2>
        <ProgrammingAndTools />
        <Workflow />
      </Row>
    </section>
  );
};

export default Skills;

import Row from 'react-bootstrap/Row';
import './education.css';
//Components
import EducationHeader from './educationHeader/EducationHeader';
import EducationCard from './educationCard/EducationCard';
// Utils
import DATA from '../../data/sectionsData.json';

const Education = () => {
  return (
    <section className='resume-section' id='education'>
      <Row className='resume-section-content'>
        <EducationHeader title={DATA.educationSection.title} />
        {DATA.educationSection.education.map((education, index) => (
          <EducationCard
            key={index}
            Institution={education.Institution}
            level={education.level}
            subject={education.subject}
            description={education.description}
            grade={education.grade}
            startDate={education.startDate}
            endDate={education.endDate}
          />
        ))}
      </Row>
    </section>
  );
};

export default Education;

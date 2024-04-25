import Row from 'react-bootstrap/Row';
//Components
import EducationHeader from './educationHeader/EducationHeader';
import EducationCard from './educationCard/EducationCard';
// Utils
import DATA from '../../data/sectionsData.json';

const Education = () => {
  const { title, education } = DATA.educationSection;

  return (
    <section className='resume-section' id='education'>
      <Row className='resume-section-content'>
        <EducationHeader title={title} />
        {education.map((education, index) => (
          <EducationCard
            key={index}
            institute={education.institute}
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

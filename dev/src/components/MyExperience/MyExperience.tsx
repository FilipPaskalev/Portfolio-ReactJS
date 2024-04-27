// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// Components
import MyExperienceHeader from './myExperienceHeader/MyExperienceHeader';
import JobCard from './jobCard/JobCard';
// Styles
import '../../../global-styles.css';
import './my-experience.css';
// Utils
import DATA from '../../data/sectionsData.json';
import SectionTitle from '../sectionTitle/SectionTitle';

const MyExperience = () => {
  const { title, jobs } = DATA.experienceSection;

  return (
    <section className='resume-section' id='experience'>
      <Row className='resume-section-content'>
        <SectionTitle title={title} />
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            jobTitle={job.jobTitle}
            company={job.company}
            jobDescription={job.jobDescription}
            startDate={job.startDate}
            endDate={job.endDate}
          />
        ))}
      </Row>
    </section>
  );
};

export default MyExperience;

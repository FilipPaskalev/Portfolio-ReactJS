//Styles
import './education-card.css';
// Components
import EducationCardHeader from '../educationCardHeader/EducationCardHeader';
import EducationCardSubHeader from '../educationCardSubHeader/EducationCardSubHeader';
import EducationCardBody from '../educationCardBody/EducationCardBody';
import EducationCardFooter from '../educationCardFooter/EducationCardFooter';

const EducationCard = () => {
  return (
    <article className='d-flex flex-column flex-md-row justify-content-between mb-5'>
      <hgroup className='flex-grow-1'>
        <EducationCardHeader Institution='University of Colorado Boulder' />
        <EducationCardSubHeader level='Bachelor of Science' />
      </hgroup>
      <EducationCardBody
        subject='Computer Science - Web Development Track'
        description='Some description here'
      />
      <EducationCardFooter grade='GPA 3.23' startDate='August 2006' endDate='May 2010' />
    </article>
  );
};

export default EducationCard;

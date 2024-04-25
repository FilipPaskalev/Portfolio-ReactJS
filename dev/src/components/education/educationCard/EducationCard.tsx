//Styles
import './education-card.css';
// Components
import EducationCardHeader from '../educationCardHeader/EducationCardHeader';
import EducationCardSubHeader from '../educationCardSubHeader/EducationCardSubHeader';
import EducationCardBody from '../educationCardBody/EducationCardBody';
import EducationCardFooter from '../educationCardFooter/EducationCardFooter';

interface IEducationCardProps {
  Institution: string;
  level: string;
  subject: string;
  description: string;
  grade: string;
  startDate: string;
  endDate: string;
}

const EducationCard = (props: IEducationCardProps) => {
  return (
    <article className='d-flex flex-column flex-md-row justify-content-between mb-5'>
      <hgroup className='flex-grow-1'>
        <EducationCardHeader Institution={props.Institution} />
        <EducationCardSubHeader level={props.level} />
      </hgroup>
      <EducationCardBody subject={props.subject} description={props.description} />
      <EducationCardFooter
        grade={props.grade}
        startDate={props.startDate}
        endDate={props.endDate}
      />
    </article>
  );
};

export default EducationCard;

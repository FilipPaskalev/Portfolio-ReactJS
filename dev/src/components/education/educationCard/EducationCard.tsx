import './education-card.css';

interface IEducationCardHeaderProps {
  institute: string;
}
const EducationCardHeader = (props: IEducationCardHeaderProps) => {
  const title = props.institute.toUpperCase();

  return <h3 className='mb-0'>{title}</h3>;
};

interface IEducationCardSubHeaderProps {
  level: string;
}

const EducationCardSubHeader = (props: IEducationCardSubHeaderProps) => {
  const title = props.level.toUpperCase();

  return <h4 className='subheading mb-3'>{title}</h4>;
};

interface IEducationCardBodyProps {
  subject: string;
  description: string;
}

const EducationCardBody = (props: IEducationCardBodyProps) => {
  return (
    <>
      <h5 className='text-muted'>{props.subject}</h5>
      <p>{props.description}</p>
    </>
  );
};

interface IEducationCardFooterProps {
  grade: string;
  startDate: string;
  endDate: string;
}

const EducationCardFooter = (props: IEducationCardFooterProps) => {
  return (
    <footer className='flex-shrink-0'>
      <h6 className='mb-0'>Grade: {props.grade}</h6>
      <span className='text-primary'>
        {props.startDate} - {props.endDate}
      </span>
    </footer>
  );
};

const EducationCard = () => {
  return (
    <article className='d-flex flex-column flex-md-row justify-content-between mb-5'>
      <hgroup className='flex-grow-1'>
        <EducationCardHeader institute='University of Colorado Boulder' />
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

import './education-card-footer.css';

interface IEducationCardFooterProps {
  grade: string;
  startDate: string;
  endDate: string;
}

const EducationCardFooter = (props: IEducationCardFooterProps) => {
  return (
    <footer className='flex-shrink-0'>
      <h6 className='mb-1'>Grade: {props.grade}</h6>
      <span className='text-primary'>
        {props.startDate} - {props.endDate}
      </span>
    </footer>
  );
};

export default EducationCardFooter;

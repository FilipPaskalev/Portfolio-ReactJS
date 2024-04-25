import './job-card-footer.css';

interface IJobCardFooterProps {
  startDate: string;
  endDate: string;
}

const JobCardHeader = (props: IJobCardFooterProps) => {
  return (
    <footer className='flex-shrink-0'>
      <span className='text-primary'>
        {props.startDate} - {props.endDate}
      </span>
    </footer>
  );
};

export default JobCardHeader;

import './job-card-header.css';

interface IJobCardHeaderProps {
  jobTitle: string;
}

const JobCardHeader = (props: IJobCardHeaderProps) => {
  const title = props.jobTitle.toUpperCase();

  return <h3 className='mb-0'>{title}</h3>;
};

export default JobCardHeader;

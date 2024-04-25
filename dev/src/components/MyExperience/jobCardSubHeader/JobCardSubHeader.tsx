import './job-card-sub-header.css';

interface IJobCardSubHeaderProps {
  company: string;
}

const JobCardSubHeader = (props: IJobCardSubHeaderProps) => {
  const title = props.company.toUpperCase();

  return <h4 className='subheading mb-3'>{title}</h4>;
};

export default JobCardSubHeader;

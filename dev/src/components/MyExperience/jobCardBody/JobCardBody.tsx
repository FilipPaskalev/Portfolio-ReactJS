import './job-card-body.css';

interface IJobCardBodyProps {
  jobDescription: string;
}

const JobCardBody = (props: IJobCardBodyProps) => {
  return <p>{props.jobDescription}</p>;
};

export default JobCardBody;

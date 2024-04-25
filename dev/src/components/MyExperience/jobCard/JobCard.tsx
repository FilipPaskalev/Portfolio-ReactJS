import './job-card.css';
//Components
import JobCardBody from '../jobCardBody/JobCardBody';
import JobCardFooter from '../jobCardFooter/JobCardFooter';
import JobCardHeader from '../jobCardHeader/JobCardHeader';
import JobCardSubHeader from '../jobCardSubHeader/JobCardSubHeader';

interface IJobCardProps {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
}

// TODO: Add logo of the company
// TODO: when user click on company name should open the company website
const JobCard = (props: IJobCardProps) => {
  return (
    <article className='d-flex flex-column flex-md-row justify-content-between mb-5'>
      <hgroup className='flex-grow-1'>
        <JobCardHeader jobTitle={props.jobTitle} />
        <JobCardSubHeader company={props.company} />
      </hgroup>
      <JobCardBody jobDescription={props.jobDescription} />
      <JobCardFooter startDate={props.startDate} endDate={props.endDate} />
    </article>
  );
};

export default JobCard;

import './education-card-body.css';

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

export default EducationCardBody;

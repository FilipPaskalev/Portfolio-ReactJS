interface IEducationCardHeaderProps {
  Institution: string;
}
const EducationCardHeader = (props: IEducationCardHeaderProps) => {
  return <h3 className='mb-0'>{props.Institution.toUpperCase()}</h3>;
};

export default EducationCardHeader;

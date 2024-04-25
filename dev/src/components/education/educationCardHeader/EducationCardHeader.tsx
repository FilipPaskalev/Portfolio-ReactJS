interface IEducationCardHeaderProps {
  Institution: string;
}
const EducationCardHeader = (props: IEducationCardHeaderProps) => {
  const title = props.Institution.toUpperCase();

  return <h3 className='mb-0'>{title}</h3>;
};

export default EducationCardHeader;

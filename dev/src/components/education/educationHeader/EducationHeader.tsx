interface IEducationHeaderProps {
  title: string;
}

const EducationHeader = (props: IEducationHeaderProps) => {
  const title = props.title.toUpperCase();

  return <h2 className='mb-5'>{title}</h2>;
};

export default EducationHeader;

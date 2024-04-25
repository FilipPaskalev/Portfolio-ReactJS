import './education-card-sub-header.css';

interface IEducationCardSubHeaderProps {
  level: string;
}

const EducationCardSubHeader = (props: IEducationCardSubHeaderProps) => {
  const title = props.level.toUpperCase();

  return <h4 className='subheading mb-3'>{title}</h4>;
};

export default EducationCardSubHeader;

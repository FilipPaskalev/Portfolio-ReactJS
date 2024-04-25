import './my-experience-header.css';

interface IMyExperienceHeaderProps {
  title: string;
}

const MyExperienceHeader = (props: IMyExperienceHeaderProps) => {
  const title = props.title.toUpperCase();

  // TODOs: add animation
  return <h2 className='mb-5'>{title}</h2>;
};

export default MyExperienceHeader;

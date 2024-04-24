//Styles
import './body.css';

interface IBodyProps {
  header: string;
  paragraphs: string[];
}

// TODOs: add animation to icons
// TODOs: add animation to header text || icon || both
const Body = (props: IBodyProps) => {
  return (
    <>
      <h2>{props.header}</h2>
      {props.paragraphs.map((text, index) => (
        <p className='lead mb-5' key={index}>
          {text}
        </p>
      ))}
    </>
  );
};

export default Body;

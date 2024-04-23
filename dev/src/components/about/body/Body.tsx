//Styles
import './body.css';
// Utils
import data from '../../../data/sectionsData.json';

// TODOs: add animation to icons
// TODOs: add animation to header text || icon || both
const Body = () => {
  return (
    <>
      <h2>{data.about.body.header}</h2>
      {data.about.body.paragraphs.map((text, index) => (
        <p className='lead mb-5' key={index}>
          {text}
        </p>
      ))}
    </>
  );
};

export default Body;

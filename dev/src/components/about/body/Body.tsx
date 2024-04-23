//Styles
import './body.css';
// Utils
import FETCH_DATA from '../../../data/sectionsData.json';

// TODOs: add animation to icons
// TODOs: add animation to header text || icon || both
const Body = () => {
  const data = FETCH_DATA.aboutSection.body;

  return (
    <>
      <h2>{data.header}</h2>
      {data.paragraphs.map((text, index) => (
        <p className='lead mb-5' key={index}>
          {text}
        </p>
      ))}
    </>
  );
};

export default Body;

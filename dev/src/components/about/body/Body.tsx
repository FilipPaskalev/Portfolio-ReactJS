//Styles
import './body.css';
// Utils
import data from '../../../data/sectionsData.json';
const Body = () => {
  return (
    <>
      <h2>{data.about.body.header}</h2>
      {data.about.body.paragraphs.map((text) => (
        <p className='lead mb-5'>{text}</p>
      ))}
    </>
  );
};

export default Body;

// Utils
import userInfo from '../../../data/userInfo.json';
import TypeUserInfo from '../../../types/TypeUserInfo';
// Styles
import './header.css';

const Header = () => {
  // TODO: REFACTOR - get data for sectionData.json & replace TypeUserinfo & add Type file to component folder
  const { firstName, lastName } = userInfo as TypeUserInfo;

  return (
    <h1 className='mb-0'>
      {firstName}
      <span className='text-primary'>{lastName}</span>
    </h1>
  );
};

export default Header;

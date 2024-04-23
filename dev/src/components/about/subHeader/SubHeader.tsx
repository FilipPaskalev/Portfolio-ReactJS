// Utils
import userInfo from '../../../data/userInfo.json';
import TypeUserInfo from '../../../types/TypeUserInfo';
//Styles
import './sub-header.css';
// TODOs: add icons to location, phone, email

const SubHeader = () => {
  // TODO: REFACTOR - get data for sectionData.json & replace TypeUserinfo & add Type file to component folder
  const { email, phoneNumber, city, country } = userInfo as TypeUserInfo;

  return (
    <hgroup className='mb-5'>
      <address>{`${city.toLocaleUpperCase()} · ${country.toLocaleUpperCase()}`}</address>
      <a href={`tel:${phoneNumber}`}>
        {`+44 ${phoneNumber.slice(3, 7).toLocaleUpperCase()} ${phoneNumber.slice(7, 13).toLocaleUpperCase()} · `}
      </a>
      <a href={`mailto:${email}`}>{email.toLocaleUpperCase()}</a>
    </hgroup>
  );
};

export default SubHeader;

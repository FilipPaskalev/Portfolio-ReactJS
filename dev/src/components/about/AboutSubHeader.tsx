// Utils
import userInfo from '../../data/userInfo.json';
import TypeUserInfo from '../../types/TypeUserInfo';

const AboutSubHeader = () => {
  const { email, phoneNumber, city, country } = userInfo as TypeUserInfo;
  const textSeparator: string = ' · ';
  return (
    <hgroup className='subheading mb-5'>
      <address>
        {city}
        {textSeparator}
        {country}
      </address>
      <a href={`tel:${phoneNumber}`} className='text-decoration-none'>
        {`+44 ${phoneNumber.slice(3, 7)} ${phoneNumber.slice(7, 13)}`}
        {textSeparator}
      </a>
      <a href={`mailto:${email}`}>{email}</a>
    </hgroup>
  );
};

export default AboutSubHeader;

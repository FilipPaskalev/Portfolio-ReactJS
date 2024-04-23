// Utils
import userInfo from '../../data/userInfo.json';
import TypeUserInfo from '../../types/TypeUserInfo';

const AboutHeader = () => {
  const { firstName, lastName } = userInfo as TypeUserInfo;

  return (
    <h1 className='mb-0'>
      {firstName}
      <span className='text-primary'>{lastName}</span>
    </h1>
  );
};

export default AboutHeader;

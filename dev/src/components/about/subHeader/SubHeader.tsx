//Styles
import './sub-header.css';

interface ISubHeaderProps {
  email: string;
  phoneNumber: string;
  address: {
    city: string;
    country: string;
  };
}

// TODOs: add icons to location, phone, email
const SubHeader = (props: ISubHeaderProps) => {
  const email = props.email.toUpperCase();
  const phoneNumber = props.phoneNumber;
  const phoneNumberFormatted = `+44 ${phoneNumber.slice(3, 7).toLocaleUpperCase()} ${phoneNumber.slice(7, 13).toLocaleUpperCase()}`;
  const city = props.address.city.toUpperCase();
  const country = props.address.country.toUpperCase();

  return (
    <hgroup className='mb-5'>
      <address>{`${city} · ${country}`}</address>
      <a href={`tel:${phoneNumber}`}>
        {phoneNumberFormatted}
        {' · '}
      </a>
      <a href={`mailto:${props.email}`}>{email}</a>
    </hgroup>
  );
};

export default SubHeader;

export type TypeAboutSectionProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: {
    city: string;
    country: string;
  };
  body: {
    header: string;
    paragraphs: string[];
  };
  footer: object[];
};

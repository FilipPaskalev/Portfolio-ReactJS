import Card from "react-bootstrap/Card";

type TEducationCard = {
  education: {
    schoolName: string;
    schoolLocation?: string;
    degree: string;
    major: string;
    graduationDate: string;
    description?: string[];
  };
};

const EducationCard = ({ education }: TEducationCard) => {
  return (
    <Card className="mb-5">
      <Card.Header className="text-left">
        <Card.Title className="mb-1">{education.degree}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted ">
          {education.major} - {education.schoolName}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {education.description?.map((desc, index) => (
            <span key={index}>
              {desc}
              <br />
            </span>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-primary text-end">
        {education.graduationDate}
      </Card.Footer>
    </Card>
  );
};

export default EducationCard;

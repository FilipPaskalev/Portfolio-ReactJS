import Card from "react-bootstrap/Card";
// import Placeholder from "react-bootstrap/Placeholder";

type TExperienceCard = {
  experience: {
    position: string;
    companyName: string;
    companyLocation: string;
    startDate: string;
    endDate: string;
    jobDescription: string[];
  };
};

// TODO implement Placeholder
const ExperienceCard = ({ experience }: TExperienceCard) => {
  return (
    <Card className="mb-5">
      <Card.Header className="text-left">
        <Card.Title className="mb-1">{experience.position}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted ">
          {experience.companyName}, {experience.companyLocation}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {experience.jobDescription.map((desc, index) => (
            <span key={index}>
              {desc}
              <br />
            </span>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-primary text-end">
        {experience.startDate} - {experience.endDate}
      </Card.Footer>
    </Card>
  );
};

export default ExperienceCard;

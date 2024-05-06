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

const ExperienceCard = ({ experience }: TExperienceCard) => {
  return (
    <div className="d-flex justify-content-around">
      <Card className="mb-5">
        <Card.Header className="text-left">
          <Card.Title className="mb-1">{experience.position}</Card.Title>
          <Card.Subtitle className="mb-3 text-muted ">
            {experience.companyName}, {experience.companyLocation}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {experience.jobDescription.map((jobDesc, index) => (
              <p key={index} className="mb-0">
                {jobDesc}
              </p>
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-primary text-end">
          {experience.startDate} - {experience.endDate}
        </Card.Footer>
      </Card>
      {/* <Card className="mb-5">
      // TODO: implement Placeholder
        <Card.Header>
          <Card.Title>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
          </Card.Title>
          <Card.Subtitle>
            <Placeholder as={Card.Subtitle} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={6} />
              <Placeholder xs={6} />
              <Placeholder xs={6} />
            </Placeholder>
          </Card.Text>
        </Card.Body> 
      </Card>
        */}
    </div>
  );
};

export default ExperienceCard;

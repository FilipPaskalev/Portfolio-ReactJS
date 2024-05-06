import Container from "react-bootstrap/Container";
import Navigation from "../../components/navigation/Navigation";
import ExperienceCard from "../../components/cards/experience/ExperienceCard";
import Copyright from "../../components/copyright/Copyright";

const AboutMePage = () => {
  const navMessage: string[] = ["About me", "About me"];

  const experienceData = {
    position: "Software Developer",
    companyName: "Intelitec Solutions",
    companyLocation: "Colorado",
    startDate: "Jan 2017",
    endDate: "Present",
    jobDescription: [
      "Lead developer for all front end projects",
      "Mentor to junior developers",
      "Responsible for the organization of the project",
    ],
  };

  return (
    <Container>
      <Navigation message={navMessage} />

      <h2>Experience</h2>
      <hr />
      <ExperienceCard experience={experienceData} />
      <ExperienceCard experience={experienceData} />
      <ExperienceCard experience={experienceData} />

      <h2>Education</h2>
      <hr />

      <h2>Skills</h2>

      <footer>
        <Copyright name="My name" year={2024} />
      </footer>
    </Container>
  );
};

export default AboutMePage;

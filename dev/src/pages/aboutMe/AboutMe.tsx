import Container from "react-bootstrap/Container";
import Navigation from "../../components/navigation/Navigation";
import ExperienceCard from "../../components/cards/experience/ExperienceCard";
import Copyright from "../../components/copyright/Copyright";
import EducationCard from "../../components/cards/education/EducationCard";

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

  const educationData = {
    schoolName: "University of Colorado Boulder",
    schoolLocation: "Colorado",
    degree: "Bachelor of Science",
    major: "Computer Science",
    graduationDate: "May 2014",
    description: [
      "Here are some of the courses I took:",
      "CSCI 1300 - Software Engineering",
      "CSCI 1320 - Computer Science 2",
      "CSCI 2270 - Data Structures",
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
      <EducationCard education={educationData} />
      <EducationCard education={educationData} />
      <EducationCard education={educationData} />
      <EducationCard education={educationData} />

      <h2>Skills</h2>
      <hr />

      <footer>
        <Copyright name="My name" year={2024} />
      </footer>
    </Container>
  );
};

export default AboutMePage;

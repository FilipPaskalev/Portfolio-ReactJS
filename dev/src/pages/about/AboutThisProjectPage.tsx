import Navigation from "../../components/navigation/Navigation";
import "./about-this-project-page.scss";

const AboutThisProjectPage = () => {
  const navMessage: string[] = [
    "What is about this project?",
    "About this project",
  ];

  return (
    <>
      <Navigation message={navMessage} />
      <p>About this project</p>
      <p>
        Occaecat est cillum reprehenderit ut dolor ut deserunt est. Dolore dolor
        minim officia non id aliqua eiusmod tempor id ullamco. Duis labore sint
        veniam cillum voluptate anim excepteur quis amet sint fugiat deserunt
        Lorem tempor. Minim ut do est ullamco sunt consequat excepteur aliquip
        exercitation sit labore cupidatat duis velit. Cupidatat do aliquip
        incididunt proident nostrud amet incididunt consequat Lorem culpa
        excepteur anim voluptate consectetur.
      </p>
    </>
  );
};

export default AboutThisProjectPage;

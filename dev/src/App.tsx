// Components
import Navigation from './components/navigation/Navigation';
import AboutMe from './components/aboutMe/AboutMe';
import MyExperience from './components/MyExperience/MyExperience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Interests from './components/interests/Interests';
import Awards from './components/awards/Awards';

const App = () => {
  return (
    <>
      <Navigation />
      <AboutMe />
      <MyExperience />
      <Education />
      <Skills />
      <Interests />
      <Awards />
    </>
  );
};

export default App;

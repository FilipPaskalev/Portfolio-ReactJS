// Components
import Navigation from './components/navigation/Navigation';
import AboutMe from './components/about/AboutMe';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Interests from './components/interests/Interests';
import Awards from './components/awards/Awards';

const App = () => {
  return (
    <>
      <Navigation />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Awards />
    </>
  );
};

export default App;

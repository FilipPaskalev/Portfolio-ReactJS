// Components
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Interests from './components/interests/Interests';
import Awards from './components/awards/Awards';

const App = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Awards />
    </div>
  );
};

export default App;

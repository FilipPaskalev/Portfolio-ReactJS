import { HashRouter, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

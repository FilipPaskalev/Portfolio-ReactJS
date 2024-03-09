import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import PageNotFound from './pages/pageNotFound';
import ProjectPage from './pages/project';
import ProjectsPage from './pages/projects';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/*" element={<PageNotFound />} />
				<Route path="/project" element={<ProjectPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

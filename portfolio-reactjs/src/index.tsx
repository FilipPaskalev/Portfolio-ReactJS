import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const rootElement = document.getElementById("root");

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

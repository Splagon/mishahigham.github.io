import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "@pages/Home/index";
import Projects from "@pages/Projects/index";
import PersonalExperiences from "@pages/PersonalExperiences/index";
import NotFound from "@pages/NotFound/index";
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience/" element={<PersonalExperiences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

//        <Route path="/projects/footy-rush" element={<Projects />} />


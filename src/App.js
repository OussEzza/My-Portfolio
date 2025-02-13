import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import EducationPage from "./components/EducationPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ActionBar from "./components/ActionBar";
import PageNotFound from "./components/PageNotFound";
import ThankYouPage from "./components/ThankYouPage";

import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
  return (
    <>
      <NavBar />
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="educations">
        <EducationPage />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <ActionBar />
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Oussama EZZAHRI. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
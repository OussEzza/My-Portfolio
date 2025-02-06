import React from "react";
import NavBar from "./components/NavBar";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import EducationPage from "./components/EducationPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
// import FooterPage from "./components/FooterPage";
import ActionBar from "./components/ActionBar";

import "./index.css";

function App() {
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
      {/* <FooterPage /> */}
    </>
  );
}

export default App;

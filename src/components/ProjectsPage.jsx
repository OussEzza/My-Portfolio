import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "The e-commerce website",
      detailed_description:
        "An interactive e-commerce web application tailored for gaming enthusiasts. The application provides a seamless shopping experience for gaming products including keyboards, headphones, mice, gaming consoles, and accessories..",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveLink: null,
      repoLink: "https://github.com/OussEzza/e-commerce-web-application",
      image: [
        "GamingPlanet/GamingPlanet1.png",
        "GamingPlanet/GamingPlanet2.png",
        "GamingPlanet/GamingPlanet3.png",
        "GamingPlanet/GamingPlanet4.png",
        "GamingPlanet/GamingPlanet5.png",
        "GamingPlanet/GamingPlanet6.png",
      ],
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website",
      detailed_description:
        "A personal portfolio showcasing my skills, experiences and projects, built with modern technologies.",
      techStack: ["React.js", "Chakra UI", "Tailwind CSS"],
      liveLink: "https://oussamaezzahri.vercel.app/",
      repoLink: "https://github.com/OussEzza/My-Portfolio",
      image: [
        "Portfolio/Portfolio1.png",
        "Portfolio/Portfolio2.png",
        "Portfolio/Portfolio3.png",
      ],
    },
    {
      title: "Student Absence Management System",
      description: "A facial recognition-based attendance management system.",
      detailed_description:
        "An intelligent system that automates student attendance tracking using facial recognition. It captures student faces, verifies identities, and marks attendance in real time. The system enhances efficiency, prevents proxy attendance, and integrates with a database for record management.",
      techStack: [
        "Python",
        "OpenCV",
        "Dlib",
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
      liveLink: null,
      repoLink:
        "https://github.com/OussEzza/Management_of_student_absences_using_facial_recognition",
      image: [
        "Presence/Presence2.png",
        "Presence/Presence3.png",
        "Presence/Presence1.png",
      ],
    },
    {
      title: "Training Management System",
      description:
        "A comprehensive platform to manage training programs and agents.",
      detailed_description:
        "A responsive training management system that helps administrators manage agents, training programs, and track progress through an intuitive interface.",
      techStack: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
      liveLink: null,
      repoLink: "https://github.com/OussEzza/training-management-frontend",
      image: [
        "Training/Training1.png",
        "Training/Training2.png",
        "Training/Training3.png",
        "Training/Training4.png",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-1">PROJECTS</h1>
        <div className="w-20 h-2 bg-sky-500 mb-6"></div>
        <p className="text-lg md:text-xl w-1/2 text-center leading-relaxed">
          Here you will find some of the personal and school projects that I
          created.
        </p>
      </div>
      <div className="flex flex-col justify-center px-4 2xl:px-30 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {projects.map((project, projectIndex) => (
            <ProjectCard key={projectIndex} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

// Project Card Component with Image Slider
function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.image.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(nextImage, 3000);

  //   return () => clearInterval(interval);
  // }, [currentImageIndex]);

  return (
    <div className="rounded-lg shadow-xl overflow-hidden w-full md:w-4/5 mx-auto">
      {/* Image Slider */}
      <div className="relative">
        <img
          src={project.image[currentImageIndex]}
          alt={`${project.title} Screenshot`}
          className="object-cover"
        />
        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-3xl"
        >
          ‹
        </button>
        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-3xl"
        >
          ›
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <Accordion allowToggle className="w-full">
          <AccordionItem sx={{ border: "none" }}>
            <h2>
              <AccordionButton sx={{ padding: 0 }}>
                <Box flex="1" textAlign="left" sx={{ padding: 0, margin: 0 }}>
                  {project.description}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {project.detailed_description}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-wrap gap-2 mb-4 mt-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-sky-500 text-white text-sm px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {/* {project.liveLink !== null ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition"
            >
              Live Demo
            </a>
          ) : (
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition pointer-events-none cursor-not-allowed"
              aria-label="No live demo available for this project"
            >
              No Live Demo
            </a>
          )} */}

          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

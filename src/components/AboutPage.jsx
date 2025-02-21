import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faVuejs,
  faPhp,
  faLaravel,
  faGitAlt,
  faGithub,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const skills = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3Alt },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Tailwind CSS", icon: "/Tailwind_CSS.svg" },
    { name: "JavaScript", icon: faJs },
    { name: "React.js", icon: faReact },
    { name: "Vue.js", icon: faVuejs },
    { name: "PHP", icon: faPhp },
    { name: "Laravel", icon: faLaravel },
    { name: "RDBMS", icon: faDatabase },
    { name: "VS Code", icon: "/vscode.svg" },
    { name: "Git", icon: faGitAlt },
    { name: "GitHub", icon: faGithub },
    { name: "Linux", icon: faLinux },
  ];

  return (
    <div className="flex flex-col items-center justify-center 2xl:px-30 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-1">ABOUT ME</h1>
      <div className="w-20 h-2 bg-sky-500 mb-6"></div>
      <p className="text-lg md:text-xl w-1/2 text-center leading-relaxed">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:p-8 rounded-lg">
        {/* Left Column */}
        <div className="flex flex-col items-center p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-4">
            Get to know me!
          </h2>
          <div className="justify-start items-center md:items-start py-8">
            <p class="text-lg md:text-xl p-4 text-justify leading-relaxed">
              <p>
                👋 Hi, I'm <strong>Oussama EZZAHRI</strong>, a passionate{" "}
                <strong>Web Developer</strong> and{" "}
                <strong>Computer Science Student</strong> specializing in{" "}
                <strong>Full-Stack Development</strong>. Currently, I'm pursuing
                my{" "}
                <strong>
                  Licence Professionnel in Computer Science and Applied
                  Mathematics
                </strong>{" "}
                at <strong>University Chouaib Doukkali</strong>.
              </p>
              <br />
              <p>
                🚀 I love building modern, user-friendly, and scalable web
                applications. My tech stack includes{" "}
                <strong>React.js, Laravel, and Tailwind CSS</strong>, and I
                enjoy creating clean, responsive, and interactive user
                interfaces using <strong>Chakra UI</strong>. I'm
                always eager to learn new technologies and improve my skills.
              </p>
              <br />
              <p>
                📌 I’m currently looking for a <strong>PFE internship</strong>{" "}
                in <strong>web development</strong> to apply my skills in a
                professional setting and gain hands-on experience. If you’re
                looking for a dedicated and enthusiastic developer, let’s
                connect!
              </p>
              <br />
              <p>
                📩 <strong>Feel free to reach out:</strong>
              </p>
              <ul>
                <li>
                  📧 <strong>Email:</strong> ezzahri.o021@ucd.ac.ma
                </li>
                <li>
                  📍 <strong>Location:</strong> El Jadida, Morocco
                </li>
              </ul>
            </p>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Skills and Tools i use
          </h2>
          <SimpleGrid columns={{ base: 2, xl: 3, "2xl": 4 }} spacing={6}>
            {skills.map((skill, index) => (
              <Box
                key={index}
                bg="white"
                _dark={{ bg: "gray.800", color: "white" }}
                p="4"
                boxShadow="md"
                borderRadius="md"
                textAlign="center"
                className="transition-all w-36 md:w-40 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-600"
              >
                {typeof skill.icon === "string" ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 mx-auto"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-blue-500 text-5xl"
                  />
                )}
                <Text mt="2" fontSize="xl" fontWeight="bold">
                  {skill.name}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}

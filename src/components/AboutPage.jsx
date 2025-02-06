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
    <div className="flex flex-col items-center justify-center md:px-40 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-1">ABOUT ME</h1>
      <div className="w-20 h-2 bg-sky-500 mb-6"></div>
      <p className="text-lg md:text-xl w-1/2 text-center leading-relaxed">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 rounded-lg dark:bg-gray-900">
        {/* Left Column */}
        <div className="flex flex-col items-center p-4 md:p-8">
          <h2 className="text-3xl font-bold text-center md:text-left mb-4 dark:text-gray-200">
            Get to know me!
          </h2>
          <div className="justify-start items-center md:items-start py-8">
            <p class="text-lg md:text-xl text-justify leading-relaxed dark:text-gray-400">
              I'm a <strong>Software Developer</strong> specializing in{" "}
              <strong>Web Development</strong>, with expertise in{" "}
              <strong>React</strong>, <strong>Vue.js</strong>, and{" "}
              <strong>Laravel</strong>. I focus on building user-friendly,
              responsive web applications that follow best practices and deliver
              high-quality solutions.
              <br />
              <br />
              Currently pursuing a{" "}
              <strong>Professional Bachelor's Degree</strong> in{" "}
              <strong>Computer Engineering and Applied Mathematics</strong>, I
              am refining my skills in both <strong>frontend</strong> and{" "}
              <strong>backend</strong> development through various academic
              projects.
              <br />
              <br />I enjoy sharing my knowledge on{" "}
              <strong>Web Development</strong> to support others in the{" "}
              <strong>Dev Community</strong>. Feel free to connect with me on{" "}
              <strong>
                <a
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
                  href="https://www.linkedin.com/in/oussama-ezzahri/"
                  targe="_blank"
                >
                  LinkedIn
                </a>
              </strong>
              . I'm also open to <strong>job opportunities</strong> where I can
              contribute and grow. Don't hesitate to reach out!
            </p>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col items-center justify-center p-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Skills and Tools i use
          </h2>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
            {skills.map((skill, index) => (
              <Box
                key={index}
                bg="white"
                _dark={{ bg: "gray.800", color: "white" }}
                p="4"
                // w="160px"
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

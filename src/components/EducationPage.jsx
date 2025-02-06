import { Box, Stack, Text, Divider, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

const educationData = [
  {
    date: "In Progress",
    title: "Professional Bachelor's Degree in Computer Engineering and Applied Mathematics",
    institution: "Faculty of Multidisciplinary Studies, El Jadida",
  },
  {
    date: "2022 - 2024",
    title: "University Diploma in Computer Engineering (DUT)",
    institution: "Higher School of Technology",
  },
  {
    date: "2022",
    title: "Baccalaureate in Physical Sciences",
    institution: "Dokala High School, Sidi Bennour, Arba Aounate",
  },
];

const experienceData = [
  {
    date: "April 2, 2024 -> May 31, 2024",
    title: "Development of a Web Application for Employee Training Management (Laravel, Vue.js, MySQL, Bootstrap)",
    institution: "OCP Group, Benguérir",
  },
  {
    date: "August 2023",
    title: "Development of a Mobile Application for Managing Operations Within the Company (PowerApps)",
    institution: "OCP Group, Benguérir",
  },
];

const EducationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-40 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-1">EDUCATION & EXPERIENCE</h1>
      <div className="w-20 h-2 bg-sky-500 mb-6"></div>
      <p className="text-lg md:text-xl w-1/2 text-center leading-relaxed">
        Below are my educational background and professional experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 rounded-lg">
        {/* Education Section */}
        <div className="flex flex-col items-center md:items-start p-4 md:p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
          <Stack spacing={4} p={6} maxW="600px" mx="auto">
            {educationData.map((edu, index) => (
              <HStack key={index} align="start" spacing={4} position="relative">
                <VStack spacing={0} align="center">
                  <Icon as={FaCircle} boxSize={3} color="blue.500" />
                  {index !== educationData.length - 1 && (
                    <Divider
                      orientation="vertical"
                      height="100px"
                      borderWidth="1px"
                      borderColor="gray.400"
                    />
                  )}
                </VStack>

                <Box>
                  <Text fontSize="sm" fontWeight="bold" color="gray.600">
                    {edu.date}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    {edu.title}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {edu.institution}
                  </Text>
                </Box>
              </HStack>
            ))}
          </Stack>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col items-center md:items-start p-4 md:p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
          <Stack spacing={4} p={6} maxW="600px" mx="auto">
            {experienceData.map((exp, index) => (
              <HStack key={index} align="start" spacing={4} position="relative">
                <VStack spacing={0} align="center">
                  <Icon as={FaCircle} boxSize={3} color="blue.500" />
                  {index !== experienceData.length - 1 && (
                    <Divider
                      orientation="vertical"
                      height="100px"
                      borderWidth="1px"
                      borderColor="gray.400"
                    />
                  )}
                </VStack>

                <Box>
                  <Text fontSize="sm" fontWeight="bold" color="gray.600">
                    {exp.date}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    {exp.title}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {exp.institution}
                  </Text>
                </Box>
              </HStack>
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;

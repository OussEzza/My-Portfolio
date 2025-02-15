import React from "react";
// import { Link } from "react-scroll"; 
import { Flex, IconButton, useColorMode, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaHome, FaEnvelope } from "react-icons/fa";

export default function ActionBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      position="fixed"
      bottom="6"
      left="50%"
      transform="translateX(-50%)"
      p={4}
      zIndex={50}
    >
      <Flex
        justify="center"
        align="center"
        gap={6}
        bg={isDark ? "gray.800" : "white"}
        shadow="xl"
        p={4}
        rounded="full"
        className="transition-all duration-300"
      >
        {/* Home Link */}
        <a
          href="/#"
          className="hover:text-blue-500 transition-transform transform hover:scale-150"
        >
          <FaHome
            size={20}
            className={
              isDark
                ? "text-white hover:text-blue-500"
                : "text-gray-900 hover:text-blue-500"
            }
          />
        </a>

        <div className="h-8 w-1 bg-gray-600 m-0 p-0"></div>

        {/* GitHub Link */}
        <a
          href="https://github.com/OussEzza"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform transform hover:scale-150"
        >
          <FaGithub
            size={20}
            className={
              isDark
                ? "text-white hover:text-blue-500"
                : "text-gray-900 hover:text-blue-500"
            }
          />
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/oussama-ezzahri/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform transform hover:scale-150"
        >
          <FaLinkedin
            size={20}
            className={
              isDark
                ? "text-white hover:text-blue-500"
                : "text-gray-900 hover:text-blue-500"
            }
          />
        </a>

        {/* Email Link */}
        <a
          href="mailto:ezzahri.o021@ucd.ac.ma"
          className="hover:text-blue-500 transition-transform transform hover:scale-150"
        >
          <FaEnvelope
            size={20}
            className={
              isDark
                ? "text-white hover:text-blue-500"
                : "text-gray-900 hover:text-blue-500"
            }
          />
        </a>

        <div className="h-8 w-1 bg-gray-600 m-0 p-0"></div>

        {/* Dark Mode Toggle */}
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
          className="transition-transform transform hover:scale-150 hover:text-blue-500"
          color={isDark ? "yellow.400" : "gray.800"}
        />
      </Flex>
    </Box>
  );
}

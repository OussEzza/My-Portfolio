import React, { useState } from "react";
import { Link } from "react-scroll"; // Import react-scroll for smooth scrolling
import { Flex, IconButton, useColorMode, Avatar } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto">
      <div className="fix" style={{ padding: "1rem" }}>
        <Flex justify="space-between" align="center">
          {/* Logo Section */}
          <a
            href="/"
            className="flex items-center space-x-3 text-2xl transition-all transform hover:-translate-y-1 hover:text-blue-500 font-extrabold"
          >
            <Avatar name="Oussama EZZAHRI" src="./my_picture.png" />
            <span>Oussama EZZAHRI</span>
          </a>

          {/* Desktop Links Section */}
          <ul className="hidden sm:flex gap-10">
            <li className="hover:text-gray-500">
              <Link to="home" smooth={true} duration={100}>
                Home
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="about" smooth={true} duration={100}>
                About
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="educations" smooth={true} duration={100}>
                Educations & Experience
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="projects" smooth={true} duration={100}>
                Projects
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link to="contact" smooth={true} duration={100}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Dark Mode Toggle and Hamburger Button */}
          <div className="flex items-center gap-4">
            <a
              className="px-6 py-3 rounded-3xl bg-blue-500 text-2xl md:text-lg text-white hover:bg-blue-600 transition-all hidden sm:inline"
              href="EZZAHRI-Oussama-cv.pdf"
              download
            >
              <i class="fa-solid fa-download"></i> Download CV
            </a>
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color={colorMode === "dark" ? "yellow.400" : "gray.800"}
              _hover={{ bg: colorMode === "dark" ? "gray.700" : "gray.300" }}
            />
            <button className="sm:hidden text-2xl" onClick={handleMenuToggle}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </Flex>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden flex flex-col items-center gap-4 pt-4 rounded-lg shadow-md">
            <ul className="">
              <li className="hover:text-gray-500">
                <Link
                  to="home"
                  smooth={true}
                  duration={100}
                  onClick={handleMenuToggle}
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-gray-500">
                <Link
                  to="about"
                  smooth={true}
                  duration={100}
                  onClick={handleMenuToggle}
                >
                  About
                </Link>
              </li>
              <li className="hover:text-gray-500">
                <Link
                  to="educations"
                  smooth={true}
                  duration={100}
                  onClick={handleMenuToggle}
                >
                  Educations & Experience
                </Link>
              </li>
              <li className="hover:text-gray-500">
                <Link
                  to="projects"
                  smooth={true}
                  duration={100}
                  onClick={handleMenuToggle}
                >
                  Projects
                </Link>
              </li>
              <li className="hover:text-gray-500">
                <Link
                  to="contact"
                  smooth={true}
                  duration={100}
                  onClick={handleMenuToggle}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

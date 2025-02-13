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
    <nav className=" top-0 left-0 w-full">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-3">
          <Flex justify="space-between" align="center">
          {/* Logo Section */}
          <a
            href="/"
            className="flex items-center space-x-3 text-2xl transition-all transform hover:-translate-y-1 hover:text-blue-500 font-extrabold"
          >
            <Avatar name="Oussama EZZAHRI" src="./My_Pic.png" />
            <span>Oussama EZZAHRI</span>
          </a>

          {/* Desktop Links Section */}
          <ul className="hidden md:flex gap-10">
            {["home", "about", "educations", "projects", "contact"].map(
              (section) => (
                <li key={section} className="hover:text-gray-500">
                  <Link to={section} smooth={true} duration={100}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right Section: CV, Dark Mode, Menu */}
          <div className="flex items-center gap-4">
            {/* CV Button (Hidden on Mobile) */}
            <a
              className="px-6 py-3 rounded-3xl bg-blue-500 text-2xl md:text-lg text-white hover:bg-blue-600 transition-all hidden xl:inline"
              href="EZZAHRI-Oussama-cv.pdf"
              download
            >
              <i className="fa-solid fa-download"></i> Download CV
            </a>

            {/* Dark Mode Toggle */}
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color={colorMode === "dark" ? "yellow.400" : "gray.800"}
              _hover={{ bg: colorMode === "dark" ? "gray.700" : "gray.300" }}
            />

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl" onClick={handleMenuToggle}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </Flex>

        {/* Mobile Menu (Animated) */}
        <div
          className={`md:hidden transition-all duration-300 shadow-lg ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <ul className="flex flex-col items-center gap-3 text-lg pb-2 pt-4 rounded-lg shadow-md">
            {["home", "about", "educations", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={100}
                    onClick={handleMenuToggle}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

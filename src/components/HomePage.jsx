"use client";
import React from "react";
// import { Button } from "@chakra-ui/react"
// import {
//   ActionBarContent,
//   ActionBarRoot,
//   ActionBarSelectionTrigger,
//   ActionBarSeparator,
// } from "./ui/action-bar"
import { Link } from "react-scroll"; // Import react-scroll for smooth scrolling

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Oussama</h1>
      <p className="text-2xl text-sky-500 dark:text-gray-300">
        A passionate Web Developer
      </p>
      <div>
        <button className="m-3 px-6 py-3 rounded-3xl bg-blue-500 text-white hover:bg-blue-600 transition-all">
          <Link to="projects" smooth={true} duration={100}>
            View My Work
          </Link>
        </button>

        <a
          className="px-6 py-4 rounded-3xl bg-blue-500 text-white hover:bg-blue-600 transition-all"
          href="EZZAHRI-Oussama-cv.pdf"
          download
        >
          <i class="fa-solid fa-download"></i> Download CV
        </a>
      </div>

      {/* <ActionBarRoot open={true}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>2 selected</ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm">
            Delete
          </Button>
          <Button variant="outline" size="sm">
            Share
          </Button>
        </ActionBarContent>
      </ActionBarRoot> */}
    </section>
  );
}

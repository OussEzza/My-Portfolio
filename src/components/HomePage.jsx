"use client";
import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <img
        src="./My_Pic.png"
        alt="Oussama Ezzahri"
        className="w-40 h-40 rounded-full mb-4 border-4 border-blue-500 shadow-2xl"
      />

      <h1 className="text-5xl font-extrabold mb-4">
        Hi, I'm Oussama
      </h1>

      <TypeAnimation
        sequence={[
          "A Web Developer",
          1000,
          "A Computer Science Student",
          1000,
          "A Tech Enthusiast",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-3xl text-sky-500"
      />

      <p className="text-lg mt-4 max-w-lg">
        I specialize in building modern web applications with React and Laravel.
      </p>

      <div className="my-6">
        <Link to="projects" smooth={true} duration={100}>
          <button className="m-3 px-2 md:px-6 py-3 rounded-3xl bg-blue-500 text-white hover:bg-blue-600 transition-all">
            View My Work
          </button>
        </Link>

        <a
          className="px-2 md:px-6 py-4 rounded-3xl bg-blue-500 text-white hover:bg-blue-600 transition-all"
          href="EZZAHRI-Oussama-cv.pdf"
          download
        >
          <i className="fa-solid fa-download"></i> Download CV
        </a>
      </div>
    </section>
  );
}

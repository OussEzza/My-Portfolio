import React from "react";
import { useColorMode } from "@chakra-ui/react";

export default function Example() {
  const { colorMode } = useColorMode(); // Get the current color mode

  return (
    <main
      className={`grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 ${
        colorMode === "dark" ? "bg-gray-800" : "bg-white"
      }`} // Conditional background color
    >
      <div className="text-center">
        <p
          className={`text-base font-semibold ${
            colorMode === "dark" ? "text-indigo-400" : "text-indigo-600"
          }`} // Conditional text color for 404
        >
          404
        </p>
        <h1
          className={`mt-4 text-balance text-5xl font-semibold tracking-tight ${
            colorMode === "dark" ? "text-white" : "text-gray-900"
          } sm:text-7xl`}
        >
          Page not found
        </h1>
        <p
          className={`mt-6 text-pretty text-lg font-medium ${
            colorMode === "dark" ? "text-gray-400" : "text-gray-500"
          } sm:text-xl/8`}
        >
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="."
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a
            href="."
            className={`text-sm font-semibold ${
              colorMode === "dark" ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        popUp: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        popUp: "popUp 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable class-based dark mode
};

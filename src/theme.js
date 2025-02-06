// Import `extendTheme` from Chakra UI
import { extendTheme } from "@chakra-ui/react";

// Define your theme configuration
const config = {
  initialColorMode: "dark", // Set the default color mode ("light" or "dark")
  useSystemColorMode: false, // Use the user's system color mode preference
};

// Customize the theme
const customTheme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "white" : "black",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
  colors: {
    brand: {
      50: "#f5f7ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1", // Main brand color
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif", // Custom font for headings
    body: "Inter, sans-serif", // Custom font for body text
  },
});

export default customTheme;

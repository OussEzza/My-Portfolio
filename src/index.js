import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App";

// Custom theme (optional)
const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Default to dark mode
    useSystemColorMode: false, // Disable system preference
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

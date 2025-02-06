import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme"; // Path to your theme file
import App from "./App";

function Root() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  );
}

export default Root;

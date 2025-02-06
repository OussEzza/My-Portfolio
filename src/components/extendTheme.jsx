import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.100",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "blackAlpha.900",
      },
    }),
  },
});

export default theme;

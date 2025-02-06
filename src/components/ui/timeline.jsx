import { Box, VStack } from "@chakra-ui/react";

export const TimelineRoot = ({ children }) => {
  return <VStack align="start" spacing={4}>{children}</VStack>;
};

export const TimelineItem = ({ children }) => {
  return (
    <Box
      borderLeft="2px solid"
      borderColor="gray.300"
      pl={4}
      py={2}
      width="100%"
    >
      {children}
    </Box>
  );
};

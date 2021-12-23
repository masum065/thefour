import { Box, useColorMode } from '@chakra-ui/react';

export const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'black' };

  const color = { light: 'black', dark: 'white' };
  return (
    <Box
      overflowX='hidden'
      // direction='column'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      {children}
    </Box>
  );
};

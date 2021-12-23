import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    primary: '#C1FF3F',
    black: '#050505',
    pink: '#ECC4D7',
    blue: '#9CBEFF',
    gray: '#E5E5E5',
    brown: '#C19570',
  },
  sizes: {
    lg: '1132px',
  },

  fonts: {
    heading: 'Girott',
    body: "'Grotesk Regular', sans-serif",
  },
  breakpoints,
});

export default theme;

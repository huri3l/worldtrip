import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#FFBA08',
    },
    gray: {
      '900': '#47585B',
      '500': '#999999',
      '100': '#F5F8FA',
      '300': '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        color: 'gray.900',
      },
    },
  },
});

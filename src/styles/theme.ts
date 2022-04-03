import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#47585B',
      '200': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA',
    },
    yellow: {
      '500': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
      '.swiper-button-next, .swiper-button-prev': {
        color: 'yellow.500',
        padding: '0 30px'
      },
      '.swiper-pagination-bullet': {
        background: 'gray.200',
        opacity: '1'
      },
      '.swiper-pagination-bullet-active': {
        background: 'yellow.500',
      },
    },
  },
});

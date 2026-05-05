'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5e6ff',
      100: '#d9b3ff',
      200: '#bd80ff',
      300: '#a14dff',
      400: '#851aff',
      500: '#1e0a3c', // dark purple from logo
      600: '#190833',
      700: '#14062a',
      800: '#0f0421',
      900: '#0a0218',
    },
    accent: {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#f5922a', // orange from logo
      600: '#e68523',
      700: '#d4771c',
      800: '#c26915',
      900: '#b05b0e',
    },
    navy: {
      50: '#e8e6f0',
      100: '#c5c0d9',
      200: '#9f97c0',
      300: '#796ea7',
      400: '#5d4f94',
      500: '#241354', // deep navy purple
      600: '#1f104a',
      700: '#1a0d3f',
      800: '#150a35',
      900: '#10072b',
    },
  },
  fonts: {
    heading: `'Prompt', 'Noto Sans Thai', sans-serif`,
    body: `'Prompt', 'Noto Sans Thai', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'full',
      },
      variants: {
        solid: {
          bg: 'accent.500',
          color: 'white',
          _hover: {
            bg: 'accent.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          transition: 'all 0.3s ease',
        },
        outline: {
          borderColor: 'accent.500',
          color: 'accent.500',
          _hover: {
            bg: 'accent.500',
            color: 'white',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

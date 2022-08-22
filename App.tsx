import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/global/styles/theme';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme[useColorScheme() || 'light']}>
      <Home />
    </ThemeProvider>
  );
}

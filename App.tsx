import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/global/styles/theme';

import { SignUp } from './src/screens/SignUp';

export default function App() {
  return (
    <ThemeProvider theme={theme[useColorScheme() || 'light']}>
      <SignUp />
      <StatusBar
        barStyle={
          useColorScheme() === 'dark' ? 'light-content' : 'dark-content'
        }
        translucent
        backgroundColor="transparent"
      />
    </ThemeProvider>
  );
}

import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './src/context/AuthContext';
import { theme } from './src/global/styles/theme';
import { AuthRoutes } from './src/routes/auth.routes';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme[useColorScheme() || 'light']}>
        <NavigationContainer>
          <AuthRoutes />
        </NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      </ThemeProvider>
    </AuthProvider>
  );
}

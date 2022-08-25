import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';

export type AppScreens = {
  Home: undefined;
};

const App = createBottomTabNavigator<AppScreens>();

export const AppRoutes = () => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
);

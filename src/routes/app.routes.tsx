import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';

const App = createBottomTabNavigator();

export const AppRoutes = () => (
  <App.Navigator>
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
);

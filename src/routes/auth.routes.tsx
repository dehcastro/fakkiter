import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const Auth = createStackNavigator();

export const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

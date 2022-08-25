import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

export type AuthScreens = {
  SignIn: undefined;
  SignUp: undefined;
};

const Auth = createStackNavigator<AuthScreens>();

export const AuthRoutes = () => (
  <Auth.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

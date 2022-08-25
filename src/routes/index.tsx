import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { useAuth } from '../context/AuthContext';

export const Routes = () => {
  const { user, loading } = useAuth();
  const theme = useTheme();

  if (loading) {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.primary.text} />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

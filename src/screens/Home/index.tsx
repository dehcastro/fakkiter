import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import { Container } from './styles';

export const Home = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Text>Home</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

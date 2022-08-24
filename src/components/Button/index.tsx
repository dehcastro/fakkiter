import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { ButtonText, Container, ActivityIndicatorView } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading: boolean;
}

export const Button = ({ title, loading, ...rest }: ButtonProps) => (
  <Container {...rest}>
    {loading && (
      <ActivityIndicatorView>
        <ActivityIndicator size="small" color="#333" />
      </ActivityIndicatorView>
    )}
    <ButtonText>{title}</ButtonText>
  </Container>
);

import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, StyledTextInput } from './styles';

export const Input = ({ ...rest }: TextInputProps) => {
  return (
    <Container>
      <StyledTextInput {...rest} />
    </Container>
  );
};

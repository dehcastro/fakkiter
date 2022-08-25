import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Container, StyledTextInput } from './styles';

export const Input = forwardRef<TextInput, TextInputProps>((props, ref) => (
  <Container>
    <StyledTextInput {...props} ref={ref} />
  </Container>
));

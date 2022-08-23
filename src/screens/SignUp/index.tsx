import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Button,
} from 'react-native';

import FakkiterLogo from '../../assets/img/fakitter-logo.svg';
import { Input } from '../../components/Input';
import { Container, Brand, Form, KeyboardAvoidingView } from './styles';

export const SignUp = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Brand>
          <FakkiterLogo fill="#fff" width={80} height={80} />
        </Brand>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Form>
            <Input placeholder="Nome" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button title="Bla" />
          </Form>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};

import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import GoBackIcon from '../../assets/img/go-back-icon.svg';
import { Input } from '../../components/Input';
import { Container, Brand, Form } from './styles';

export const SignUp = () => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Brand>
        <GoBackIcon width={80} height={80} />
      </Brand>

      <Form>
        <Input
          placeholder="Nome"
          maxLength={50}
          keyboardType="default"
          returnKeyType="next"
        />

        <Input placeholder="Username" />

        <Input placeholder="Email" keyboardType="email-address" />

        <Input placeholder="Password" keyboardType="numeric" />
      </Form>
    </Container>
  </TouchableWithoutFeedback>
);

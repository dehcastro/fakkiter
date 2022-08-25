import React, { useCallback, useRef, useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FakkiterLogo from '../../assets/img/fakkiter-logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../context/AuthContext';

import {
  Container,
  Brand,
  Form,
  SignUpButton,
  SignUpButtonIcon,
  SignUpButtonText,
} from './styles';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const passwordInputRef = useRef<TextInput>(null);

  const { signIn } = useAuth();
  const navigation = useNavigation();

  const handleSignIn = useCallback(async () => {
    setLoading(true);

    try {
      await signIn({ email, password });

      setLoading(false);
    } catch {
      setLoading(false);

      Alert.alert('Shiiiii!', 'Não foi possível logar', [
        {
          text: 'Tentar novamente',
        },
      ]);
    }
  }, [password, email, signIn]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Brand>
          <FakkiterLogo width={100} height={100} fill="#fff" />
        </Brand>

        <Form>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />

          <Input
            ref={passwordInputRef}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="send"
            secureTextEntry
            onSubmitEditing={handleSignIn}
          />

          <Button title="Logar" loading={loading} onPress={handleSignIn} />

          <SignUpButton onPress={() => navigation.navigate('SignUp')}>
            <SignUpButtonIcon />
            <SignUpButtonText>Criar minha conta</SignUpButtonText>
          </SignUpButton>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

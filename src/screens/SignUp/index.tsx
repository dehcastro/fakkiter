import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FakkiterLogo from '../../assets/img/fakkiter-logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { register } from '../../services/auth';
import {
  Container,
  Brand,
  Form,
  SignInButton,
  SignInButtonIcon,
  SignInButtonText,
} from './styles';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = useCallback(async () => {
    setLoading(true);

    try {
      await register({ name, username, password, email });

      setLoading(false);

      Alert.alert('Tudo Certo!', 'Seu cadastro foi feito com sucesso', [
        {
          text: 'Ir para login',
          onPress: () => console.log('foi para a  tela de login'),
        },
      ]);
    } catch {
      Alert.alert('Tudo Errado!', 'Seu cadastro não foi feito', [
        {
          text: 'Tentar novamente',
        },
      ]);
    }
  }, [name, username, password, email]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Brand>
          <FakkiterLogo width={80} height={80} fill="#fff" />
        </Brand>

        <Form>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Nome"
            maxLength={50}
            keyboardType="default"
            returnKeyType="next"
          />

          <Input
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            autoCapitalize="none"
          />

          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry
          />

          <Button title="Cadastrar" loading={loading} onPress={handleSignUp} />

          <SignInButton onPress={() => navigation.navigate('SignIn' as never)}>
            <SignInButtonIcon />
            <SignInButtonText>Voltar</SignInButtonText>
          </SignInButton>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

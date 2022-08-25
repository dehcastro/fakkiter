import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import FakkiterLogo from '../../assets/img/fakkiter-logo.svg';
import { Button } from '../../components/Button';
import { register } from '../../services/auth';
import {
  Container,
  Brand,
  Form,
  SignInButton,
  SignInButtonIcon,
  SignInButtonText,
} from './styles';
import { InputControlled } from '../../components/InputControlled';

interface FormData {
  [key: string]: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  username: Yup.string().required('Nome de usuário é obrigatório'),
  email: Yup.string()
    .email('Email não é válido')
    .required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

export const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignUp = useCallback(
    async ({ name, username, email, password }: FormData) => {
      setLoading(true);

      try {
        await register({ name, username, password, email });

        setLoading(false);

        Alert.alert('Tudo Certo!', 'Seu cadastro foi feito com sucesso', [
          {
            text: 'Ir para login',
            onPress: () => navigation.navigate('SignIn' as never),
          },
        ]);
      } catch {
        Alert.alert('Tudo Errado!', 'Seu cadastro não foi feito', [
          {
            text: 'Tentar novamente',
          },
        ]);
      }
    },
    [navigation],
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Brand>
          <FakkiterLogo width={80} height={80} fill="#fff" />
        </Brand>

        <Form>
          <InputControlled
            control={control}
            name="name"
            placeholder="Nome"
            autoCapitalize="words"
            maxLength={50}
            keyboardType="default"
            returnKeyType="next"
            error={errors.name && errors.name.message}
          />

          <InputControlled
            control={control}
            name="username"
            placeholder="Usuário"
            autoCapitalize="none"
            maxLength={50}
            keyboardType="default"
            returnKeyType="next"
            error={errors.username && errors.username.message}
          />

          <InputControlled
            control={control}
            name="email"
            placeholder="Email"
            autoCapitalize="none"
            maxLength={50}
            keyboardType="email-address"
            returnKeyType="next"
            error={errors.email && errors.email.message}
          />

          <InputControlled
            control={control}
            name="password"
            placeholder="Senha"
            autoCapitalize="none"
            maxLength={50}
            keyboardType="default"
            returnKeyType="send"
            error={errors.password && errors.password.message}
          />

          <Button
            title="Cadastrar"
            loading={loading}
            onPress={handleSubmit(handleSignUp)}
          />

          <SignInButton onPress={() => navigation.navigate('SignIn' as never)}>
            <SignInButtonIcon />
            <SignInButtonText>Voltar</SignInButtonText>
          </SignInButton>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

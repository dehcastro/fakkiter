import styled from 'styled-components/native';
import CreateAccountIcon from '../../assets/img/create-account-icon.svg';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary.background};
`;

export const Brand = styled.View``;

export const Form = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 40px;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignUpButtonIcon = styled(CreateAccountIcon).attrs(
  ({ theme }) => ({
    fill: theme.secondary.text,
  }),
)`
  margin-right: 10px;
`;

export const SignUpButtonText = styled.Text`
  color: ${({ theme }) => theme.secondary.text};
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text};
`;

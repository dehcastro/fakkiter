import styled from 'styled-components/native';

export const Container = styled.View`
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

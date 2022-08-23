import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 6px 0;
  padding: ${Platform.OS === 'ios' ? '18px' : 0} 20px;
  background-color: ${({ theme }) => theme.secondary.background};
  border: 1px solid ${({ theme }) => theme.primary.border};
  border-radius: 8px;
`;

export const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.primary.text,
}))`
  color: ${({ theme }) => theme.secondary.text};
`;

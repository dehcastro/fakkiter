import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.primary.border};
  border-radius: 8px;
  padding: 16px 0;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
`;

export const ActivityIndicatorView = styled.View`
  margin-right: 10px;
`;

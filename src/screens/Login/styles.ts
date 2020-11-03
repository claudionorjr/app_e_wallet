import styled from 'styled-components/native';

import Colors from '../../assets/Colors';

export const HeadArea = styled.View`
  background-color: ${Colors.primary};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${Colors.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppName = styled.Text`
  font-size: 24px;
  line-height: 24px;
  margin-vertical: 10px;
  color: ${Colors.dark};
  font-weight: 700;
  width: 100%;
  text-align: center;
`;

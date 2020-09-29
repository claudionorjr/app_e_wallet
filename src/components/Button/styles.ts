import styled from 'styled-components/native';

import Colors from '../../assets/Colors';

export const ButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 19px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${Colors.primary};
  padding-vertical: 10px;
  padding-horizontal: 15px;
  border-radius: 11px;
  width: 90%;
  margin-vertical: 5px;
  align-items: center;
`;

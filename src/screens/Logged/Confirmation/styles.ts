import styled from 'styled-components/native'

import Colors from '../../../assets/Colors'

export const InfoArea = styled.View`
  flex-direction: column;
  background-color: ${Colors.background};
  align-items: center;
  justify-content: center;
  flex: 2;
`;

export const BtnArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${Colors.background};
  justify-content: space-evenly;
`;

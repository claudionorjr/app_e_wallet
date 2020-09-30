import styled from 'styled-components/native'

import Colors from '../../../assets/Colors'

export const Screen = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.background};
`;

export const FlatList = styled.FlatList`
  width: 100%;
  background-color: ${Colors.background};
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background};
`;

export const StatementDaties = styled.View`
border-top-width: 2px;
border-color: ${Colors.primary};
`;

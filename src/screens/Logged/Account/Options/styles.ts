import styled from 'styled-components/native'

import Colors from '../../../../assets/Colors'

export const OptionArea = styled.View`
  flex-direction: column;
`;

export const OptionsContent = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: flex-start;
  border-top-width: 2px;
  border-color: ${Colors.primary};
`;

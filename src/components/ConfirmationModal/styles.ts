import styled from 'styled-components/native';

import Color from '../../assets/Themes';

export const MainContainer = styled.View`
  background-color: rgba(0,0,0, 0.8);
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentContainer = styled.View`
  height: 90%;
  width: 100%;
  background-color: ${Color.transparentBackground};
  padding: 5px;
`;

export const TransparentModal = styled.Modal`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: black;
`;

export const CloseBtn = styled.TouchableOpacity`
  width: 10%;
  max-height: 50px;
  background-color: ${Color.transparentBackground};
  justify-content: center;
  align-items: center;    
  border-radius: 8px;
  align-self: flex-end;
  margin: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between  ;
`;

export const ModalImage = styled.View`
  width: 90%;
  height: 80%;
`;


export const CustomText = styled.Text`
  font-family: 'Roboto';
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '17px'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 500} ;
  color: white;
  text-align: center;
`;

export const BtnText = styled.Text`
  font-family: 'Roboto';
  font-size: 17px;
  color: white;
  text-align: center;
`;

export const LoadingBar = styled.View`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 25px;
  background-color: ${Color.backgroundGrey};
`;

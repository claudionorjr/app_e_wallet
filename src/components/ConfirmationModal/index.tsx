import React, { useRef, useEffect } from 'react'
import { Animated, View, Text, ImageSourcePropType } from 'react-native'

import {
  TransparentModal,
  MainContainer,
  CloseBtn,
  BtnText,
  LoadingBar,
  ContentContainer,
  CustomText,
  Row
} from './styles';
import Colors from '../../assets/Colors'

interface HistoriesModalProps {
  isVisible: boolean;
  barBottom?: boolean;
  closeCallback: Function;
  item?: any;
}

const HistoriesModal: React.FC<HistoriesModalProps> = ({ isVisible, closeCallback, item }) => {

  return (
    <TransparentModal
      visible={isVisible}
      presentationStyle={'overFullScreen'}
      animated={true}
      animationType={'slide'}
      transparent={true}
    >
      <MainContainer>
        <ContentContainer>
          <Row>
            <CustomText>{item ? item.title : 'Item'}</CustomText>
            <CloseBtn
              onPress={() => closeCallback()}
            >
              <BtnText>X</BtnText>
            </CloseBtn>
          </Row>
          <View style={styles.infoArea}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>CONFIRMAÇÃO DE DEPOSITO:</Text>
            <Text style={{ fontSize: 22 }}>
              <FontAwesomeIcon size={18} icon={faMoneyBillAlt} />
      . R$ {amount}
            </Text>
          </View>
          <View style={styles.btnArea}>
            <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
              props.navigation.navigate('Deposito')
            }}>
              <Text>VOLTAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
              props.dispatch({ type: 'validate/deposit', deposit: +amount })
              // let textToWatsApp = depositReceipts(amount)
              // Linking.openURL(`whatsapp://send?text=${textToWatsApp}`)
              props.navigation.navigate('Conta')
            }}>
              <Text>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </ContentContainer>
      </MainContainer>
    </TransparentModal >
  )
}

export { HistoriesModal };

import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

//import { depositReceipts } from '../../../requirements/receipts/receipts'
import { styles } from './styles'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

interface DatiesProps {
  amount: string;
}

type RouteParams = {
  DepositConfirmation: DatiesProps;
}

const DepositConfirmation = (props) => {
  const route = useRoute<RouteProp<RouteParams, 'DepositConfirmation'>>()
  const amount = route.params.amount
  return (
    <>
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
    </>
  )
}

export default connect()(DepositConfirmation)

import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

//import { paymentReceipts } from '../../requirements/receipts/receipts'
import { styles } from './styles'
import { useRoute, RouteProp } from '@react-navigation/native'

interface DatiesProps {
  amount: string;
}

type RouteParams = {
  PaymentConfirmation: DatiesProps;
}

const PaymentConfirmation = (props) => {
  const route = useRoute<RouteProp<RouteParams, 'PaymentConfirmation'>>()
  const amount = route.params.amount
  return (
    <>
      <View style={styles.infoArea}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>CONFIRMAÇÃO DE PAGAMENTO:</Text>
        <Text style={{ fontSize: 22 }}>
          <FontAwesomeIcon size={18} icon={faMoneyBillAlt} />
        . R$ {amount}
        </Text>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          props.navigation.navigate('Pagamento')
        }}>
          <Text>VOLTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          props.dispatch({ type: 'validate/payment', payment: +amount })
          // let textToWatsApp = paymentReceipts(amount)
          // Linking.openURL(`whatsapp://send?text=${textToWatsApp}`)
          props.navigation.navigate('Conta')
        }}>
          <Text>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default connect()(PaymentConfirmation)

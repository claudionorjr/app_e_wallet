import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { depositReceipts } from '../../requirements/receipts/receipts'
import { styles } from './styles'
import NavBar from '../Home/NavBar'

const DepositConfirmation = (props) => {
  const { amount } = props.route.params
  return (
    <>
      <NavBar navigation={props.navigation} type={'Deposit'} />
      <View style={styles.infoArea}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>CONFIRMAÇÃO DE DEPOSITO:</Text>
        <Text style={{ fontSize: 22 }}>
          <FontAwesomeIcon size={18} icon={faMoneyBillAlt} />
      . R$ {amount}
        </Text>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          props.navigation.navigate('Deposit')
        }}>
          <Text>VOLTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          props.dispatch({ type: 'validate/deposit', deposit: +amount })
          // let textToWatsApp = depositReceipts(amount)
          // Linking.openURL(`whatsapp://send?text=${textToWatsApp}`)
          props.navigation.navigate('Statement')
        }}>
          <Text>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default connect()(DepositConfirmation)

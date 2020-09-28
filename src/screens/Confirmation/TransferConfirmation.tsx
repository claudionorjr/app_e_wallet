import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyBillAlt, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { transferReceipts } from '../../requirements/receipts/receipts'
import { styles } from './styles'
import NavBar from '../Home/NavBar'

const TransferConfirmation = (props) => {
  const { amount, document } = props.route.params
  return (
    <>
      <NavBar navigation={props.navigation} type={'Transfer'} />
      <View style={styles.infoArea}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>CONFIRMAÇÃO DE TRANSFERÊNCIA:</Text>
        <Text style={{ fontSize: 22 }}>
          <FontAwesomeIcon size={18} icon={faMoneyBillAlt} />
        . R$ {amount}
        </Text>
        <Text style={{ fontSize: 22 }}>
          <FontAwesomeIcon size={18} icon={faIdCard} />
        . {document}
        </Text>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          props.navigation.navigate('Transfer')
        }}>
          <Text>VOLTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          props.dispatch({ type: 'validate/transfer', transferAmount: +amount, transferDocument: document })
          let textToWatsApp = transferReceipts(amount, document)
          Linking.openURL(`whatsapp://send?text=${textToWatsApp}`)
          props.navigation.navigate('Statement')
        }}>
          <Text>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default connect()(TransferConfirmation)

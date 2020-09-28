import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { paymentReceipts } from '../../requirements/receipts/receipts'
import { styles } from './styles'
import NavBar from '../home/NavBar'

class PaymentConfirmation extends React.Component {

  render() {
    const { amount } = this.props.route.params
    return (
    <>
      <NavBar navigation={this.props.navigation} type={'pay'}/>
      <View style={styles.infoArea}>
        <Text style={{fontWeight:"bold", fontSize: 18}}>CONFIRMAÇÃO DE PAGAMENTO:</Text>
        <Text style={{fontSize: 22}}>
        <FontAwesomeIcon size={18} icon={ faMoneyBillAlt } />
        . R$ {amount}
        </Text>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          this.props.navigation.navigate('Pay')
        }}>
          <Text>VOLTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.shadow]}onPress={() => {
          this.props.dispatch({type: 'validate/payment', payment: +amount})
          let textToWatsApp = paymentReceipts(amount)
          Linking.openURL(`whatsapp://send?text=${textToWatsApp}`)
          this.props.navigation.navigate('Statement')
        }}>
          <Text>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    </>
    )
  }
}

export default connect()(PaymentConfirmation)
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../home/NavBar'
import { paymentReceipts } from '../../requirements/receipts/receipts'


/**
 * @class Pay
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Pay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inputAmount: ''}
  }

  render() {
    return (
      <>
        <NavBar navigation={this.props.navigation} type={'Pay'}/>
        <View style={styles.payArea}>
          <>
            <Text>Valor do Pagamento</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={(number) => this.setState({inputAmount: ((number.replace(/\D/g,'')) / 100).toFixed(2)})}
              value={this.state.inputAmount.toString()}
              style={[styles.input, styles.shadow]}
              placeholder="Valor..." />
          </>

          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
            this.props.dispatch({type: 'validate/payment', payment: +this.state.inputAmount})
            this.setState({inputAmount: ''})
            let textToWatsApp = paymentReceipts(this.state.inputAmount)
            Linking.openURL(`whatsapp://send?text=${textToWatsApp}`)
          }}>
            <Text>PAGAR</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { account: state.account }
}

export default connect(mapStateToProps)(Pay)

import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native'
import ValidationComponent from 'react-native-form-validator'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../home/NavBar'
import { depositReceipts } from '../../requirements/receipts/receipts'


/**
 * @class Deposit
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Deposit extends ValidationComponent  {
  constructor(props) {
    super(props)
    this.state = {inputAmount: ''}
  }

  render() {
    return (
      <>
        <NavBar navigation={this.props.navigation} type={'Deposit'}/>
        <View style={styles.depositArea}>
          <>
            <Text>Valor do depósito</Text>
            <TextInput style={[styles.input, styles.shadow]}
              keyboardType="numeric"
              onChangeText={(number) => this.setState({inputAmount: ((number.replace(/\D/g,'')) / 100).toFixed(2)})}
              placeholder="Valor..."
              value={this.state.inputAmount.toString()} />
          </>

          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
            this.props.dispatch({type: 'validate/deposit', deposit: +this.state.inputAmount})
            this.setState({inputAmount: ''})
            let textToWatsApp = depositReceipts(this.state.inputAmount)
            Linking.openURL(`whatsapp://send?text=${textToWatsApp}`)
          }}>
            <Text>DEPOSITAR</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

export default connect()(Deposit)

import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../home/NavBar'


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

  /**
   * @description: Pay.js renderiza a tela de pagamento do sistema.
   * 
   * @see src.components.home.Home.js
   */
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
            this.props.navigation.navigate('PaymentConfirmation', {amount: this.state.inputAmount})
            this.setState({inputAmount: ''})
          }}>
            <Text>PAGAR</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

export default connect()(Pay)

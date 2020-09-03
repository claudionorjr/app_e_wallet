import React from 'react'
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../home/NavBar'
import dinnerMask from '../../requirements/maskFields/dinnerField'


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
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } style={styles.payArea}>
          <>
            <Text>Valor do Pagamento</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={(number) => this.setState({inputAmount: dinnerMask(number)})}
              value={this.state.inputAmount.toString()}
              style={[styles.input, styles.shadow]}
              placeholder="Valor..." />
          </>

          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
            if(this.state.inputAmount != '') {
              this.props.navigation.navigate('PaymentConfirmation', {amount: this.state.inputAmount})
              this.setState({inputAmount: ''})
            } else {
              alert("Campo Valor obrigatório.")
            }
          }}>
            <Text>PAGAR</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </>
    )
  }
}

export default connect()(Pay)

import React from 'react'
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../home/NavBar'
import dinnerMask from '../../requirements/maskFields/dinnerField'

class Deposit extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {inputAmount: ''}
  }

  render() {
    return (
      <>
        <NavBar navigation={this.props.navigation} type={'Deposit'} />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } style={styles.depositArea}>
          <>
            <Text>Valor do depósito</Text>
            <TextInput style={[styles.input, styles.shadow]}
              keyboardType="numeric"
              onChangeText={(number) => this.setState({inputAmount: dinnerMask(number)})}
              placeholder="Valor..."
              value={this.state.inputAmount.toString()} />
          </>

          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
            if(this.state.inputAmount != '') {
              this.props.navigation.navigate('DepositConfirmation', {amount: this.state.inputAmount})
              this.setState({inputAmount: ''})
            } else {
              alert("Campo Valor obrigatório.")
            }
          }}>
            <Text>DEPOSITAR</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </>
    )
  }
}

export default connect()(Deposit)

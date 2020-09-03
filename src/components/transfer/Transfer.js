import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../home/NavBar'
import documentField from '../../requirements/maskFields/documentField'
import dinnerMask from '../../requirements/maskFields/dinnerField'


/**
 * @class Transfer
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Transfer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inputAmount: '', inputDocument: ''}
  }

  /**
   * @description: Transfer.js renderiza a tela de transferência do sistema.
   * 
   * @see src.components.home.Home.js
   */
  render() {
    return (
      <>
        <NavBar navigation={this.props.navigation} type={'Transfer'}/>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.formArea}>
          <Text>CPF/CNPJ do Recebedor</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(number) => this.setState({inputDocument: documentField(number)})}
            value={this.state.inputDocument.toString()}
            style={[styles.input, styles.shadow]}
            placeholder="CPF..." />
          
          <Text>Valor da Transferência</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(number) => this.setState({inputAmount: dinnerMask(number)})}
            value={this.state.inputAmount.toString()}
            style={[styles.input, styles.shadow]}
            placeholder="Valor..." />

          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
            if(this.state.inputDocument.length == 11 || this.state.inputDocument.length == 14) {
              if(this.state.inputAmount != ''){
                this.props.navigation.navigate('TransferConfirmation', {amount: this.state.inputAmount, document: this.state.inputDocument})
                this.setState({inputAmount: '', inputDocument: ''})
              } else {
                alert("Campo Valor obrigatório.")
              }
            } else {
              alert("Documento precisa ter '11' caracteres para CPF e '14' para CNPJ.")
            }
          }}>
              <Text>TRANSFERIR</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </>
    )
  }
}

export default connect()(Transfer)

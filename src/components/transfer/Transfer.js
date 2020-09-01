import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { transferReceipts } from '../../requirements/receipts/receipts'
import { styles } from './styles'
import NavBar from '../home/NavBar'


/**
 * @class Transfer
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Transfer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inputAmount: '', inputDocument: ''}
  }

  render() {
    return (
      <>
        <NavBar navigation={this.props.navigation} type={'Transfer'}/>
        <View style={styles.formArea}>
          <Text>CPF do Recebedor</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(number) => this.setState({inputDocument: (number.replace(/\D/g,''))})}
            value={this.state.inputDocument.toString()}
            style={[styles.input, styles.shadow]}
            placeholder="CPF..." />
          
          <Text>Valor da Transferência</Text>
          <TextInput
          keyboardType="numeric"
          onChangeText={(number) => this.setState({inputAmount: ((number.replace(/\D/g,'')) / 100).toFixed(2)})}
          value={this.state.inputAmount.toString()}
          style={[styles.input, styles.shadow]}
          placeholder="Valor..." />

        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          if(this.state.inputDocument.length == 11 || this.state.inputDocument.length == 14) {
            this.props.dispatch({type: 'validate/transfer', transferAmount: +this.state.inputAmount, transferDocument: this.state.inputDocument})
            let textToWatsApp = transferReceipts(this.state.inputAmount, this.state.inputDocument)
            this.setState({inputAmount: '', inputDocument: ''})
            Linking.openURL(`whatsapp://send?text=${textToWatsApp}`)
          } else {
            alert("Documento precisa ter '11' caracteres para CPF e '14' para CNPJ.")
          }
        }}>
            <Text>TRANSFERIR</Text>
        </TouchableOpacity>
        </View>
      </>
    )
  }
}

export default connect()(Transfer)

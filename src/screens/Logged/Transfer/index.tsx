import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import NavBar from '../../../components/NavBar'
import { styles } from './styles'
import documentField from '../../../requirements/maskFields/documentField'
import dinnerMask from '../../../requirements/maskFields/dinnerField'

const Transfer = (props) => {
  const [inputAmount, setinputAmount] = useState('')
  const [inputDocument, setinputDocument] = useState('')

  return (
    <>
      <NavBar text={'Transferir'} />
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.formArea}>
        <Text>CPF/CNPJ do Recebedor</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(number) => setinputDocument(documentField(number))}
          value={inputDocument.toString()}
          style={[styles.input, styles.shadow]}
          placeholder="CPF..." />

        <Text>Valor da Transferência</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(number) => setinputAmount(dinnerMask(number))}
          value={inputAmount.toString()}
          style={[styles.input, styles.shadow]}
          placeholder="Valor..." />

        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          if (inputDocument.length == 11 || inputDocument.length == 14) {
            if (inputAmount != '') {
              props.navigation.navigate('TransferConfirmation', { amount: inputAmount, document: inputDocument })
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

export default connect()(Transfer)

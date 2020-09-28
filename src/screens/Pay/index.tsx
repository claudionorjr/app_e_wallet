import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../Home/NavBar'
import dinnerMask from '../../requirements/maskFields/dinnerField'

const pay = (props) => {
  const [inputAmount, setinputAmount] = useState('')
  return (
    <>
      <NavBar navigation={props.navigation} type={'Pay'} />
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.payArea}>
        <>
          <Text>Valor do Pagamento</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(number) => setinputAmount(dinnerMask(number))}
            value={inputAmount.toString()}
            style={[styles.input, styles.shadow]}
            placeholder="Valor..." />
        </>

        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          if (inputAmount != '') {
            props.navigation.navigate('PaymentConfirmation', { amount: inputAmount })
            setinputAmount('')
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

export default connect()(Pay)
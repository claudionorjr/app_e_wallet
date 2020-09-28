import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../../components/home/NavBar'
import dinnerMask from '../../requirements/maskFields/dinnerField'

const Deposit = (props) => {
  const [inputAmount, setinputAmount] = useState('')
  return (
    <>
      <NavBar navigation={props.navigation} type={'Deposit'} />
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } style={styles.depositArea}>
        <>
          <Text>Valor do depósito</Text>
          <TextInput style={[styles.input, styles.shadow]}
            keyboardType="numeric"
            onChangeText={(number) => setinputAmount(dinnerMask(number))}
            placeholder="Valor..."
            value={inputAmount.toString()} />
        </>

        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          if(inputAmount != '') {
            props.navigation.navigate('DepositConfirmation', {amount: inputAmount})
            setinputAmount('')
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

export default connect()(Deposit)
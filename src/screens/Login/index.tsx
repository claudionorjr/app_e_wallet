import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'
import { validateUser } from '../../requirements/Login/auth'

const Login = (props) => {
  const [inputEmail, setinputEmail] = useState('')
  const [inputPassword, setinputPassword] = useState('')

  return (
    <>
      <View style={[styles.iconLoginArea, styles.shadow]}>
        <Text style={{padding: 23}}><FontAwesomeIcon size={80} icon={ faWallet } /></Text>
        <Text style={{fontSize: 20, padding: 23, fontWeight: "bold"}}>E-Carteira</Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } style={styles.inputLoginArea}>
        <TextInput
          keyboardType="email-address"
          style={[styles.input, styles.shadow]}
          onChangeText={(text) => setinputEmail(text)
          }
          placeholder="E-Mail"
          value={inputEmail}
        /> 

        <TextInput
          secureTextEntry={true}
          style={[styles.input, styles.shadow]}
          onChangeText={(text) => setinputPassword(text)}
          placeholder="Password"
          value={inputPassword}
        />
          
        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
          const response = validateUser(inputEmail, inputPassword)
          if (response.message == 'authenticated') {
            props.dispatch({type: 'login', response: true})
          } else {
            alert('E-mail ou senha incorretos!')
          }
          setinputPassword('')
          setinputEmail('')
        }}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  )
}

const mapStateToProps = (state) => {
  return { response: state.response }
}
  
export default connect(mapStateToProps)(Login)

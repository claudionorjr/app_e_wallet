import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

import Button from '../../components/Button';
import Input from '../../components/Input'
import { styles } from './styles'
import { validateUser } from '../../requirements/Login/auth'

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const submit = () => {
    const response = validateUser(inputEmail, inputPassword)
    if (response.message == 'authenticated') {
      props.dispatch({ type: 'login', response: true })
    } else {
      alert('E-mail ou senha incorretos!')
    }
    setInputPassword('')
    setInputEmail('')
  }

  return (
    <>
      <View style={[styles.iconLoginArea, styles.shadow]}>
        <Text style={{ padding: 23 }}><FontAwesomeIcon size={80} icon={faWallet} /></Text>
        <Text style={{ fontSize: 20, padding: 23, fontWeight: "bold" }}>E-Carteira</Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.inputLoginArea}>
        <Input
          defaultValue={inputEmail}
          onChangeText={setInputEmail}
          placeholder={'E-mail'}
        />
        <Input
          defaultValue={inputPassword}
          onChangeText={setInputPassword}
          placeholder={'Senha'}
          secureTextEntry
        />
        <Button onPress={submit} text={'Entrar'} />
      </KeyboardAvoidingView>
    </>
  )
}

const mapStateToProps = (state) => {
  return { response: state.response }
}

export default connect(mapStateToProps)(Login)

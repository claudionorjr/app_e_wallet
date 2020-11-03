import React, { useState } from 'react'
import { Platform } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

import Button from '../../components/Button';
import Input from '../../components/Input'
import { validateUser } from '../../requirements/Login/auth'

import { HeadArea, InputArea, AppName } from './styles'

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const submit = () => {
    const response = validateUser(inputEmail, inputPassword)

    response.message == 'authenticated' ?
      props.dispatch({ type: 'login', response: true }) :
      alert('E-mail ou senha incorretos!')

    setInputPassword('')
    setInputEmail('')
  }

  return (
    <>
      <HeadArea>
        <FontAwesomeIcon size={80} icon={faWallet} />
        <AppName>E-Carteira</AppName>
      </HeadArea>
      <InputArea behavior={Platform.OS == "ios" ? "padding" : "height"}>
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
      </InputArea>
    </>
  )
}

const mapStateToProps = (state) => {
  return { response: state.response }
}

export default connect(mapStateToProps)(Login)

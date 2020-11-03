import React, { useState } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'

import NavBar from '../../../components/NavBar'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import MediumText from '../../../components/MediumText'
import dinnerMask from '../../../requirements/maskFields/dinnerField'

import { FormArea } from './styles'

const Deposit = () => {
  const navigation = useNavigation()
  const [inputAmount, setinputAmount] = useState('')

  const submit = () => {
    (inputAmount != '') ?
      navigation.navigate('DepositConfirmation', { inputAmount }) :
      alert("Campo Valor obrigatório.")

    setinputAmount('')
  }

  const amountCallback = (number) => setinputAmount(dinnerMask(number))

  return (
    <>
      <NavBar text={'Depositar'} />
      <FormArea behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <MediumText text={'Valor do depósito'} />
        <Input
          defaultValue={inputAmount.toString()}
          onChangeText={amountCallback}
          placeholder={'Valor...'}
        />
        <Button text={'Depositar'} onPress={submit} />
      </FormArea>
    </>
  )
}

export default connect()(Deposit)

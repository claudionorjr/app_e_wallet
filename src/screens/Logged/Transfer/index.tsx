import React, { useState } from 'react'
import { Platform, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'

import NavBar from '../../../components/NavBar'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import MediumText from '../../../components/MediumText'

import { FormArea } from './styles'

import documentField from '../../../requirements/maskFields/documentField'
import dinnerMask from '../../../requirements/maskFields/dinnerField'

const Transfer = () => {
  const navigation = useNavigation()
  const [inputAmount, setinputAmount] = useState('')
  const [inputDocument, setinputDocument] = useState('')

  const submit = () => {
    if (inputDocument.length == 11 || inputDocument.length == 14) {
      if (inputAmount != '') {
        let document: string = inputDocument
        let amount: string = inputAmount
        navigation.navigate('TransferConfirmation', { amount, document })
        setinputAmount('')
        setinputDocument('')
      } else {
        alert("Campo Valor obrigatório.")
      }
    } else {
      alert("Documento precisa ter '11' caracteres para CPF e '14' para CNPJ.")
    }
  }

  const documentCallback = (number) => setinputDocument(documentField(number))
  const amountCallback = (number) => setinputAmount(dinnerMask(number))

  return (
    <>
      <NavBar text={'Transferir'} />
      <FormArea behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <MediumText text={'CPF/CNPJ do Recebedor'} />
        <Input
          defaultValue={inputDocument.toString()}
          onChangeText={documentCallback}
          placeholder={'CPF...'}
        />
        <MediumText text={'Valor da Transferência'} />
        <Input
          defaultValue={inputAmount.toString()}
          onChangeText={amountCallback}
          placeholder={'Valor...'}
        />
        <Button text={'transferir'} onPress={submit} />
      </FormArea>
    </>
  )
}

export default connect()(Transfer)

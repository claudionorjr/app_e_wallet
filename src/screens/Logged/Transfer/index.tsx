import React, { useState } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'

import NavBar from '../../../components/NavBar'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import MediumText from '../../../components/MediumText'
import CheckAmountArea from '../../../components/CheckAmountArea'
import documentField from '../../../requirements/maskFields/documentField'
import dinnerMask from '../../../requirements/maskFields/dinnerField'

import { FormArea } from './styles'

const Transfer = (props) => {
  const amountInAccount = (Number(props.account.amount)).toFixed(2)
  const navigation = useNavigation()
  const [inputAmount, setinputAmount] = useState('')
  const [inputDocument, setinputDocument] = useState('')

  const submit = () => {
    !(inputDocument.length == 11 || inputDocument.length == 14) ?
      alert("Documento precisa ter '11' caracteres para CPF e '14' para CNPJ.") :
      (inputAmount != '') ?
        navigation.navigate('TransferConfirmation', { inputAmount, inputDocument }) :
        alert("Campo Valor obrigatório.")

    setinputAmount('')
    setinputDocument('')
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
        <CheckAmountArea transactionAmount={inputAmount} amountInAccount={amountInAccount} />
        <Button
          disabled={Number(amountInAccount) < Number(inputAmount)}
          text={'transferir'}
          onPress={submit}
        />
      </FormArea>
    </>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account }
}

export default connect(mapStateToProps)(Transfer)

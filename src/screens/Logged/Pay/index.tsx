import React, { useState } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'

import NavBar from '../../../components/NavBar'
import CheckAmountArea from '../../../components/CheckAmountArea'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import MediumText from '../../../components/MediumText'
import dinnerMask from '../../../requirements/maskFields/dinnerField'

import { FormArea } from './styles'

const Pay = (props) => {
  const amountInAccount = (Number(props.account.amount)).toFixed(2)
  const navigation = useNavigation()
  const [inputAmount, setinputAmount] = useState('')

  const submit = () => {
    (inputAmount != '') ?
      navigation.navigate('PaymentConfirmation', { inputAmount }) :
      alert("Campo Valor obrigatório.")

    setinputAmount('')
  }

  const amountCallback = (number) => setinputAmount(dinnerMask(number))

  return (
    <>
      <NavBar text={'Pagamento'} />
      <FormArea behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <MediumText text={'Valor do Pagamento'} />
        <Input
          defaultValue={inputAmount.toString()}
          onChangeText={amountCallback}
          placeholder={'Valor...'}
        />
        <CheckAmountArea transactionAmount={inputAmount} amountInAccount={amountInAccount} />
        <Button
          disabled={Number(amountInAccount) < Number(inputAmount)}
          text={'pagar'}
          onPress={submit}
        />
      </FormArea>
    </>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account }
}

export default connect(mapStateToProps)(Pay)

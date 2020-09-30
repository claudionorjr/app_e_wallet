import React, { useState } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'

import { FormArea } from './styles'
import NavBar from '../../../components/NavBar'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import MediumText from '../../../components/MediumText'
import dinnerMask from '../../../requirements/maskFields/dinnerField'

const Pay = () => {
  const navigation = useNavigation()
  const [inputAmount, setinputAmount] = useState('')

  const submit = () => {
    if (inputAmount != '') {
      let amount: string = inputAmount
      navigation.navigate('PaymentConfirmation', { amount })
      setinputAmount('')
    } else {
      alert("Campo Valor obrigatório.")
    }
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
        <Button text={'pagar'} onPress={submit} />
      </FormArea>
    </>
  )
}

export default connect()(Pay)
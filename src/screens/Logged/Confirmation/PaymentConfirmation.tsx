import React from 'react'
import { connect } from 'react-redux'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

import Options from '../../../components/Options'
import Button from '../../../components/Button'
import NavBar from '../../../components/NavBar'
import MediumText from '../../../components/MediumText'
import { InfoArea, BtnArea } from './styles'

interface DatiesProps {
  inputAmount: string;
}

type RouteParams = {
  PaymentConfirmation: DatiesProps;
}

const PaymentConfirmation = (props) => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<RouteParams, 'PaymentConfirmation'>>()
  const amount = route.params.inputAmount

  const submit = () => {
    props.dispatch({ type: 'validate/payment', payment: +amount })
    navigation.navigate('Conta')
  }

  const goBack = () => navigation.navigate('Pagamento')

  return (
    <>
      <NavBar text={'Confirmação'} />
      <InfoArea>
        <MediumText text={'CONFIRMAÇÃO DE PAGAMENTO:'} />
        <Options text={`R$ ${amount}`} icon={faMoneyBillAlt} marginLeft={10} border={false} padding={5} />
      </InfoArea>
      <BtnArea>
        <Button text={'voltar'} onPress={goBack} />
        <Button text={'confirmar'} onPress={submit} />
      </BtnArea>
    </>
  )
}

export default connect()(PaymentConfirmation)

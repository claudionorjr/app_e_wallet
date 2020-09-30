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
  amount: string;
}

type RouteParams = {
  DepositConfirmation: DatiesProps;
}

const DepositConfirmation = (props) => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<RouteParams, 'DepositConfirmation'>>()
  const amount = route.params.amount

  const submit = () => {
    props.dispatch({ type: 'validate/deposit', deposit: +amount })
    navigation.navigate('Conta')
  }

  const goBack = () => navigation.navigate('Deposito')

  return (
    <>
      <NavBar text={'Confirmação'} />
      <InfoArea>
        <MediumText text={'CONFIRMAÇÃO DE DEPÓSITO:'} />
        <Options text={`R$ ${amount}`} icon={faMoneyBillAlt} marginLeft={10} border={false} padding={5} />
      </InfoArea>
      <BtnArea>
        <Button text={'voltar'} onPress={goBack} />
        <Button text={'confirmar'} onPress={submit} />
      </BtnArea>
    </>
  )
}

export default connect()(DepositConfirmation)

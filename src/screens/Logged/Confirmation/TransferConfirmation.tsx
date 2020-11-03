import React from 'react'
import { connect } from 'react-redux'
import { faMoneyBillAlt, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

import Options from '../../../components/Options'
import Button from '../../../components/Button'
import NavBar from '../../../components/NavBar'
import MediumText from '../../../components/MediumText'
import { InfoArea, BtnArea } from './styles'

interface DatiesProps {
  inputAmount: string;
  inputDocument: string;
}

type RouteParams = {
  TransferConfirmation: DatiesProps;
}

const TransferConfirmation = (props) => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<RouteParams, 'TransferConfirmation'>>()
  const amount = route.params.inputAmount
  const document = route.params.inputDocument

  const submit = () => {
    props.dispatch({ type: 'validate/transfer', transferAmount: +amount, transferDocument: document })
    navigation.navigate('Conta')
  }

  const goBack = () => navigation.navigate('Transferir')

  return (
    <>
      <NavBar text={'Confirmação'} />
      <InfoArea>
        <MediumText text={'CONFIRMAÇÃO DE TRANSFERÊNCIA:'} />
        <Options text={`${document}`} icon={faIdCard} marginLeft={10} border={false} padding={5} />
        <Options text={`R$ ${amount}`} icon={faMoneyBillAlt} marginLeft={10} border={false} padding={5} />
      </InfoArea>
      <BtnArea>
        <Button text={'voltar'} onPress={goBack} />
        <Button text={'confirmar'} onPress={submit} />
      </BtnArea>
    </>
  )
}

export default connect()(TransferConfirmation)

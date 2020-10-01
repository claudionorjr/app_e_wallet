import React from 'react'
import { connect } from 'react-redux'
import {
  faUserCircle,
  faUniversity,
  faCommentDots,
  faCreditCard,
  faMobileAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'

import BigText from '../../../components/BigText'
import MediumText from '../../../components/MediumText'
import NavBar from '../../../components/NavBar'
import Options from '../../../components/Options'

import { AccountDaties, AmountArea, ScreenUser, Welcome } from './styles'

const Account = (props) => {
  return (
    <ScreenUser>
      <NavBar text={'Conta'} />
      <Welcome>
        <MediumText padding={15} text={`Olá, ${props.account.name}`} />
      </Welcome>
      <AmountArea>
        <BigText text={`R$ ${(Number(props.account.amount)).toFixed(2)}`} />
      </AmountArea>
      <AccountDaties>
        <Options text={`Conta ${props.account.accountBank}`} icon={faUserCircle} marginLeft={10} border padding={18} />
        <Options text={`Agência ${props.account.agency}`} icon={faUniversity} marginLeft={10} border padding={18} />
        <Options text={`Cartão R$ 0,00`} icon={faCreditCard} marginLeft={10} border padding={18} />
        <Options text={`Recarga de Celular`} icon={faMobileAlt} marginLeft={10} border padding={18} />
        <Options text={`Atendimento`} icon={faCommentDots} marginLeft={10} border padding={18} />
        <Options text={`Sair`} icon={faSignOutAlt} marginLeft={10} border btn
          onPress={() => {
            props.dispatch({ type: 'login', response: false })
          }}
        />
      </AccountDaties>
    </ScreenUser>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account, response: state.response }
}

export default connect(mapStateToProps)(Account)

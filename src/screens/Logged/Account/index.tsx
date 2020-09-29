import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import { AccountDaties, AmountArea, ScreenUser } from './styles'

const Account = (props) => {
  return (
    <ScreenUser>
      <AccountDaties>
        <Text style={{ fontSize: 12 }}>Nome: {props.account.name}</Text>
        <Text style={{ fontSize: 12 }}>Conta: {props.account.accountBank}</Text>
        <Text style={{ fontSize: 12 }}>Agência: {props.account.agency}</Text>
      </AccountDaties>
      <AmountArea>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>
          R$ {(Number(props.account.amount)).toFixed(2)}
        </Text>
      </AmountArea>
    </ScreenUser>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account, response: state.response }
}

export default connect(mapStateToProps)(Account)

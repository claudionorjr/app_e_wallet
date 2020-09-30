import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Button from '../../../components/Button'
import NavBar from '../../../components/NavBar'
import MediumText from '../../../components/MediumText'
import { Info, Screen, FlatList } from './styles'
import RenderItem from './RenderItem'

const Statement = (props) => {

  const renderItem = (obj) => {
    return obj.item['description'] && obj.item['description'] === 'Depósito' ?
      (<RenderItem obj={obj.item} color={'green'} />) :
      obj.item['description'] === 'Transferência' || obj.item['description'] === 'Pagamento' ?
        (<RenderItem obj={obj.item} color={'red'} />) : null
  }

  const submitToDeposit = () => {
    return props.navigation.navigate('Deposito')
  }
  return (
    <>
      <NavBar text={'Extrato'} />
      <Screen>
        {props.account.transactions.length > 0 ?
          (<>
            <FlatList data={props.account.transactions}
              keyExtractor={(item) => String(item['transaction_id'])}
              renderItem={(item) => renderItem(item)} />
          </>)
          :
          (<Info>
            <MediumText text={'Faça um depósito e coloque sua vida financeira em ordem.'} padding={10} />
            <Button text={'Depositar'} onPress={submitToDeposit} />
          </Info>)
        }
      </Screen>
    </>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account }
}

export default connect(mapStateToProps)(Statement)

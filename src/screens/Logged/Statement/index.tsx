import React from 'react'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { TransactionsObject } from '../../../@types/TransactionsObject'
import Button from '../../../components/Button'
import NavBar from '../../../components/NavBar'
import MediumText from '../../../components/MediumText'

import { Info, Screen, FlatList } from './styles'
import RenderItem from './RenderItem'

const Statement = (props) => {
  const navigation = useNavigation()
  const transactions: TransactionsObject[] = props.account.transactions

  const submitToDeposit = () => {
    return navigation.navigate('Deposito')
  }

  return (
    <>
      <NavBar text={'Extrato'} />
      <Screen>
        {transactions.length > 0 ?
          (<>
            <FlatList
              data={transactions}
              keyExtractor={(item) => String(item['transaction_id'])}
              renderItem={({ item }) => <RenderItem object={item} />} />
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

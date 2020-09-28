import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import Statement from '../Statement'
import Transfer from '../Transfer'
import Pay from '../Pay'
import Deposit from '../Deposit'
import Login from '../Login'
import TransferConfirmation from '../confirmation/TransferConfirmation'
import PaymentConfirmation from '../confirmation/PaymentConfirmation'
import DepositConfirmation from '../confirmation/DepositConfirmation'

const Stack = createStackNavigator()

const Home = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Statement" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Statement" component={Statement} />
          <Stack.Screen name="Pay" component={Pay} />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="Deposit" component={Deposit} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TransferConfirmation" component={TransferConfirmation} />
          <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
          <Stack.Screen name="DepositConfirmation" component={DepositConfirmation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default connect()(Home)

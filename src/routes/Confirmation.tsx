import 'react-native-gesture-handler'
import React from 'react'
import { connect } from 'react-redux'

import { createStackNavigator } from '@react-navigation/stack'

import Navigation from './Navigation'
import TransferConfirmation from '../screens/Logged/Confirmation/TransferConfirmation'
import PaymentConfirmation from '../screens/Logged/Confirmation/PaymentConfirmation'
import DepositConfirmation from '../screens/Logged/Confirmation/DepositConfirmation'

const Stack = createStackNavigator()

const Confirmation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Navigation} />
      <Stack.Screen name="TransferConfirmation" component={TransferConfirmation} />
      <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
      <Stack.Screen name="DepositConfirmation" component={DepositConfirmation} />
    </Stack.Navigator>
  )
}

export default connect()(Confirmation)

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import Statement from '../statement/Statement'
import Transfer from '../transfer/Transfer'
import Pay from '../pay/Pay'
import Deposit from '../deposit/Deposit'
import Login from '../login/Login'
import TransferConfirmation from '../confirmation/TransferConfirmation'
import PaymentConfirmation from '../confirmation/PaymentConfirmation'
import DepositConfirmation from '../confirmation/DepositConfirmation'


const Stack = createStackNavigator()

/**
 * @class Home
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Home extends React.Component {

  /**
   * @description: renderiza um 'NavigationContainer' e gerencia todas as rotas. 
   */
  render() {
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
}

export default connect()(Home)

import React from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Logged from './screens/Logged'
import Login from './screens/Login'
import configureStore from './store/configureStore'

const { store, persistor } = configureStore()

const LoginGate = (props) => {
  let loggedIn = props.response
  return loggedIn ? (<Logged />) : (<Login />)
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoginGateConnected />
      </PersistGate>
    </Provider>
  )
}

const mapStateToProps = (state) => {
  return { response: state.response }
}

const LoginGateConnected = connect(mapStateToProps)(LoginGate)

export default App

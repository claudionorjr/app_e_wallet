import React from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import Home from './src/components/home/Home'
import Login from './src/components/login/Login'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/configureStore'

const {store, persistor} = configureStore()

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LoginGateConnected />
        </PersistGate>
      </Provider>
    )
}

const LoginGate = (props) => {
  let loggedIn = props.response
  return loggedIn ? (<Home />) : (<Login />)
}

const mapStateToProps = (state) => {
  return { response: state.response }
}

const LoginGateConnected = connect(mapStateToProps)(LoginGate)

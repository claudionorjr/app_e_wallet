import React from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import reducer from './src/reducer'
import { createStore } from 'redux'
import Home from './src/components/home/Home'
import Login from './src/components/login/Login'

const store = createStore(reducer)

export default function App() {
  return (
      <Provider store={store}>
        <LoginGateConnected />
      </Provider>
    )
}

const LoginGate = (props) => {
  console.log(props.response)
  let loggedIn = props.response
  return loggedIn ? (<Home />) : (<Login />)
}

const mapStateToProps = (state) => {
  return { response: state.response }
}

const LoginGateConnected = connect(mapStateToProps)(LoginGate)

import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import Navigation from '../../routes/Navigation'
import Confirmation from '../../routes/Confirmation'

const Logged = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <Confirmation />
    </NavigationContainer>
  )
}

export default connect()(Logged)
import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import Confirmation from '../../routes/Confirmation'

const Logged = () => {
  return (
    <NavigationContainer>
      <Confirmation />
    </NavigationContainer>
  )
}

export default connect()(Logged)
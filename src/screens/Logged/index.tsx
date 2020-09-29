import React from 'react'
import { connect } from 'react-redux'

import Navigation from '../../routes/Navigation'

const Logged = () => {
  return (<Navigation />)
}

export default connect()(Logged)
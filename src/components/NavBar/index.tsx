import React from 'react'
import { connect } from 'react-redux'

import BigText from '../../components/BigText'
import SmallText from '../../components/SmallText'
import { Daties, NavBarArea } from './styles'

const NavBar = (props) => {
  return (
    <NavBarArea>
      <Daties>
        <BigText text={`${props.text}`} />
        <SmallText text={`${props.account.accountBank}`} />
      </Daties>
    </NavBarArea>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account, response: state.response }
}

export default connect(mapStateToProps)(NavBar)

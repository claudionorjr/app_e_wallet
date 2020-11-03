import React from 'react'
import { connect } from 'react-redux'

import BigText from '../../components/BigText'
import SmallText from '../../components/SmallText'
import Colors from '../../assets/Colors'
import { Daties, NavBarArea } from './styles'

const NavBar = (props) => {
  return (
    <NavBarArea>
      <Daties>
        <BigText text={`${props.text}`} color={Colors.white} />
        <SmallText text={`${props.account.accountBank}`} color={Colors.white} />
      </Daties>
    </NavBarArea>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account, response: state.response }
}

export default connect(mapStateToProps)(NavBar)

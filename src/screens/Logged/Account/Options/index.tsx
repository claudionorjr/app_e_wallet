import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import MediumText from '../../../../components/MediumText'
import Colors from '../../../../assets/Colors'
import { OptionsContent, OptionArea } from './styles'

interface Props {
  text: string;
  icon: IconProp;
  marginLeft?: number;
}

const Options: React.FC<Props> = ({ text, icon, marginLeft }) => {
  return (
    <OptionArea>
      <OptionsContent>
        <FontAwesomeIcon icon={icon} size={30} color={Colors.primary} />
        <MediumText marginLeft={marginLeft} text={text} />
      </OptionsContent>
    </OptionArea>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account, response: state.response }
}

export default connect(mapStateToProps)(Options)

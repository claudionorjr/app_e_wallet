import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import MediumText from '../MediumText'
import Colors from '../../assets/Colors'
import { OptionsContent, OptionArea, OptionBtn } from './styles'

interface Props {
  text: string;
  icon: IconProp;
  marginLeft?: number;
  btn?: boolean;
  onPress?: () => void;
  border?: boolean;
  padding?: number;
}

const Options: React.FC<Props> = ({ text, icon, marginLeft, btn, onPress, border, padding }) => {
  return (
    <OptionArea>
      {btn ?
        <OptionBtn
          style={border ?
            { borderTopWidth: 2, borderColor: Colors.primary }
            :
            null
          }
          onPress={onPress}>
          <FontAwesomeIcon icon={icon} size={30} color={Colors.primary} />
          <MediumText marginLeft={marginLeft} text={text} />
        </OptionBtn>
        :
        <OptionsContent
          style={border ?
            { borderTopWidth: 2, borderColor: Colors.primary, padding: padding }
            :
            { padding: padding }
          }>
          <FontAwesomeIcon icon={icon} size={30} color={Colors.primary} />
          <MediumText marginLeft={marginLeft} text={text} />
        </OptionsContent>
      }
    </OptionArea>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account, response: state.response }
}

export default connect(mapStateToProps)(Options)

import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfo, faDollarSign, faCalendarAlt, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'


/**
 * @class RenderItem
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class RenderItem extends React.Component {

  /**
   * @description: Este objeto é chamdo em uma FlatList para renderizar uma
   * determinada linha.
   * 
   * @see /Statement.js
   */
  render() {
    return (
      <View style={styles.card}>
        <Text style={{fontSize: 22, color: this.props.color}}>
        <FontAwesomeIcon size={18} icon={ faInfo } />
        . {this.props.obj['transaction_id'] }
        </Text>
        <Text style={{fontSize: 22, color: this.props.color}}>
        <FontAwesomeIcon size={18} icon={ faExchangeAlt } />
        . {this.props.obj['description'] }
        </Text>
        <Text style={{fontSize: 22, color: this.props.color}}>
        <FontAwesomeIcon size={18} icon={ faCalendarAlt } />
        . {this.props.obj['date']}
        </Text>
        <Text style={{fontSize: 22, color: this.props.color}}>
        <FontAwesomeIcon size={18} icon={ faDollarSign } />
        . {this.props.obj['value'].toFixed(2)}
        </Text>
      </View>
    )
  }
}

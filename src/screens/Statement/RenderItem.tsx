import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfo, faDollarSign, faCalendarAlt, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'

const RenderItem = (props) => {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 22, color: props.color }}>
        <FontAwesomeIcon size={18} icon={faInfo} />
      . {props.obj['transaction_id']}
      </Text>
      <Text style={{ fontSize: 22, color: props.color }}>
        <FontAwesomeIcon size={18} icon={faExchangeAlt} />
      . {props.obj['description']}
      </Text>
      <Text style={{ fontSize: 22, color: props.color }}>
        <FontAwesomeIcon size={18} icon={faCalendarAlt} />
      . {props.obj['date']}
      </Text>
      <Text style={{ fontSize: 22, color: props.color }}>
        <FontAwesomeIcon size={18} icon={faDollarSign} />
      . {props.obj['value'].toFixed(2)}
      </Text>
    </View>
  )
}

export default RenderItem

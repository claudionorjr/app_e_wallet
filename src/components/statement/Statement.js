import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfo, faDollarSign, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'
import NavBar from '../home/NavBar'
import { transactions } from '../../data/transactions'


/**
 * @class Statement
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class Statement extends React.Component {

  renderItem(obj) {
    return (
      <View style={styles.card}>
        <Text style={{fontSize: 22}}>
          <FontAwesomeIcon size={18} icon={ faInfo } />
          . {obj.item['description']}</Text>
        <Text style={{fontSize: 22}}>
          <FontAwesomeIcon size={18} icon={ faCalendarAlt } />
          . {obj.item['date']}</Text>
        <Text style={{fontSize: 22}}>
          <FontAwesomeIcon size={18} icon={ faDollarSign } />
          . {obj.item['value']}</Text>
      </View>
      )
  }

  render() {
    return (
      <>
        <NavBar navigation={this.props.navigation} type={'Statement'}/>
        <FlatList style={styles.flatList} data={transactions} keyExtractor={(item) => String(item['id'])}
          renderItem={(item) => {
            return this.renderItem(item)
        }}/>
      </>
    )
  }
}

import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfo, faDollarSign, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { styles } from './styles'
import NavBar from '../home/NavBar'
import { loggedUser } from '../../requirements/Login/auth'


/**
 * @class Statement
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Statement extends React.Component {

  componentDidMount() {
    let accountLoggedUser = loggedUser()
    this.props.dispatch({ type: 'loggedUser', account: accountLoggedUser})
  }

  renderItem(obj) {
    console.log(obj)
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
        <Text style={{fontSize: 22, fontWeight: "bold", marginLeft: 10}}>Extrato:</Text>
        <FlatList style={styles.flatList} data={this.props.account.transactions} 
          keyExtractor={(item) => String(item['transaction_id'])}
          renderItem={(item) => {
            return this.renderItem(item)
        }}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { account: state.account }
}

export default connect(mapStateToProps)(Statement)

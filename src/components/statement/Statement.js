import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfo, faDollarSign, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { styles } from './styles'
import RenderItem from './RenderItem'
import NavBar from '../home/NavBar'



/**
 * @class Statement
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Statement extends React.Component {

  renderItem(obj) {
    return obj.item['description'] && obj.item['description'] === 'Depósito' ?
    (<RenderItem obj={obj.item} color={'green'}/>) :
    obj.item['description'] === 'Transferência' || obj.item['description'] === 'Pagamento' ?
    (<RenderItem obj={obj.item} color={'red'}/>) : null
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

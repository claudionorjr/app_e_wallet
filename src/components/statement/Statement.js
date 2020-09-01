import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import RenderItem from './RenderItem'
import NavBar from '../home/NavBar'


/**
 * @class Statement
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Statement extends React.Component {

  /**
   * @description: Se o usuário já tem transações, vai ser rederizado uma linha da FlatList,
   * vermelha ou verde, dependendo se é Depósito(verde), Transferência(vermelho) ou Pagamento(vermelho).
   * 
   * @param {State} obj 
   */
  renderItem(obj) {
    return obj.item['description'] && obj.item['description'] === 'Depósito' ?
    (<RenderItem obj={obj.item} color={'green'}/>) :
    obj.item['description'] === 'Transferência' || obj.item['description'] === 'Pagamento' ?
    (<RenderItem obj={obj.item} color={'red'}/>) : null
  }

  /**
   * @description: renderiza duas opções de telas.
   * 1) uma View caso o usuário já tenha feito transações.
   * 2) uma View se o usuário ainda não fez transações
   */
  render() {
    return (
      <>
        <NavBar navigation={this.props.navigation} type={'Statement'}/>
        {this.props.account.transactions.length > 0 ?
          (<FlatList style={styles.flatList} data={this.props.account.transactions} 
          keyExtractor={(item) => String(item['transaction_id'])}
          renderItem={(item) => this.renderItem(item)}/>)
          : 
          (<View style={[styles.infoArea, styles.shadow]}>
              <Text style={{fontSize: 20, width: '90%', textAlign: 'center', paddingBottom: 75}}>Faça um depósito e coloque sua vida financeira em ordem.</Text>
              <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
                this.props.navigation.navigate('Deposit')
              }}>
                <Text>DEPOSITAR</Text>
              </TouchableOpacity>
            </View>)
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { account: state.account }
}

export default connect(mapStateToProps)(Statement)

import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker'
import { styles } from './styles'
import RenderItem from './RenderItem'
import NavBar from '../home/NavBar'

class Statement extends React.Component {
  constructor(props) {
    super(props)
    let toDay = new Date();
    this.state = {beginDate: toDay.setMonth(toDay.getMonth() - 1), finalDate: new Date(), date: 'initial', show: false, selectedDate: false}
  }

  componentDidUpdate(){
    if(this.state.selectedDate){
      const typeDate = this.state.date
      this.setState({
        show: Platform.OS === 'ios',
        beginDate: typeDate === 'initial' ? this.state.selectedDate : this.state.beginDate,
        finalDate: typeDate !== "initial" ? this.state.selectedDate : this.state.finalDate,
        selectedDate: false
      })
    }
  }

  pickInitialDate = () => {
    this.setState({
      show: true,
      date: 'inital'
    })
  }

  pickFinalDate = () => {
    this.setState({
      show: true,
      date: 'final'
    })
  }

  getAllFilteredItems(array) {
    let newArray = []
    array.forEach(element => {
      let elDateArr = element.date.split('-');
      let elDate = new Date(`${elDateArr[1]}/${elDateArr[0]}/${elDateArr[2]}`)
      if(elDate > this.state.beginDate && elDate < this.state.finalDate){
        newArray.push(element)
      }
    })
    return newArray
  }

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
        {this.props.account.transactions.length > 0 ?
          (
          <>
            <View style={{flexDirection: 'row', justifyContent:'space-evenly', padding: 10, backgroundColor: "#f0f0f0"}}>
            <Button color="#FCB50D" onPress={this.pickInitialDate} title="data inicial" />
            <Button color="#FCB50D" onPress={this.pickFinalDate} title="data final" />
            {this.state.show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date === 'initial' ? this.state.beginDate : this.state.finalDate}
                mode={'date'}
                is24Hour={true}
                display="calendar"
                onChange={(e,currentDate) => this.setState({ show: false, selectedDate: currentDate })}
              />
            )}
            </View>
            <FlatList style={styles.flatList} data={this.getAllFilteredItems(this.props.account.transactions)} 
            keyExtractor={(item) => String(item['transaction_id'])}
            renderItem={(item) => this.renderItem(item)}/>
          </>
          )
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

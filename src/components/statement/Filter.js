import React from 'react'
import { View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfo, faDollarSign, faCalendarAlt, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { styles } from './styles'


/**
 * @class Filter
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {beginDate: new Date(), finalDate: new Date(), date: 'initial', show: false, selectedDate: false}
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
      console.log(this.state.selectedDate)
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

  /**
   * @description: Este objeto renderiza uma view para filtrar as transações por data.
   * 
   * @see /Statement.js
   */
  render() {
    return (
      <>
        <View>
          <Button onPress={this.pickInitialDate} title="data inicial" />
        </View>
        <View>
          <Button onPress={this.pickFinalDate} title="data final" />
        </View>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date === 'initial' ? this.state.beginDate : this.state.finalDate}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(e,currentDate) => this.setState({ selectedDate: currentDate })}
          />
        )}
      </>
    )
  }
}

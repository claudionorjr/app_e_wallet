import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker'

import Button from '../../../components/Button'
import NavBar from '../../../components/NavBar'
import { styles, DateTime } from './styles'
import RenderItem from './RenderItem'

const Statement = (props) => {

  let toDay = new Date();
  const [beginDate, setBeginDate] = useState(toDay)
  const [finalDate, setFinalDate] = useState(toDay)
  const [date, setDate] = useState('initial')
  const [show, setShow] = useState(false)
  const [selectedDate, setSelectedDate] = useState(false)

  useEffect(() => {
    if (selectedDate) {
      let begin: any = date === 'initial' ? selectedDate : beginDate
      let final: any = date !== "initial" ? selectedDate : finalDate
      setBeginDate(begin)
      setFinalDate(final)
      setShow(Platform.OS === 'ios')
      setSelectedDate(false)
    }
  })

  const pickInitialDate = () => {
    setShow(true)
    setDate('inital')
  }

  const pickFinalDate = () => {
    setShow(true)
    setDate('final')
  }

  const getAllFilteredItems = (array) => {
    let newArray = []
    array.forEach(element => {
      let elDateArr = element.date.split('-');
      let elDate = new Date(`${elDateArr[1]}/${elDateArr[0]}/${elDateArr[2]}`)
      if (elDate > beginDate && elDate < finalDate) {
        newArray.push(element)
      }
    })
    return newArray
  }

  const renderItem = (obj) => {
    return obj.item['description'] && obj.item['description'] === 'Depósito' ?
      (<RenderItem obj={obj.item} color={'green'} />) :
      obj.item['description'] === 'Transferência' || obj.item['description'] === 'Pagamento' ?
        (<RenderItem obj={obj.item} color={'red'} />) : null
  }

  return (
    <>
      <NavBar text={'Extrato'} />
      {props.account.transactions.length > 0 ?
        (
          <>
            <DateTime>
              <Button onPress={pickInitialDate} text="data inicial" />
              <Button onPress={pickFinalDate} text="data final" />
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date === 'initial' ? beginDate : finalDate}
                  mode={'date'}
                  is24Hour={true}
                  display="calendar"
                  onChange={(e, currentDate) => {
                    setShow(false)
                    setSelectedDate(currentDate)
                  }}
                />
              )}
            </DateTime>
            <FlatList style={styles.flatList} data={getAllFilteredItems(props.account.transactions)}
              keyExtractor={(item) => String(item['transaction_id'])}
              renderItem={(item) => renderItem(item)} />
          </>
        )
        :
        (<View style={[styles.infoArea, styles.shadow]}>
          <Text style={{ fontSize: 20, width: '90%', textAlign: 'center', paddingBottom: 75 }}>Faça um depósito e coloque sua vida financeira em ordem.</Text>
          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
            props.navigation.navigate('Deposito')
          }}>
            <Text>DEPOSITAR</Text>
          </TouchableOpacity>
        </View>)
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account }
}

export default connect(mapStateToProps)(Statement)

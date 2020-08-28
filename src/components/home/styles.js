import React from 'react'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  headHome: {
    backgroundColor: '#FCB50D',
    width: '100%',
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 23,
    paddingBottom: 3,
  },
  accountDaties: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  singOut: {
    alignItems: "flex-end",
    paddingRight: 9,
  },
  amount: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  options: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 20,
    },
    shadowOpacity: 1.0,
    shadowRadius: 9.11,
    elevation: 14,
  },
})
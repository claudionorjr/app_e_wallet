import React from 'react'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  transferArea: {
    backgroundColor: "#f0f0f0",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  formArea: {
    flexDirection: 'column',
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    backgroundColor: '#FFF',
    minWidth: 155,
    height: 32,
    padding: 5,
    borderRadius: 7,
    margin: 5,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#FCB50D",
    borderRadius: 3,
    width: '90%',
    paddingBottom: 10,
    paddingTop: 10,
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

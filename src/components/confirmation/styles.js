import React from 'react'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
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
  infoArea: {
    flexDirection: "column",
    justifyContent: 'center',
    padding: 5,
    margin: 8,
    marginLeft: 50,
    flex: 1,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#FCB50D",
    borderRadius: 3,
    width: '40%',
    paddingBottom: 10,
    paddingTop: 10,
    margin: 10,
  },
  btnArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    flex: 1,
  },
})
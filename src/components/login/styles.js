import React from 'react'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  iconLoginArea: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FCB50D',
    flex: 2,
  },
  inputLoginArea: {
    backgroundColor: "#f0f0f0",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    height: 36,
    padding: 5,
    borderRadius: 7,
    marginBottom: 15,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#77E632",
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

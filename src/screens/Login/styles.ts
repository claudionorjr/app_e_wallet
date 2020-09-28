import React from 'react'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  iconLoginArea: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FCB50D',
  },
  inputLoginArea: {
    paddingTop: 10,
    backgroundColor: "#f0f0f0",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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
    backgroundColor: "#FCB50D",
    borderRadius: 3,
    width: '90%',
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 25,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.40,
    shadowRadius: 9.11,
    elevation: 14,
  },
})

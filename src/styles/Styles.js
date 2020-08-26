import React from 'react'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E68B00',
    alignItems: 'center',
  },
  navbar: {
    marginTop: 24,
    borderColor: '#777',
    borderWidth: 1,
    backgroundColor: '#5FC7FA',
    height: "auto",
  },
  card: {
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
    borderColor: '#777',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
  imageArea: {
    width: "100%",
    height: 150,
  },
  titleArea: {
    fontSize: 38,
    textAlign: 'center',
    margin: 5,
  },
  contentArea: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
  },
  btnArea: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 5,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#77E632",
    borderRadius: 3,
    paddingLeft: 79,
    paddingRight: 79,
    paddingBottom: 10,
    paddingTop: 10,
  },
  iconLoginArea: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    flex: 1,
  },
  inputLoginArea: {
    flexDirection: 'column',
    alignItems: "center",
    margin: 5,
    flex: 1,
  },
  input: {
    backgroundColor: '#FFF',
    minWidth: 200,
    height: 36,
    padding: 5,
    borderRadius: 7,
    marginBottom: 15,
  },
  shadow: {
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 8,
  },
})

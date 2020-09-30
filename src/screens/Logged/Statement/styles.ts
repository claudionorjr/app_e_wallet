import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../../../assets/Colors'
import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.background};
`;

export const FlatList = styled.FlatList`
  width: 100%;
  background-color: ${Colors.background};
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background};
`;

export const styles = StyleSheet.create({
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
  card: {
    padding: 5,
    margin: 8,
    marginLeft: 50,
    borderBottomWidth: 1,
  },
  infoArea: {
    backgroundColor: "#f0f0f0",
    flexDirection: "column",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#d1d1d1',
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#FCB50D",
    borderRadius: 3,
    width: '90%',
    paddingBottom: 10,
    paddingTop: 10,
  },
})

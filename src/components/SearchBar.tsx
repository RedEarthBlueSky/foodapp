import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.SearchBackground}>
      <Text style={styles.H2}>Search Bar</Text>
    </View>
  )
}

export { SearchBar }

const styles = StyleSheet.create({
  SearchBackground: {
    backgroundColor: '#f0eeee',
    borderRadius: 5,
    display: 'flex',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
    paddingLeft: 15,
  },
  H2: {
    fontSize: 24,
  }
})
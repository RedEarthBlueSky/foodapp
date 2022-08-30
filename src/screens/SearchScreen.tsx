import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from '../components'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.H1_BOLD}>Search Screen</Text>
      <SearchBar />
    </View>
  )
}

export { SearchScreen }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    
  },
  H1_BOLD: {
    fontSize: 32,
    fontWeight: 'bold',
  }
});
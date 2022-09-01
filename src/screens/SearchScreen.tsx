import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from '../components'
import{ API_KEY, CLIENT_ID } from 'react-native-dotenv'

const SearchScreen = () => {
  console.log()
  const [term, setTerm] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.H1_BOLD}>Search Screen</Text>
      <SearchBar 
        term={term}
        onTermChange={(newTerm: React.SetStateAction<string>) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>{term}</Text>
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
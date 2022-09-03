import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import { SearchBar, ResultsList } from '../components'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'

interface restaurantProps {
  searchApi: (searchTerm: string) => Promise<void>,
  restaurants: [],
  errorMessage: string,
}

const SearchScreen = ():JSX.Element => {
  console.log('Hi there again')
  const [term, setTerm] = useState('')

  const [searchApi, restaurants, errorMessage] = useRestaurants

  return (
    <View style={styles.container}>
      <Text style={styles.H1_BOLD}>Search Screen</Text>
      <SearchBar 
        term={term}
        onTermChange={(newValue: React.SetStateAction<string>) => setTerm(newValue)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ?
        <Text>{errorMessage}</Text>
        : null
      }
      <Text>We have found {restaurants.length} results</Text>
      <ResultsList />
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
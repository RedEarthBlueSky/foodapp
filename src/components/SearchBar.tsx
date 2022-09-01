import { StyleSheet, TextInput, View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.searchBackground}>
      <Feather style={styles.iconStyle} name='search'/>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search' 
        style={styles.inputStyle} 
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

export { SearchBar }

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: '#f0eeee',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginTop: 20,
    width: '95%',
  },
  inputStyle: {
    fontSize: 24,
    flex: 1,
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 40,
    marginHorizontal: 10,
  }
})
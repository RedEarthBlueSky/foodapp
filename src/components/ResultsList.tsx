import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface resultsProps {
  title: string,
}

const ResultsList = ({ title, }: resultsProps): JSX.Element => {
  return (
    <View>
      <Text style={styles.H3_BOLD}>{title}</Text>
      <Text>ResultsList</Text>
    </View>
  )
}

export { ResultsList }

const styles = StyleSheet.create({
  H3_BOLD: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 24,
  }
})
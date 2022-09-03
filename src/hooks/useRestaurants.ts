import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [restaurants, setRestaurants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 25,
          term: searchTerm,
          location: 'san jose'
        }
      })
      setErrorMessage('')
      setRestaurants(response.data.businesses)
    } catch(err) {
      setErrorMessage(`Something went wrong: ${err}`)
      setRestaurants([])
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, restaurants, errorMessage]
}

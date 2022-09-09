import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import "babel-polyfill"

import { SearchScreen } from './src/screens'

const navigator = createStackNavigator({
  Search: SearchScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Food Search App'
  }
})

export default createAppContainer(navigator)

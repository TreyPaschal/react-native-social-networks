import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { AuthenticationScreen } from './screens/AuthenticationScreen'
import { MainNavigator } from './screens/MainNavigator'
import { LoginScreen } from './screens/LoginScreen'

export default createAppContainer(
  createSwitchNavigator(
  {
    Auth: AuthenticationScreen,
    Login: LoginScreen,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
));

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { AuthenticationScreen } from './screens/AuthLoadingScreen'









import ExploreScreen from './screens/explore'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: ExploreScreen, Other: ExploreScreen });
const AuthStack = createStackNavigator({ SignIn: ExploreScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthenticationScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

import * as React from 'react';
import {
  KeyboardAvoidingView
} from 'react-native';

import { NavigationScreenProps, createStackNavigator } from 'react-navigation'

export const createStackNavigatorKeyboardAvoiding = (routeConfigMap, stackConfig = {}) => {

  let NavigationContainer = createStackNavigator(routeConfigMap, stackConfig)
  console.log(NavigationContainer)
  return class extends React.Component {
    static router = NavigationContainer.router;
    render() {
      const { navigation } = this.props;

      return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
          <NavigationContainer navigation={navigation} />
        </KeyboardAvoidingView>
      );
    }
  };
};

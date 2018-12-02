import * as React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
 } from 'react-native';

import {DefaultClient} from '../helpers/client'

export class AuthenticationScreen extends React.Component {

  constructor(props) {
      super(props);
      this._bootstrapAsync();
  }

  componentWillMount() {
      console.log('AuthenticationScreen')
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      await new Promise((resolve) => setTimeout(resolve, 100))
      DefaultClient.Instance.isAuthorized()
          .then((authorized) => {
              if (authorized) {
                  this.props.navigation.navigate('App');
              } else {
                  this.props.navigation.navigate('Auth');
              }
          })
  };

  // Render any loading content that you like here
  render() {
      return (
          <SafeAreaView style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
          }}>
              <StatusBar barStyle="default" hidden={false} />
              <ActivityIndicator size="large" />
          </SafeAreaView>
      );
  }
}
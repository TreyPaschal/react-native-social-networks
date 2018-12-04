import * as React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import { DefaultClient } from '../helpers/DefaultClient';

export class AuthenticationScreen extends React.Component {

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount() {
  }

  async _bootstrapAsync() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    DefaultClient.Instance.isAuthorized()
      .then((authorized) => {
        if (authorized) {
          this.props.navigation.navigate('Main');
        } else {
          this.props.navigation.navigate('Login');
        }
      });
  };

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
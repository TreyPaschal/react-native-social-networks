import * as React from 'react';
import {
  StyleSheet, Text, View, StatusBar, ListView, Button, Image, Platform, NativeModules, ScrollView, RefreshControl,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView, NavigationScreenProps, createStackNavigator } from 'react-navigation'

import { DefaultClient } from '../helpers/DefaultClient'

class ProfileScreenInternal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      headerLeft: (
        <Button
          onPress={() => alert('This is a button!')}
          title="+"
        />
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
        >
          <Image
            source={require('../assets/settings.png')}
            style={{ tintColor: '#007AFF', height: 24, width: 24, marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
      headerStyle: {

      }
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      profile_username: '',
    };
  }


  onRefresh() {

    this.setState({ refreshing: true });
    DefaultClient.Instance.getProfile()
      .then((ret) => {
        console.log(ret.result)
        this.setState({ refreshing: false });
        this.setState({ profile_username: ret.result.username });
      })
      .catch((error) => {
        console.log(error)
        console.log('what ever');
        this.setState({ refreshing: false });
      });
  }

  componentDidMount() {
    this.onRefresh()
  }

  render() {
    return (
      <ScrollView style={{ flexDirection: 'row' }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }

      >

        <View style={{
          flexDirection: 'row',
          padding: 15,
        }}>
          <Image source={require('../assets/images/user.jpg')} style={{
            height: 80,
            width: 80,
            borderRadius: 6.5,
            backgroundColor: '#d6d7da',
            borderWidth: 0.5,
            borderColor: '#d6d7da',

          }} />
          <View style={{
            paddingLeft: 15,
          }}>
            <Text style={{
              height: 32,
              paddingTop: 8,
              fontSize: 16,
            }}
            >Rock Zzz</Text>
            <Text style={{
              height: 24,
              paddingTop: 4,
              color: '#909090',
              fontSize: 14,
            }}
            >{this.state.profile_username}</Text>
            <Text style={{
              height: 24,
              paddingTop: 4,
              color: '#909090',
              fontSize: 14,
            }}
            >10 </Text>
          </View>
        </View>
        <View style={{ flex: 0.3 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Notifications')}
            title="Go to notifications"
          />
        </View>
        <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
        <View style={{ backgroundColor: 'red', flex: 0.5 }} />
        <Text>Hello World!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

export const ProfileScreen = createStackNavigator({
  Home: {
    screen: ProfileScreenInternal,
  }
});


ProfileScreen.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/profile.png')}
      style={[styles.icon, { tintColor: tintColor }]}
    />
  ),
};
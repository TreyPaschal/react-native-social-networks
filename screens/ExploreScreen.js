import * as React from 'react'
import {
  StyleSheet, Text, View, ScrollView, StatusBar,
  FlatList, Button, Image, Platform, NativeModules, TouchableOpacity, Dimensions,
  RefreshControl
} from 'react-native';
import { createStackNavigator, NavigationScreenProps, NavigationRouteConfigMap, StackNavigatorConfig } from 'react-navigation';
import { UserProfileScreen } from './UserProfileScreen'
import { DefaultClient } from '../helpers/DefaultClient'


class ExploreScreenInternal extends React.Component {
  static navigationOptions = {
    title: 'Discover',
  }

  componentDidMount() {
    this._onRefresh()
  }

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      data: [],
    };
  }

  _onRefresh() {

    console.log('i run 1')
    this.setState({ refreshing: true });
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('i run 2')
      DefaultClient.Instance.getUsers(position)
        .then((ret) => {
          console.log('i run 3')
          this.setState({ refreshing: false });
          this.setState({ data: ret.result });
        })
        .catch((error) => {
          console.log(error)
          console.log('what ever');
          this.setState({ refreshing: false });
        });
    }, (error) => {
      console.log(error)
    })
  }


  render() {
    return (
      <FlatList
        style={{ backgroundColor: '#FFFFFF' }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        horizontal={false}
        numColumns={3}
        contentContainerStyle={{ borderWidth: 1, borderColor: '#FFFFFF' }}
        data={this.state.data}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('UserProfile', { name: item.name })} >
            <Image source={{ uri: item.picture }} style={styles.photo} />
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  photo: {
    height: (Dimensions.get('window').width - 2) / 3,
    width: (Dimensions.get('window').width - 2) / 3,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#c8c7cc',
    borderRadius: 3,
  },
});

export const ExploreScreen = createStackNavigator({
  Home: {
    screen: ExploreScreenInternal,
  },
  UserProfile: {
    path: 'people/:name',
    screen: UserProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  }
});

ExploreScreen.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/explore.png')}
      style={[styles.icon, { tintColor: tintColor }]}
    />
  ),
};


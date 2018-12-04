import * as React from 'react';
import {
  StyleSheet, Text, View, ScrollView, StatusBar,
  FlatList, Button, Image, Platform, NativeModules, TouchableOpacity, Dimensions,
  RefreshControl
} from 'react-native';
import { createStackNavigator, NavigationScreenProps, NavigationRouteConfigMap, StackNavigatorConfig } from 'react-navigation';
import { PostRow } from '../components/posts'

import { DefaultClient } from '../helpers/DefaultClient'
import { ImagePicker } from '../components/image-picker'


class PostsScreenInternal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Moments',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('XImagePicker')}
          title="+"
        />
      ),
    }
  };

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

    this.setState({ refreshing: true });
    navigator.geolocation.getCurrentPosition((position) => {
      DefaultClient.Instance.getPosts(position)
        .then((ret) => {
          this.setState({ refreshing: false });
          this.setState({ data: ret.result });
        })
        .catch((error) => {
          console.log(error)
          this.setState({ refreshing: false });
        });
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
        data={this.state.data}
        keyExtractor={(item, index) => item._id.toString()}
        renderItem={({ item }) =>
          <PostRow {...item} />
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

export const PostsScreen = createStackNavigator({
  Home: {
    screen: PostsScreenInternal,
  },
  Picker: {
    screen: ImagePicker,
  },
});


PostsScreen.navigationOptions = {
  tabBarLabel: 'Moments',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/friends.png')}
      style={[styles.icon, { tintColor: tintColor }]}
    />
  ),
};
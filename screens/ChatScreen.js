import * as React from 'react';
import {
  StyleSheet, Text, View, StatusBar, ListView,
  Button, Image, Platform, NativeModules, SafeAreaView, FlatList,
  TextInput, KeyboardAvoidingView, UIManager
} from 'react-native';

import { NavigationScreenProps, Header } from 'react-navigation'

import { MessageRow } from '../components/messages'



export class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    console.log(navigation.state)

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      data: [
        { "me": true, "user": 1, "message": "This is an sample message 1.", 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460" },
        { "me": false, "user": 2, "message": "The sample message 2?", 'picture': "http://opgg-static.akamaized.net/images/profile_icons/profileIcon3440.jpg" },
        { "me": false, "user": 2, "message": "Here is the sample message 3!!!", 'picture': "http://opgg-static.akamaized.net/images/profile_icons/profileIcon3440.jpg" },
        { "me": true, "user": 1, "message": "sample message 4", 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460" },
        { "me": false, "user": 2, "message": "Here is the sample message 5!!! 中文中文中午那个", 'picture': "http://opgg-static.akamaized.net/images/profile_icons/profileIcon3440.jpg" },
        { "me": false, "user": 2, "message": "No consequences", 'picture': "http://opgg-static.akamaized.net/images/profile_icons/profileIcon3440.jpg" },
        { "me": true, "user": 1, "message": "“Get our of my class”", 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460" },

        { "me": false, "user": 2, "message": "I am at longwood now. Getting every red signal possible", 'picture': "http://opgg-static.akamaized.net/images/profile_icons/profileIcon3440.jpg" },
        { "me": false, "user": 2, "message": "Aaaaahhh 4th red light just as we come near it", 'picture': "http://opgg-static.akamaized.net/images/profile_icons/profileIcon3440.jpg" },
        { "me": true, "user": 1, "message": "I'll go up stairs and get a seat", 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460" },
        { "me": false, "user": 2, "message": "I am near the stop. But red light 😕", 'picture': "http://opgg-static.akamaized.net/images/profile_icons/profileIcon3440.jpg" },
        { "me": true, "user": 1, "message": "if u get MFA at 5:57 you might able to reach intime by quick walking", 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460" },
      ],
      text: ''
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
      >
        <FlatList ref='scrollView' style={{ flexGrow: 1, height: 0 }}
          contentContainerStyle={{ flexGrow: 1, paddingVertical: 10, }}
          inverted={true}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <MessageRow  {...item} />
          }
          }
        />
        <View

          style={{
            padding: 8,
            borderColor: '#c8c7cc',
            borderTopWidth: 0.5,
            backgroundColor: '#EFEFF4',
          }}
        >
          <TextInput
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 8,
              padding: 8,
              borderColor: '#c8c7cc',
              borderWidth: 0.5,
              fontSize: 16,
            }}
            underlineColorAndroid={'#ffffff'}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            onEndEditing={(event) => { console.log('onEndEditing') }}
            onBlur={(event) => { console.log('onBlur') }}
            multiline={true}
            onSubmitEditing={(event) => {

              this.setState({ data: [...[{ "me": true, "user": 1, "message": this.state.text, 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460" }], ...this.state.data] })
            }
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
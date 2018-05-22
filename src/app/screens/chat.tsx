import * as React from 'react';
import {
    StyleSheet, Text, View, StatusBar, ListView,
    Button, Image, Platform, NativeModules, SafeAreaView, FlatList,
    TextInput, KeyboardAvoidingView, UIManager
} from 'react-native';

import { NavigationScreenProps, Header } from 'react-navigation'

import { MessageRow } from '../components/messages'


class KeyboardAvoidingViewX extends KeyboardAvoidingView {
    constructor(props: any) {
        props.keyboardVerticalOffset = Header.HEIGHT
        if (StatusBar.currentHeight !== undefined) {
            props.keyboardVerticalOffset += props.keyboardVerticalOffset
        }
        console.log(props.keyboardVerticalOffset)
        super(props)
    }

    render() {
        return super.render()
    }
}


class ChatScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

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
                    contentContainerStyle={{ paddingVertical: 10, }}
                    onContentSizeChange={(width,height) => this.refs.scrollView.scrollToEnd()}
                    onLayout={() => this.refs.scrollView.scrollToEnd({animated: true})}
                    
                    data={this.state.data}
                    keyExtractor={(item: any, index: number) => index.toString()}
                    renderItem={({ item }: any) => <MessageRow  {...item} />}
                />
                <View

                    style={{
                        height: 48,
                        padding: 8,
                        borderColor: '#c8c7cc',
                        borderTopWidth: 0.5,
                        backgroundColor: '#EFEFF4',
                    }}
                >
                    <TextInput
                        style={{
                            backgroundColor: '#FFFFFF',
                            height: 32,
                            borderRadius: 8,
                            padding: 8,
                            borderColor: '#c8c7cc',
                            borderWidth: 0.5,
                            fontSize: 16,
                        }}
                        underlineColorAndroid={'#ffffff'}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
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


export default ChatScreen;
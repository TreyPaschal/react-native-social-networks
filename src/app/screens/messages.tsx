import * as React from 'react';
import {
    StyleSheet, Text, View, StatusBar, ListView,
    Button, Image, Platform, NativeModules, SafeAreaView, FlatList,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

import { NavigationScreenProps, createStackNavigator } from 'react-navigation'
import { createStackNavigatorKeyboardAvoiding } from '../components/navigation'

import { MessagesRow } from '../components/messages'
import ChatScreen from './chat'



class MessagesScreenInternal extends React.Component<NavigationScreenProps, any> {
    static navigationOptions = {
        title: 'Messages',
    };

    constructor(props: any) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            data: [{ 'picture': "https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-1/p100x100/15965922_1162637983832183_7061704357911928174_n.jpg?_nc_cat=0&oh=1394af22ce150f49b4a8c695ed40fd8e&oe=5B903799", 'name': "Vikas C.", 'time': 'Last Year', 'message': 'Hmm', 'online': false },
            { 'picture': "http://opgg-static.akamaized.net/images/profile_icons/profileIcon3440.jpg", 'name': "Rockzzz", 'age': 12, 'time': 'Online', 'message': 'If you can smile, you can be the light. The world has seen enough darkness. ', 'online': true },
            { 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460", 'name': "Arch狼", 'age': 12, 'time': 'Online', 'message': 'Indeed a wise choice', 'online': true },
            { 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460", 'name': "微信团队", 'age': 12, 'time': '19:20', 'message': '这特么的只是一个简单的中文测试', 'online': false }],
        };
    }

    render() {
        return (
            <FlatList style={{ height: '100%', backgroundColor: '#fff' }}
                data={this.state.data}
                keyExtractor={(item: any, index: number) => index.toString()}
                renderItem={({ item }: any) =>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Chat', { name: item.name })}
                    ><MessagesRow  {...item} /></TouchableOpacity>}
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
});




const MessagesScreen = createStackNavigatorKeyboardAvoiding({
    Home: {
        screen: MessagesScreenInternal,
    },
    Chat: {
        path: 'people/:name',
        screen: ChatScreen,
        navigationOptions: ({ navigation }: any) => ({
            title: `${navigation.state.params.name}`,
        }),
    },
});

console.log(MessagesScreen)

MessagesScreen.navigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ tintColor }: any) => (
        <Image
            source={require('../../assets/messages.png')}
            style={[styles.icon, { tintColor: tintColor }]}
        />
    ),
};

export default MessagesScreen;
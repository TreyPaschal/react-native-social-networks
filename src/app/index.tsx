import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator, createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import PostsScreen from './screens/posts'
import ExploreScreen from './screens/explore'
import ProfileScreen from './screens/profile'
import SettingsScreen from './screens/settings'
import MessagesScreen from './screens/messages'
import LoginScreen from './screens/login'
import AuthenticationScreen from './authentication'
import { ImagePicker } from './components/image-picker'




const MainNavigator = createBottomTabNavigator({
    Explore: { screen: ExploreScreen },
    Messages: { screen: MessagesScreen },
    Posts: { screen: PostsScreen },
    Profile: { screen: ProfileScreen },
    Settings: { screen: SettingsScreen },
}, {
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 11,
            },
            tabStyle: {
                width: 100,
            },
        },
    });


const ModalNavigator = createStackNavigator(
    {
        Main: {
            screen: MainNavigator,
        },
        XImagePicker: {
            screen: ImagePicker,
        },
    },
    {
        headerMode: 'none',
    }
);

const App = createSwitchNavigator(
    {
        App: ModalNavigator,
        Auth: LoginScreen,
        Root: AuthenticationScreen,
    },
    {
        initialRouteName: 'Root',
    }
);


export default App;
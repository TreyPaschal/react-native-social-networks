import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import PostsScreen from './screens/posts'
import ExploreScreen from './screens/explore'
import ProfileScreen from './screens/profile'
import SettingsScreen from './screens/settings'
import MessagesScreen from './screens/messages'
import LoginScreen from './screens/login'
import AuthenticationScreen from './authentication'




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


const App = createSwitchNavigator(
    {
        App: MainNavigator,
        Auth: LoginScreen,
        Root: AuthenticationScreen,
    },
    {
        initialRouteName: 'Root',
    }
);


export default App;
import * as React from 'react';

import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Image,
} from 'react-native';


import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import { SafeAreaView, NavigationScreenProps, withNavigation } from 'react-navigation'

import { DefaultClient } from './helpers/client'


import { AppLoading, Asset, Font } from 'expo';


class AuthenticationScreen extends React.Component<NavigationScreenProps, any> {

    constructor(props: any) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.

        require('../assets/images/wifi.png')
        require('../assets/images/user.jpg')
        require('../assets/explore.png')
        require('../assets/friends.png')
        require('../assets/settings.png')
        require('../assets/profile.png')
        require('../assets/messages.png')
        require('../node_modules/react-navigation/src/views/assets/back-icon.png')

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

export default AuthenticationScreen;
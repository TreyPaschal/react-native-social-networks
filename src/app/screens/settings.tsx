import * as React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Switch, TouchableOpacity, Button, Slider, Image, Platform, NativeModules, SectionList } from 'react-native';
import { SafeAreaView, NavigationScreenProps, createStackNavigator } from 'react-navigation';

import { DefaultClient } from '../helpers/client'
import { SettingsButton, SettingsSwitch, SettingsSection, SettingsView, SettingsGeneralItem, SettingsNavigator } from '../components/settings'

class SettingsScreenInternal extends React.Component<NavigationScreenProps, any> {

    static navigationOptions = {
        title: 'Settings',
    };


    constructor(props: any) {
        super(props);

        this.state = {
            toggled: false,
            toggled2: false
        };
    }


    logoutAsync = async () => {

        await DefaultClient.Instance.logout();
        this.props.navigation.navigate('Root');
    };

    render() {

        return (
            <SettingsView>
                <SettingsSection>

                    <SettingsSwitch {... {
                        value: this.state.toggled2,
                        onValueChange: (value: boolean) => this.setState({ toggled2: value }),
                        title: 'Meow',
                        image: require('../../assets/images/wifi.png')
                    }} />
                    <SettingsSwitch {... {
                        value: this.state.toggled,
                        onValueChange: (value: boolean) => this.setState({ toggled: value }),
                        title: 'WLAN',
                        image: require('../../assets/images/wifi.png')
                    }} />
                </SettingsSection>

                <SettingsSection>
                    <SettingsButton {... { callback: this.logoutAsync, title: 'Sign Out' }} />
                    <SettingsButton {... { callback: this.logoutAsync, title: 'Sign Out' }} />
                    <SettingsGeneralItem>
                        <Slider />
                    </SettingsGeneralItem>
                    <SettingsNavigator {... {
                        title: 'Carrier',
                        text: 'AT&T',
                        image: require('../../assets/images/wifi.png')
                    }}>
                    </SettingsNavigator>
                    <SettingsNavigator {... {
                        title: 'Bluetooth',
                        text: 'Not Connected',
                        image: require('../../assets/images/wifi.png')
                    }}>
                    </SettingsNavigator>
                    <SettingsNavigator {... {
                        title: 'Control Center',
                        text: '',
                        image: require('../../assets/images/wifi.png')
                    }}>
                    </SettingsNavigator>
                </SettingsSection>

                <SettingsSection>
                    <SettingsButton {... { callback: this.logoutAsync, title: 'Sign Out' }} />
                </SettingsSection>
            </SettingsView>
        );
    }
}

const SettingsScreen = createStackNavigator({
    Home: {
        screen: SettingsScreenInternal,
    }
});

SettingsScreen.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }: any) => (
        <Image
            source={require('../../assets/settings.png')}
            style={[styles.icon, { tintColor: tintColor }]}
        />
    ),
};

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
});

export default SettingsScreen;
import * as React from 'react';
import {
    StyleSheet, Text, View, ScrollView, StatusBar,
    ListView, Button, Image, Platform, NativeModules, TouchableOpacity, Dimensions,
    RefreshControl, TextInput, KeyboardAvoidingView
} from 'react-native';
import { StackNavigator, TabNavigator, NavigationScreenProps, NavigationRouteConfigMap, StackNavigatorConfig, SafeAreaView } from 'react-navigation';

import { DefaultClient } from '../helpers/DefaultClient'

export class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    static navigationOptions = {
        title: 'Sign in',
    };


    render() {
        return (

            <SafeAreaView style={{
            }} >
                <KeyboardAvoidingView style={{
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    behavior="padding">
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                    />

                    <TextInput
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                        placeholder={'Username'}
                        style={styles.input}
                        autoCapitalize='none'
                    />

                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <Text >{this.state.error}</Text>

                    <Button title="Sign in" onPress={this._signInAsync} />
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }

    _signInAsync = () => {
        this.setState({ 'error': '' })
        DefaultClient.Instance.login(this.state.username, this.state.password)
            .then((response) => {
                if (response.code == 0) {
                    this.props.navigation.navigate('Auth');
                } else {
                    this.setState({ 'error': response.message })
                }
            })
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: '75%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 5,
        marginTop: 15,
    }
});
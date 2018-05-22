import * as React from 'react';
import {
    KeyboardAvoidingView
} from 'react-native';

import { NavigationScreenProps, createStackNavigator } from 'react-navigation'

export const createStackNavigatorKeyboardAvoiding = (routeConfigMap: any, stackConfig = {}): any => {
    let NavigationContainer = createStackNavigator(routeConfigMap, stackConfig)
    console.log(NavigationContainer)
    return () => {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <NavigationContainer />
            </KeyboardAvoidingView>
        );
    }
};

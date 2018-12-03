import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, ListView, Button, Image, Platform, NativeModules, Dimensions } from 'react-native';


export class UserProfileScreen extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            user: { 'picture': "https://avatars2.githubusercontent.com/u/6030719?v=3&s=460", 'name': "Meow", 'age': 12 }
        };
    }

    render() {
        let user = this.state.user;

        return (
            <View style={{ backgroundColor: 'black' }}>
                <Image source={{ uri: user['picture'] }} style={styles.photo} />
                <Image source={require('../assets/gradient.png')} style={styles.photo} />
                <ScrollView style={{ height: '100%', backgroundColor: 'transparent', zIndex: 1 }}>
                    <View style={styles.photoPlaceholder}></View>
                    <View style={styles.profile}>
                        <Text style={styles.profileTitle}>{user['name']} {user['age']}</Text>
                        <Text style={styles.profileText}>Online</Text>
                        <Text style={styles.profileText}>500 feet away</Text>
                        <Text style={styles.profileText}>{`My Profile Description
            My Profile Description
            My Profile Description
            My Profile Description
            My Profile Description`}</Text>
                        <Text style={styles.profileText}>Male</Text>
                        <Text style={styles.profileText}>5 inch</Text>
                        <Text style={styles.profileText}>Meow</Text>
                        <Text style={styles.profileText}>Meow</Text>
                        <Text style={styles.profileText}>Meow</Text>
                        <Text style={styles.profileText}>Meow</Text>
                        <Text style={styles.profileText}>Meow</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
    photo: {
        height: Dimensions.get('window').width * 4 / 3,
        width: Dimensions.get('window').width,
        borderRadius: 3,
        zIndex: 0,
        position: 'absolute'
    },
    photoPlaceholder: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
        backgroundColor: 'transparent'
    },
    profile: {
        padding: 10
    },
    profileTitle: {
        color: 'white',
        fontSize: 32
    },
    profileText: {
        color: 'white',
    }
});
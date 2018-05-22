import * as React from 'react';
import {
    StyleSheet, Text, View, ScrollView, StatusBar,
    FlatList, Button, Image, Platform, NativeModules, TouchableOpacity, Dimensions,
    RefreshControl
} from 'react-native';
import { createStackNavigator, NavigationScreenProps, NavigationRouteConfigMap, StackNavigatorConfig } from 'react-navigation';
import { PostRow } from '../components/posts'

import { DefaultClient } from '../helpers/client'


class PostsScreenInternal extends React.Component<NavigationScreenProps, any>  {
    static navigationOptions = {
        title: 'Moments',
    };

    componentDidMount() {
        this._onRefresh()
    }

    constructor(props: any) {
        super(props);

        this.state = {
            refreshing: false,
            data: [],
        };
    }

    _onRefresh() {

        this.setState({ refreshing: true });
        navigator.geolocation.getCurrentPosition((position) => {
            DefaultClient.Instance.getPosts(position)
                .then((ret) => {
                    this.setState({ refreshing: false });
                    this.setState({ data: ret.result });
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({ refreshing: false });
                });
        })
    }


    render() {
        return (
            <FlatList
                style={{ backgroundColor: '#FFFFFF' }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
                horizontal={false}
                data={this.state.data}
                keyExtractor={(item: any, index) => item._id}
                renderItem={({ item }: any) =>
                    <PostRow {...item} />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
    photo: {
        height: (Dimensions.get('window').width - 2) / 3,
        width: (Dimensions.get('window').width - 2) / 3,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#c8c7cc',
        borderRadius: 3,
    },
});

const PostsScreen = createStackNavigator({
    Home: {
        screen: PostsScreenInternal,
    }
});


PostsScreen.navigationOptions = {
    tabBarLabel: 'Moments',
    tabBarIcon: ({ tintColor }: any) => (
        <Image
            source={require('../../assets/friends.png')}
            style={[styles.icon, { tintColor: tintColor }]}
        />
    ),
};

export default PostsScreen;

import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#d6d7da',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 14,
        height: 24,
        color: '#909090',
        paddingTop: 4,
        flexGrow: 1,
    },
    timestamp: {
        fontSize: 12,
        height: 24,
        color: '#909090',
        paddingTop: 4
    },
    title: {
        fontSize: 16,
        height: 24,
        flexGrow: 1,
        width: 0,
        paddingTop: 4
    },
    photo: {
        height: 48,
        width: 48,
        borderRadius: 4,
        backgroundColor: '#d6d7da',
        borderWidth: 0.25,
        borderColor: '#d6d7da',
    },
});

export const MessagesRow = (props) => (
    <View style={styles.container}>
        <Image source={{ uri: props.picture }} style={styles.photo} />
        <View style={{
            flexDirection: 'column', marginLeft: 12, flexGrow: 1,
            width: 0,
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.title}
                    ellipsizeMode='tail'
                    numberOfLines={1}
                >
                    {`${props.name}`}
                </Text>
                <Text style={[styles.timestamp]}>
                    {props.online ? <Text style={{ color: '#00cc00' }}>{`${props.time}`}</Text> : props.time}
                </Text>
            </View>
            <Text style={styles.text}
                ellipsizeMode={'tail'}
                numberOfLines={1}>
                {`${props.message}`}
            </Text>
        </View>
    </View>
);


const stylesChat = StyleSheet.create({
    container: {
        flex: 1,
        padding: 7.5,
        flexDirection: 'row',
    },
    containerMe: {
        flexDirection: 'row-reverse',
    },
    messageContainer: {
        flexGrow: 1,
        width: 0,
        marginLeft: 7.5,
        marginRight: 43.5,
        alignItems: 'flex-start',
    },
    messageContainerMe: {
        flexGrow: 1,
        marginLeft: 43.5,
        marginRight: 7.5,
        alignItems: 'flex-end',
    },
    bubble: {
        backgroundColor: '#EFEFF4',
        borderRadius: 7.5,
        paddingVertical: 7.5,
        paddingHorizontal: 12,
    },
    bubbleMe: {
        backgroundColor: '#dcf8c6',
    },
    message: {
        fontSize: 16,
        lineHeight:21,
    },
    photo: {
        height: 36,
        width: 36,
        borderRadius: 4,
        backgroundColor: '#d6d7da'
    },
});




export const MessageRow = (props) => (
    <View style={props.me ? [stylesChat.container, stylesChat.containerMe] : stylesChat.container}>
        <Image source={{ uri: props.picture }} style={stylesChat.photo} />
        <View style={props.me ? [stylesChat.messageContainer, stylesChat.messageContainerMe] : stylesChat.messageContainer}>
            <View style={props.me ? [stylesChat.bubble, stylesChat.bubbleMe] : stylesChat.bubble}>
                <Text style={stylesChat.message}>
                    {`${props.message}`}
                </Text>
            </View>
        </View>
    </View>
);

import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    containerBorder: {
        paddingTop: 10,
        backgroundColor: '#EFEFF4',
    },
    container: {
        padding: 5,
        backgroundColor: '#FFFFFF',
    },
    nameCard: {
        padding: 5,
        flexDirection: 'row',
    },
    nameCardphoto: {
        height: 36,
        width: 36,
        borderRadius: 4,
        backgroundColor: '#d6d7da'
    },
    nameCardTitle: {
        height: 36,
        marginLeft: 7.5,
    },
    nameCardName: {
        fontSize: 15,
        fontWeight: "600",
        height: 20,
    },
    nameCardMetadata: {
        fontSize: 12,
        height: 16,
    },
    postBody: {
    },
    postBodyText: {
        padding: 5,
    },
    postBodyExtra: {
        padding: 2.5,
        width: '100%',
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    postPanel: {
        marginTop: 5,
        borderTopWidth: 0.5,
        borderColor: '#d6d7da',
        paddingTop: 10,
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    postPanelItem: {
        flex: 1,
        alignItems: 'center',
    },
    postBodyExtraPhotoSingleFrame: {
        padding: 2.5,
        width: Dimensions.get('window').width - 15,
    },
    postBodyExtraPhotoDoubleFrame: {
        padding: 2.5,
        aspectRatio: 1,
        width: (Dimensions.get('window').width - 15) / 2,
        height: (Dimensions.get('window').width - 15) / 2,
    },
    postBodyExtraPhotoTripleFrame: {
        padding: 2.5,
        aspectRatio: 1,
        width: (Dimensions.get('window').width - 15) / 3,
        height: (Dimensions.get('window').width - 15) / 3,
    },
    postBodyExtraPhotoMultiple: {
        width: '100%',
        height: '100%',
        borderWidth: 0.5,
        backgroundColor: '#d6d7da',
        borderColor: '#d6d7da'
    },
});

class BodyExtraPhotoSingle extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {
            width: 0,
            height: 0
        };
    }

    _onLayout(event: any) {
        const containerWidth = event.nativeEvent.layout.width;

        Image.getSize(this.props.source, (width, height) => {
            this.setState({
                width: containerWidth,
                height: Math.min(containerWidth * Math.min((height / width), 1), height * 3)
            });
        });
    }

    render() {
        return (
            <View onLayout={this._onLayout.bind(this)} style={{ flex: 1 }}>
                <Image
                    resizeMode='contain'
                    source={this.props.source}
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                        backgroundColor: '#d6d7da',
                        borderColor: '#d6d7da'
                    }} />
            </View>
        );
    }
}



const PostRowExtraImagesSingle = (props: any) => (
    <View style={styles.postBodyExtra}>
        {props.photos.map((item: string, index: number) => {
            // return <View style={styles.postBodyExtraPhotoSingleFrame}><Image source={{ uri: item }} resizeMode='contain' style={styles.postBodyExtraPhotoSingle} /></View>
            return <View key={index} style={styles.postBodyExtraPhotoSingleFrame}><BodyExtraPhotoSingle source={{ uri: item }} /></View>
        })}
    </View>
);

const PostRowExtraImagesDouble = (props: any) => (
    <View style={styles.postBodyExtra}>
        {props.photos.map((item: string, index: number) => {
            return <View key={index} style={styles.postBodyExtraPhotoDoubleFrame}><Image source={{ uri: item }} style={styles.postBodyExtraPhotoMultiple} /></View>
        })}
    </View>
);

const PostRowExtraImagesTriple = (props: any) => (
    <View style={styles.postBodyExtra}>
        {props.photos.map((item: string, index: number) => {
            return <View key={index} style={styles.postBodyExtraPhotoTripleFrame}><Image source={{ uri: item }} style={styles.postBodyExtraPhotoMultiple} /></View>
        })}
    </View>
);

const PostRowExtraImages = (props: any) => {
    if (props.photos.length == 0) {
        return null;
    } else if (props.photos.length == 1) {
        return <PostRowExtraImagesSingle {...props} />;
    } else if (props.photos.length == 2) {
        return <PostRowExtraImagesDouble {...props} />;
    } else if (props.photos.length == 4) {
        return <PostRowExtraImagesDouble {...props} />;
    } else {
        return <PostRowExtraImagesTriple {...props} />;
    }
};



export const PostRow = (props: any) => {
    console.log(props.photos[0])
    return (
        <View style={styles.containerBorder}>
            <View style={styles.container}>
                <View style={styles.nameCard}>
                    <Image source={{ uri: props.user_picture }} style={styles.nameCardphoto} />
                    <View style={styles.nameCardTitle}>
                        <Text style={styles.nameCardName}>
                            {`${props.text}`}
                        </Text>
                        <Text style={styles.nameCardMetadata}>
                            {`${props.timestamp}`}
                        </Text>
                    </View>
                </View>
                <View style={styles.postBody}>
                    <View style={styles.postBodyText}>
                        <Text style={{}}>
                            {`${props.text}`}
                        </Text>
                    </View>
                    <PostRowExtraImages {...props} />
                </View>
                <View style={styles.postPanel}>
                    <View style={styles.postPanelItem}>
                        <Text style={{}}>
                            Like
                        </Text>
                    </View>
                    <View style={styles.postPanelItem}>
                        <Text style={{}}>
                            Comment
                        </Text>
                    </View>
                    <View style={styles.postPanelItem}>
                        <Text style={{}}>
                            Share
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
};
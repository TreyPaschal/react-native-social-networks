import * as React from 'react';
import {
  View, CameraRoll, Button, Image, Text,
  FlatList, SafeAreaView, TouchableOpacity
} from 'react-native';


export class ImagePicker extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      photos: [],
      last_page_info: undefined
    };
  }

  static navigationOptions = {
  };


  componentDidMount() {
    this._handleButtonPress()
  }

  _handleButtonPress = () => {
    if (this.state.last_page_info === undefined) {
      CameraRoll.getPhotos({
        first: 64,
        assetType: 'Photos',
      })
        .then(r => {
          this.setState({ photos: r.edges });
          this.setState({ last_page_info: r.page_info });
        })
        .catch((err) => {
          //Error Loading Images
        });
    } else if (this.state.last_page_info.has_next_page) {
      CameraRoll.getPhotos({
        first: 64,
        assetType: 'Photos',
        after: this.state.last_page_info.end_cursor
      })
        .then(r => {
          this.setState({ photos: this.state.photos.concat(r.edges) });
          this.setState({ last_page_info: r.page_info });
        })
        .catch((err) => {
          //Error Loading Images
        });
    }

  };
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.photos}
          keyExtractor={(item: any, index) => index.toString()}
          onEndReachedThreshold={0.125}
          onEndReached={({ distanceFromEnd }) => {
            console.log('on end reached ', distanceFromEnd)
            this._handleButtonPress()
          }}
          numColumns={4}
          renderItem={({ item, i }: any) => (
            <TouchableOpacity key={i} style={{
              flex: 1,
              aspectRatio: 1,
              borderWidth: 1,
              borderColor: '#FFFFFF'
            }}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                }}
                source={{ uri: item.node.image.uri }}
              />
              <View style={{
                position: 'absolute',
                right: 5.5,
                top: 5.5,
                height: 22, width: 22,
                borderRadius: 11, borderWidth: 2,
                borderColor: '#333333',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                opacity: 0.5,
              }}>
                <Text style={{ fontSize: 15, color: '#333333', fontWeight: '800' }}>✓</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}
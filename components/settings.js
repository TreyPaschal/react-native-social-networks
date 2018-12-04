
import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, Switch, ScrollView, Slider } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da',
  },
  text: {
    fontSize: 16,
    color: '#d6d7da',
  },
  title: {
    fontSize: 18,
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 3,
  },
});

export const SettingsButton = (props) => (
  <View style={{
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#c8c7cc',
    borderBottomWidth: 0.5,
    padding: 4
  }}>
    <Button
      onPress={props.callback}
      title={props.title}
    />
  </View>
);

export const SettingsGeneralItem = (props) => (
  <View style={{
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#c8c7cc',
    borderBottomWidth: 0.5,
    padding: 4
  }}>
    {props.children}
  </View>
);

export const SettingsSwitch = (props) => (
  <View style={{
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row'
  }}>
    <Image style={{ height: 32, width: 32, marginVertical: 7, marginHorizontal: 15 }} source={props.image} />
    <View style={{
      backgroundColor: '#FFFFFF',
      borderBottomColor: '#c8c7cc', borderBottomWidth: 0.5,
      paddingVertical: 7,
      paddingLeft: 0,
      paddingRight: 15,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <Text style={{ lineHeight: 32, fontSize: 17 }}>{props.title}</Text>
      <Switch
        onValueChange={props.onValueChange}
        value={props.value}
      />
    </View>
  </View>
);

export const SettingsNavigator = (props) => (
  <View style={{
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row'
  }}>
    <Image style={{ height: 32, width: 32, marginVertical: 7, marginHorizontal: 15 }} source={props.image} />
    <View style={{
      backgroundColor: '#FFFFFF',
      borderBottomColor: '#c8c7cc', borderBottomWidth: 0.5,
      paddingVertical: 7,
      paddingLeft: 0,
      paddingRight: 15,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <Text style={{ lineHeight: 32, fontSize: 17 }}>{props.title}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ lineHeight: 32, fontSize: 17, color: '#909090' }}>{props.text}</Text>
        <Text style={{ lineHeight: 32, fontSize: 30, color: '#c8c7cc', fontWeight: '300', paddingLeft: 15 }}>›</Text>
      </View>
    </View>
  </View>
);


export const SettingsSection = (props) => (
  <View style={{
    backgroundColor: '#EFEFF4',
    paddingTop: 20, paddingBottom: 15
  }}>
    <View style={{
      backgroundColor: '#FFFFFF',
      borderTopColor: '#c8c7cc', borderTopWidth: 0.5
    }}>
      {props.children}
    </View>

    <View style={{
      height: 0,
      marginTop: -0.5,
      borderBottomColor: '#c8c7cc', borderBottomWidth: 0.5
    }} />
  </View>);



export const SettingsView = (props) => (
  <ScrollView style={{
    backgroundColor: '#EFEFF4',
    paddingVertical: 7
  }}>
    {props.children}
  </ScrollView>
)
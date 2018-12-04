import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import { ExploreScreen } from './ExploreScreen';
import { MessagesScreen } from './MessagesScreen';
import { PostsScreen } from './PostsScreen';
import { ProfileScreen } from './ProfileScreen';
import { SettingsScreen } from './SettingsScreen';

export const MainNavigator = createBottomTabNavigator(
  {
    Explore: { screen: ExploreScreen },
    Messages: { screen: MessagesScreen },
    Posts: { screen: PostsScreen },
    Profile: { screen: ProfileScreen },
    Settings: { screen: SettingsScreen },
  }, {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 11,
      },
      tabStyle: {
        width: 100,
      },
    },
  });
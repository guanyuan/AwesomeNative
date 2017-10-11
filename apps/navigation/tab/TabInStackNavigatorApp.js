import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

import TabNavigatorApp from './TabNavigatorApp';
import ProfileScreen from '../stack/ProfileScreen';

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Profile', { user: 'Lucy' })}
          title="Chat with Lucy"
          />
      </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Profile', { user: 'Jane' })}
          title="Chat with Jane"
          />
      </View>
    )
  }
}

const TabScreen = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});


export const TabInStackNavigatorApp = StackNavigator({
  Main: {
    screen: TabScreen,
    navigationOptions: {
        title: 'My Chats',
      },
    },
  Profile: {screen: ProfileScreen},
});

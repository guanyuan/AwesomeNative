import React, { Component } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'welcome view',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile')
        }
      />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'profile view',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Main view"
        onPress={() =>
          navigate('Main')
        }
      />
    );
  }
}


export const StackNavigatorApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

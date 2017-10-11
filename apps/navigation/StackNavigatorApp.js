import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
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
          navigate('Profile', {user: 'Jane'})
        }
      />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `profile of ${navigation.state.params.user}`,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Profile detail of {params.user}</Text>
      </View>

    );
  }
}


export const StackNavigatorApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

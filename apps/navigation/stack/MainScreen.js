import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MainScreen extends React.Component {
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

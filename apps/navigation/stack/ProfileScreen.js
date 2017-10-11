
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ProfileScreen extends React.Component {
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

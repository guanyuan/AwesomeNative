import React from 'react';
import { View, Text, Button } from 'react-native';

export default class AllContactsScreen extends React.Component {
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

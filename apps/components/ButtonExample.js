import React from 'react';
import { Button, Alert, View } from 'react-native';

export default class ButtonExample extends React.Component {

  onButtonPress() {
    Alert.alert('Button has been pressed!');
  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          onPress={this.onButtonPress}
          title="This looks great!"
          accessibilityLabel="This sounds great!"
        />
        <Button
          disabled
          onPress={this.onButtonPress}
          title="OK"
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
      </View>

    );
  }
}

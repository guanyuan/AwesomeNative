import React from 'react';
import { AccessibilityInfo, View, Text } from 'react-native';

import { Styles } from "../style/common";

export default class AccessibilityInfoExample extends React.Component {
  state = {
    screenReaderEnabled: false,
  }

  componentDidMount() {
    AccessibilityInfo.addEventListener(
      'change',
      this._handleScreenReaderToggled
    );
    AccessibilityInfo.fetch().done((isEnabled) => {
      this.setState({
        screenReaderEnabled: isEnabled
      });
    });
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'change',
      this._handleScreenReaderToggled
    );
  }

  _handleScreenReaderToggled = (isEnabled) => {
    this.setState({
      screenReaderEnabled: isEnabled,
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>
          The screen reader is {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
        </Text>
      </View>
    );
  }
}

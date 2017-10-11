import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,} from 'react-native';
import TimerMixin from 'react-timer-mixin';

export default class ActivityIndicatorExample extends React.Component {
  state = {
    animating: true
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  setToggleTimeout = () => {
    setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  }

  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
        color="pink"
      />
    );
  }
};


const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

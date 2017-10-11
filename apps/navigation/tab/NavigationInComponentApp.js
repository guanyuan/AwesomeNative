import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { TabScreen } from './screen/TabScreen';
import ProfileScreen from '../stack/ProfileScreen';

class NavigatorWrappingScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>This is other components</Text>
        <Text>This is other components</Text>
        <TabScreen navigation={this.props.navigation}/>
      </View>
    );
  }
}

NavigatorWrappingScreen.router = TabScreen.router;

export const NavigationInComponentApp = StackNavigator({
  Home: { screen: NavigatorWrappingScreen },
  Profile: { screen: ProfileScreen },
});

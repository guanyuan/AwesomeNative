import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';

export const StackNavigatorApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

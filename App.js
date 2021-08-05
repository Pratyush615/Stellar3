import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import DailyPicScreen from './Screens/DailyPics';
import SpaceCraftsScreen from './Screens/SpaceCraft';
import StarMapScreen from './Screens/StarMap';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions = {{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
          <Stack.Screen name="DailyPic" component={DailyPicScreen} />
          <Stack.Screen name="StarMap" component={StarMapScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
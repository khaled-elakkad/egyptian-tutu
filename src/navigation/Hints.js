import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HintsList from '../screens/HintsList';
import HintImage from '../screens/HintImage';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="HintsList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HintsList" component={HintsList} />
      <Stack.Screen name="HintImage" component={HintImage} />
    </Stack.Navigator>
  );
}

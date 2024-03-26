import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTabNavigation from '../navigation/BottomTabNavigation'
import HomeScreen from '../screens/homeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
        />
        {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
      </Stack.Navigator>
  );
}
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  Login,
  Signup,
  Chats,
  PersonalChat,
  PersonalChat2,
  AddM,
  Feed,
  Network,
  MoreP,
} from '../screens'
import BottomTabNavigation from '../navigation/BottomTabNavigation'

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="Login"
          component={Login}
      />
      <Stack.Screen
          name="Signup"
          component={Signup}
      />
    </Stack.Navigator>
  );
}


{/* <SafeAreaProvider onLayout={onLayoutRootView}>
<NavigationContainer>
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="Login"
    >
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="Signup"
            component={Signup}
        />  
        <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
        />
        <Stack.Screen
            name="Chats"
            component={Chats}
        />
        <Stack.Screen
            name="PersonalChat"
            component={PersonalChat}
        />
        <Stack.Screen
            name="PersonalChat2"
            component={PersonalChat2}
        />
        <Stack.Screen
            name="AddM"
            component={AddM}
        />
        <Stack.Screen
            name="Feed"
            component={Feed}
        />
        <Stack.Screen
            name="MoreP"
            component={MoreP}
        />
    </Stack.Navigator>
</NavigationContainer>
</SafeAreaProvider> */}
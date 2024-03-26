import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useState, useEffect, useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

import { chatkitty } from '../chatkitty';
import Loading from '../components/loading';

import AuthStack from './authStack';
import HomeStack from './homeStack';
import { AuthContext } from './authProvider';

import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync()

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(true);
  // load fonts
  const [fontsLoaded] = useFonts({
    black: require('../assets/fonts/Mulish-Black.ttf'),
    regular: require('../assets/fonts/Mulish-Regular.ttf'),
    bold: require('../assets/fonts/Mulish-Bold.ttf'),
    medium: require('../assets/fonts/Mulish-Medium.ttf'),
    mediumItalic: require('../assets/fonts/Mulish-MediumItalic.ttf'),
    semiBold: require('../assets/fonts/Mulish-SemiBold.ttf'),
    semiBoldItalic: require('../assets/fonts/Mulish-SemiBoldItalic.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
        await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  // if (!fontsLoaded) {
  //     return null
  // }

  useEffect(() => {
    return chatkitty.onCurrentUserChanged((currentUser) => {
      setUser(currentUser);

      if (initializing) {
        setInitializing(false);
      }

      setLoading(false);
    });
  }, [initializing, setUser]);

  if (!fontsLoaded || loading) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        {user ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
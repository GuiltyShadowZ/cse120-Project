import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
    Login,
    Signup,
    PersonalChat,
    Feed,
    Network,
    MoreP,
} from './screens'
import { useCallback } from 'react'
import BottomTabNavigation from './navigation/BottomTabNavigation'
SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator()

export default function App() {
    // load fonts
    const [fontsLoaded] = useFonts({
        black: require('./assets/fonts/Mulish-Black.ttf'),
        regular: require('./assets/fonts/Mulish-Regular.ttf'),
        bold: require('./assets/fonts/Mulish-Bold.ttf'),
        medium: require('./assets/fonts/Mulish-Medium.ttf'),
        mediumItalic: require('./assets/fonts/Mulish-MediumItalic.ttf'),
        semiBold: require('./assets/fonts/Mulish-SemiBold.ttf'),
        semiBoldItalic: require('./assets/fonts/Mulish-SemiBoldItalic.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return (
        <SafeAreaProvider onLayout={onLayoutRootView}>
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
                        name="PersonalChat"
                        component={PersonalChat}
                    />

                    <Stack.Screen
                        name="Feed"
                        component={Feed}
                    />

                    <Stack.Screen
                        name="Network"
                        component={Network}
                    />  

                    <Stack.Screen
                        name="MoreP"
                        component={MoreP}
                    />  



                    
                    
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

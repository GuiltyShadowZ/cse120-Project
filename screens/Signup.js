import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function SignupScreen({ navigation }) {
    const fadeInLogoValue = useSharedValue(0);
    const fadeInSignupFormValue = useSharedValue(0);

    React.useEffect(() => {
        // Start logo animation with a delay of 200 milliseconds
        setTimeout(() => {
            fadeInLogoValue.value = withTiming(1, { duration: 1000 });
        }, 200);

        // Start signup form animation with a delay of 400 milliseconds (after the logo animation)
        setTimeout(() => {
            fadeInSignupFormValue.value = withTiming(1, { duration: 1000 });
        }, 400); // 200ms delay (from the previous animation) + 1000ms duration
    }, []);

    const fadeInLogoStyle = useAnimatedStyle(() => {
        return {
            opacity: fadeInLogoValue.value,
        };
    });

    const fadeInSignupFormStyle = useAnimatedStyle(() => {
        return {
            opacity: fadeInSignupFormValue.value,
        };
    });

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Image style={styles.backgroundImage} source={require('../assets/images/BackgroundE.png')} />
                <Animated.View style={[styles.logoContainer, fadeInLogoStyle]}>
                    <Image style={styles.logo} source={require('../assets/images/Connectado.png')} />
                </Animated.View>
                <Animated.View style={[styles.signupForm, fadeInSignupFormStyle]}>
                    <Text style={styles.signupText}>Sign Up</Text>
                    <TextInput style={[styles.input, { color: 'white' }]} placeholder="Username" placeholderTextColor="white" />
                    <TextInput style={[styles.input, { color: 'white' }]} placeholder="Email" placeholderTextColor="white" secureTextEntry />
                    <TextInput style={[styles.input, { color: 'white' }]} placeholder="Password" placeholderTextColor="white" secureTextEntry />
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigation')} style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.loginTextContainer}>
                        <Text style={styles.loginText}>Have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.loginLink}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    logoContainer: {
        position: 'absolute',
        top: '10%',
    },
    logo: {
        height: 220,
        width: 350,
    },
    signupForm: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    signupText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 0,
        marginBottom: 350,
    },
    input: {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        color: 'black',
    },
    button: {
        width: '100%',
        backgroundColor: '#00BFFF',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    loginTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        fontSize: 13,
        
    },
    loginLink: {
        color: '#00BFFF',
        marginLeft: 5,
        fontSize: 13,
    },
});
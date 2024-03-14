import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'; 
import Contacts from './Contacts';

export default function LoginScreen() {
    const fadeInLogoValue = useSharedValue(0);
    const fadeInLoginFormValue = useSharedValue(0);
    const navigation = useNavigation(); 

    const handleSignUpPress = () => {
        navigation.navigate('Signup'); 
    };

    React.useEffect(() => {
        setTimeout(() => {
            fadeInLogoValue.value = withTiming(1, { duration: 1000 });
        }, 200);

        setTimeout(() => {
            fadeInLoginFormValue.value = withTiming(1, { duration: 1000 });
        }, 400); 
    }, []);

    const fadeInLogoStyle = useAnimatedStyle(() => {
        return {
            opacity: fadeInLogoValue.value,
        };
    });

    const fadeInLoginFormStyle = useAnimatedStyle(() => {
        return {
            opacity: fadeInLoginFormValue.value,
        };
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inner}>
                <StatusBar style="light" />
                <Image style={styles.backgroundImage} source={require('../assets/images/BackgroundD.png')} />
                <Animated.View style={[styles.logoContainer, fadeInLogoStyle]}>
                    <Image style={styles.logo} source={require('../assets/images/Connectado.png')} />
                </Animated.View>
                <Animated.View style={[styles.loginForm, fadeInLoginFormStyle]}>
                    <Text style={styles.loginText}>Login</Text>
                    <TextInput style={[styles.input, { color: 'white' }]} placeholder="Email" placeholderTextColor="white" />
                    <TextInput style={[styles.input, { color: 'white' }]} placeholder="Password" placeholderTextColor="white" secureTextEntry />
                    <TouchableOpacity  onPress={() => navigation.navigate('BottomTabNavigation')} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signupTextContainer}>
                        <Text style={styles.signupText}>Need an account?</Text>
                        <TouchableOpacity onPress={handleSignUpPress}>
                            <Text style={styles.signupLink}>Sign Up</Text>
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
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    loginForm: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    loginText: {
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
    signupTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        color: 'white',
    },
    signupLink: {
        color: '#00BFFF',
        marginLeft: 5,
        marginRight: 5,
        fontSize: 13,
    },
});
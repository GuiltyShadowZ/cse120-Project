import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Import KeyboardAwareScrollView
import { StatusBar } from 'expo-status-bar';
import { IconButton } from 'react-native-paper';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

import FormButton from '../components/formButton';
import FormInput from '../components/formInput';
import Loading from '../components/loading';
import { AuthContext } from '../context/authProvider';


export default function SignupScreen({ navigation }) {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, loading } = useContext(AuthContext);

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

    if (loading) {
        return <Loading />;
    }

    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.container}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            keyboardShouldPersistTaps='handled' // This helps with tapping through inputs
            enableOnAndroid={true} // Specific prop for better handling on Android devices
            enableAutomaticScroll={Platform.OS === 'ios'} // Automatically scroll on iOS
        >
            <View style={styles.container}>
                <StatusBar style="light" />
                <Image style={styles.backgroundImage} source={require('../assets/images/BackgroundD.png')} />
                <Animated.View style={[styles.logoContainer, fadeInLogoStyle]}>
                    <Image style={styles.logo} source={require('../assets/images/Connectado.png')} />
                </Animated.View>
                <Animated.View style={[styles.signupForm, fadeInSignupFormStyle]}>
                    <Text style={styles.signupText}></Text>
                    <FormInput
                        labelName='Username'
                        value={displayName}
                        autoCapitalize='none'
                        onChangeText={(userDisplayName) => setDisplayName(userDisplayName)}
                    />   
                    <FormInput
                        labelName='Email'
                        value={email}
                        autoCapitalize='none'
                        onChangeText={(userEmail) => setEmail(userEmail)}
                    />
                    <FormInput
                        labelName='Password'
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                    />  
                    <FormButton
                        title='Sign Up'
                        modeValue='contained'
                        labelStyle={styles.loginButtonLabel}
                        buttonColor='#00BFFF'
                        onPress={() => register(displayName, email, password)}
                    />  
                    <IconButton
                        icon='keyboard-backspace'
                        size={30}
                        style={styles.navButton}
                        iconColor='white'
                        onPress={() => navigation.goBack()}
                    />
                </Animated.View>
            </View>
        </KeyboardAwareScrollView>
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
    loginButtonLabel: {
        fontSize: 18,
    },
});

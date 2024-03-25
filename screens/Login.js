import React, { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Import KeyboardAwareScrollView
import { Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import FormButton from '../components/formButton.js';
import FormInput from '../components/formInput.js';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fadeInLogoValue = useSharedValue(0);
  const fadeInLoginFormValue = useSharedValue(0);

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
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      keyboardShouldPersistTaps='handled' // This helps with tapping through inputs
      enableOnAndroid={true} // Specific prop for better handling on Android devices
      enableAutomaticScroll={Platform.OS === 'ios'} // Automatically scroll on iOS
    >
      <View style={styles.inner}>
        <StatusBar style="light" />
        <Image style={styles.backgroundImage} source={require('../assets/images/BackgroundD.png')} />
        <Animated.View style={[styles.logoContainer, fadeInLogoStyle]}>
          <Image style={styles.logo} source={require('../assets/images/Connectado.png')} />
        </Animated.View>
        <Animated.View style={[styles.loginForm, fadeInLoginFormStyle]}>
          {/* Existing form fields and buttons */}
          <Text style={styles.loginText}></Text>
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
            title='Login'
            modeValue='contained'
            labelStyle={styles.loginButtonLabel}
            buttonColor='#00BFFF'
            textColor='white'
            onPress={() => navigation.navigate('BottomTabNavigation')}
          />
          <FormButton
            title='Sign up here'
            modeValue='text'
            uppercase={false}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.navigate('Signup')}
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
  loginButtonLabel: {
    fontSize: 18,
  },
  navButtonText: {
    fontSize: 16,
    color: 'white'
  }
});
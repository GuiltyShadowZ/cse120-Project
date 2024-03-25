import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function FormInput({ labelName, ...rest }) {
  return (
    <TextInput
      label={labelName}
      style={styles.input}
      theme={{ colors: { onSurfaceVariant: 'white'} }}
      underlineColor='transparent'
      activeUnderlineColor='white'
      textColor='white'
      numberOfLines={1}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 10,
    marginBottom: 10,
    width: width / 1.5,
    height: height / 15,
  }
});
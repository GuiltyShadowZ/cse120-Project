import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='white' />
      <Text style={styles.indicatorText}>Sponsored by Firebase (not actually)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#323d7b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicatorText: {
    fontSize: 16,
    marginTop: 14,
    color: 'white',
  },
});
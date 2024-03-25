import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='black' />
      <Text style={styles.indicatorText}>Sponsored by Firebase (not really)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicatorText: {
    fontSize: 18,
    marginTop: 12,
  },
});
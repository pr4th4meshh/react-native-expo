import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  // Simulating loading state with a timeout
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading after 2 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout on unmount (cleanup)
    return () => clearTimeout(timeout);
  }, []);

  // If loading is true, render the loading indicator
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // Once loading is done, return the main content or next screen
  return <>
  </>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
  },
});

export default LoadingScreen;

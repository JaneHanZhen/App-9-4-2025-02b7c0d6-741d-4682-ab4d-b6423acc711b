import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../components/ui/button';
import { getColor } from '../../lib/utils';

export default function HomeScreen() {
  const { height } = useWindowDimensions();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[getColor('background'), getColor('muted')]}
        style={[styles.gradient, { minHeight: height }]}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.heading}>
              Hello World!
            </Text>
            <Text style={styles.paragraph}>
              Welcome to your new React Native application built with Expo and TypeScript.
            </Text>
            <View style={styles.buttonContainer}>
              <Button size="lg" style={styles.button} textStyle={styles.buttonText}>
                Get Started
              </Button>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    maxWidth: 600,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: getColor('foreground'),
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
    color: getColor('mutedForeground'),
  },
  buttonContainer: {
    // For animation in future if needed
  },
  button: {
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 18,
  },
});
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import SearchForm from './SearchForm';

const HeroSection = () => {
  return (
    <ImageBackground
      source={{ uri: '/placeholder.svg?height=400&width=1200' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
        </Text>
        <SearchForm />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 70
  },
});

export default HeroSection;


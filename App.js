import React from 'react';
import { View } from 'react-native';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <Header />
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
    </View>
  );
};

export default App;


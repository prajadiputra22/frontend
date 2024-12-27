import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navigation = () => {
  const menuItems = [
    'HOME',
    'INK CARTRIDGES',
    'TONER CARTRIDGES',
    'CONTACT US',
    'LOGIN / REGISTER'
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Text style={styles.menuText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1e88e5',
    padding: 10,
    margin: 50
  },
  menuItem: {
    padding: 15,
    textAlign:'center'
  },
  menuText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default Navigation;


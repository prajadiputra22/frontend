import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image 
          source={{ uri: '/placeholder.svg?height=40&width=40' }}
          style={styles.logoIcon}
        />
        <Text style={styles.logoText}>CARTRIDGE KINGS</Text>
      </View>
      
      <View style={styles.rightSection}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="SEARCH"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>CART (1)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 300,
      paddingVertical: 16,
      backgroundColor: '#fff',
    },
    logo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    logoIcon: {
      width: 24,
      height: 24,
    },
    logoText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#333',
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
    },
    searchInput: {
      width: 200,
      padding: 8,
      fontSize: 14,
    },
    searchButton: {
      padding: 8,
      backgroundColor: 'transparent',
    },
    searchIcon: {
      fontSize: 16,
    },
    cartButton: {
      backgroundColor: '#ff8c00',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 4,
    },
    cartText: {
      color: '#fff',
      fontWeight: '500',
      fontSize: 14,
    },
  });

export default Header;


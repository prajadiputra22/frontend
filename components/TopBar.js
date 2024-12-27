import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftLinks}>
        <TouchableOpacity>
          <Text style={styles.link}>Franchise Opportunities</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Feedback</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightLinks}>
        <Text style={styles.link}>hello@email.com</Text>
        <Text style={styles.link}>0800 022 2 022</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 300,
        paddingVertical: 20,
      },
      leftLinks: {
        flexDirection: 'row',
        gap: 24,
        alignItems: 'center',
      },
      rightLinks: {
        flexDirection: 'row',
        gap: 24,
        alignItems: 'center',
      },
      link: {
        color: '#666',
        fontSize: 14,
      },
    });

export default TopBar;


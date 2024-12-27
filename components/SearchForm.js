import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SearchForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>3-Step Easy Search®</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Search by Serial Number</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <View style={styles.pickerContainer}>
          <Picker style={styles.picker}>
            <Picker.Item label="1. Printer Brand" value="" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker style={styles.picker}>
            <Picker.Item label="2. Printer Series" value="" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker style={styles.picker}>
            <Picker.Item label="3. Printer Model" value="" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.findButton}>
          <Text style={styles.findButtonText}>FIND CARTRIDGES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1e88e5',
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#1e88e5',
    fontWeight: '500',
  },
  form: {
    gap: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
  },
  findButton: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  findButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default SearchForm;


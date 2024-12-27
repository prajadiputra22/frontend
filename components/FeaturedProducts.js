import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const products = [
  {
    id: 1,
    name: 'HP 62 Black Ink Cartridge',
    code: '(i-PC2P04AE)',
    price: 9.49,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 2,
    name: 'Canon MF-3110 Toner',
    code: '(C2P04AE)',
    price: 36.45,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 3,
    name: 'HP 62 Black Ink Cartridge',
    code: '(i-PC2P04AE)',
    price: 5.99,
    image: '/placeholder.svg?height=200&width=200',
  },
];

const FeaturedProducts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FEATURED PRODUCTS</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productsContainer}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productCode}>{product.code}</Text>
              <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  productCard: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  productCode: {
    color: '#666',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default FeaturedProducts;


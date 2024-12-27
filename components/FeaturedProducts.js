import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const products = [
  {
    id: 1,
    name: 'HP 62 Black Ink Cartridge',
    code: '(i-PC2P04AE)',
    price: 9.49,
    image: require('../assets/HP62Black.jpeg'),
  },
  {
    id: 2,
    name: 'Canon MF-3110 Toner',
    code: '(C2P04AE)',
    price: 36.45,
    image: require('../assets/canon.jpeg'),
  },
  {
    id: 3,
    name: 'HP 62 Black Ink Cartridge',
    code: '(i-PC2P04AE)',
    price: 5.99,
    image: require('../assets/HP62Black.jpeg'),
  },
];

const FeaturedProducts = () => {
  const scrollViewRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    scrollViewRef.current.scrollTo({ x: 0, animated: true });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FEATURED PRODUCTS</Text>

      {/* Arrow buttons for scrolling */}
      <TouchableOpacity style={styles.arrowButtonLeft} onPress={scrollLeft}>
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.productsContainer}
      >
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productCode}>{product.code}</Text>
            <View style={styles.priceAndButtonContainer}>
              <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Arrow buttons for scrolling */}
      <TouchableOpacity style={styles.arrowButtonRight} onPress={scrollRight}>
        <Text style={styles.arrowText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productsContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
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
    alignItems: 'center',
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
    textAlign: 'center',
  },
  productCode: {
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  priceAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
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
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  arrowButtonLeft: {
    position: 'absolute',
    left: 300,
    top: '50%',
    transform: [{ translateY: -20 }],
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 15,
    zIndex: 1,
  },
  arrowButtonRight: {
    position: 'absolute',
    right: 300,
    top: '50%',
    transform: [{ translateY: -20 }],
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 15,
    zIndex: 1,
  },
  arrowText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default FeaturedProducts;

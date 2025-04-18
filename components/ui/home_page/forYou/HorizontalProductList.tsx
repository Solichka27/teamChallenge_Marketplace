import React from 'react';
import { View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import ProductCard from '@/components/ui/home_page/ProductCartView';
import { ThemedText } from '@/components/ThemedText';

const mockProducts = [
  {
    id: '1',
    title: 'Nike Gym Club Training Bag: Black/College Grey/',
    price: 53.00,
    rating: 4.5,
    image: require('@/assets/images/productInCatalog/image.png'),
  },
  {
    id: '2',
    title: 'Bose QuietComfort 35 wireless headphones II',
    price: 97.00,
    rating: 5.0,
    image: require('@/assets/images/productInCatalog/image.png'),
  },
  {
    id: '3',
    title: 'Stylish Sunglasses with UV Protection',
    price: 29.99,
    rating: 4.2,
    image: require('@/assets/images/productInCatalog/image.png'),
  },
  // можна додати ще товари
];

export default function ProductList() {
  const handleProductPress = (product) => {
    console.log('Product Pressed', `You selected: ${product.title}`);
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title">For you</ThemedText>
      <FlatList
        data={mockProducts}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={handleProductPress} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
});

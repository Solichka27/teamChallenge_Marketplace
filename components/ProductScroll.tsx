import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const products = [
  { id: 1, title: 'Item 1', image: require('../assets/item1.png') },
  { id: 2, title: 'Item 2', image: require('../assets/item2.png') },
  { id: 3, title: 'Item 3', image: require('../assets/item3.png') },
];

export default function ProductScroll() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>For You</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map(product => (
          <View key={product.id} style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.label}>{product.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    marginRight: 15,
    width: 120,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
  },
});

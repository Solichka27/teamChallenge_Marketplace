import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Product = {
  id: string;
  image: any;
  title: string;
  price: number;
  rating: number;
};

type Props = {
  item: Product;
  onPress: (item: Product) => void;
};

export default function ProductCard({ item, onPress }: Props) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <Image source={item.image} style={styles.image} />

      <TouchableOpacity style={styles.heartIcon} onPress={toggleLike}>
        <Ionicons name={liked ? 'heart' : 'heart-outline'} size={24} color={liked ? 'red' : 'purple'} />
      </TouchableOpacity>

      <View style={styles.rating}>
        <Ionicons name="star" size={16} color="#FFB800" />
        <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
      </View>

      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  card: {
    width: 160,
    borderRadius: 16,
    backgroundColor: 'white',
    marginRight: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 12,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    marginLeft: 4,
    color: '#000',
    fontWeight: '500',
  },
  title: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },
});

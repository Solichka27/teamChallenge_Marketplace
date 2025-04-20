import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {ThemedText} from '@/components/ThemedText';

export default function CartForView({ item, onPress }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />

        {/* Сердечко */}
        <TouchableOpacity style={styles.heartIcon} onPress={toggleLike}>
          <Image
            source={
              liked
                ? require('@/assets/images/productInCatalog/heartFill.png') 
                : require('@/assets/images/productInCatalog/heart.png')
            }
            style={styles.heartImage}
          />
        </TouchableOpacity>

        {/* Рейтинг */}
        <View style={styles.ratingBadge}>
          <Image
            source={require('@/assets/images/productInCatalog/star.png')}
            style={styles.starIcon}
          />
          <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
        </View>
      </View>
      <ThemedText  numberOfLines={2} type="subtitle" style={styles.title}>{item.title}</ThemedText>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 164,
    height: 289,
    backgroundColor: 'white',
    marginRight: 10,
  },
  imageWrapper: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  heartImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  starIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    color: '#000',
    fontWeight: '500',
  },
  title: {
    marginTop: 8,
  },
  price: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 8,

  },
});

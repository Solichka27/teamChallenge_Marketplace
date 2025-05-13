import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function CartForView({ item, onPress }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);
  if (!item || !item.image) {
    return null;
  }

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

      <View style={styles.textContent}>
        <ThemedText numberOfLines={2} type="subtitle" style={styles.title}>
          {item.title}
        </ThemedText>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginRight: 12,

  },

  imageWrapper: {
    height: 220,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    left: -10,

  },

  image: {
    flex: 1,
    width: 200,
    height: undefined,
    resizeMode: 'cover',

  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
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
    bottom: 13,
    left: 25,
    backgroundColor: '#F8F8F8',
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
  textContent: {
    paddingTop: 8,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 13,
  },
  price: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

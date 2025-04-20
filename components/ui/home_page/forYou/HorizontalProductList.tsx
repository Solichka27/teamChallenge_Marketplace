import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CartForView from '@/components/ui/home_page/forYou/CartForView';

export default function HorizontalProductList() {
  return (
    <View style={styles.container}>

      <CartForView
                  item={{
                    id: '1',
                      image: require('@/assets/images/productInCatalog/image.png'),
                      title: 'Nike Gym Club Training Bag: Black/College Grey/',
                      price: 53.00,
                      rating: 4.5,
                  }}
                  onPress={(product) => console.log('Pressed', product.title)}
      />

<CartForView
                  item={{
                    id: '1',
                      image: require('@/assets/images/productInCatalog/image2.png'),
                      title: 'Nike Gym Club Training Bag: Black/College Grey/',
                      price: 53.00,
                      rating: 4.5,
                  }}
                  onPress={(product) => console.log('Pressed', product.title)}
      />

<CartForView
                  item={{
                    id: '1',
                      image: require('@/assets/images/productInCatalog/image.png'),
                      title: 'Nike Gym Club Training Bag: Black/College Grey/',
                      price: 53.00,
                      rating: 4.5,
                  }}
                  onPress={(product) => console.log('Pressed', product.title)}
      />

<CartForView
                  item={{
                    id: '1',
                      image: require('@/assets/images/productInCatalog/image.png'),
                      title: 'Nike Gym Club Training Bag: Black/College Grey/',
                      price: 53.00,
                      rating: 4.5,
                  }}
                  onPress={(product) => console.log('Pressed', product.title)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
  },
});
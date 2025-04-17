import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CartForView from '@/components/ui/home_page/CartForView';
import HorizontalProductList from '@/components/ui/home_page/HorizontalProductList';

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <CartForView />
      <HorizontalProductList />

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal: 16,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    textAlign: 'center',
    alignItems: 'center',
  }
});
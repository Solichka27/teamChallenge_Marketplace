import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import HorizontalProductList from '@/components/ui/home_page/forYou/HorizontalProductList';

export default function Header() {
  return (
    <View style={styles.container}>

    <HorizontalProductList />

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
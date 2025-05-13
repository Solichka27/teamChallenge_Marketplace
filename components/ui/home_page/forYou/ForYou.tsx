import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizontalProductList from '@/components/ui/home_page/forYou/HorizontalProductList';
import { ThemedText } from '@/components/ThemedText';

export default function Header() {
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>For you</ThemedText>
      <HorizontalProductList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    color: 'black',
    marginBottom: 8,
    paddingHorizontal: 21,
  }
});
import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Image source= {require('@/assets/images/header_image/search.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Search for item"
        placeholderTextColor="#aaa"
        autoCorrect={false}
      />
      <Image source= {require('@/assets/images/header_image/camera.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 8,
    borderWidth: 1,           
    borderColor: '#000000',        
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '@/components/ui/home_page/header/SearchBar';
import Chat from '@/components/ui/home_page/header/Chat'
import Notification from '@/components/ui/home_page/header/Notification';
import BuyMe from '@/components/ui/home_page/header/BuyMe'

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.logo}>
          <BuyMe />
        </View>

        <View style={styles.container}>
          <Chat />
          <Notification />
          <SearchBar />
        </ View >
      </View>
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
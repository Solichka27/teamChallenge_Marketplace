import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';

import MyAddresses from '@/components/ui/profile/address/MyAddresses';

export default function Addresses() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <MyAddresses />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})
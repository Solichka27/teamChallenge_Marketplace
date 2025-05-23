import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';

import AddressCard from '@/components/ui/profile/address/AddressCard';
import logoNovaPoshta from '@/assets/images/profile/address/logoNovaPoshta.png';

export default function MyAddress() {
  const [activeSwitchIndex, setActiveSwitchIndex] = useState<number | null>(null);

  const handleSwitchToggle = (index: number) => {
    setActiveSwitchIndex(prev => (prev === index ? null : index));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>

        <AddressCard
          title="Відділення Нова Пошта"
          address="Нова Пошта №131: проспект академіка Палладіна, б. 36, Київ, 03131"
          logo={<Image source={logoNovaPoshta} style={{ width: 26, height: 26 }} />}
          active={activeSwitchIndex === 0}
          onPress={() => handleSwitchToggle(0)}
          isSwitchEnabled={activeSwitchIndex === 0}
          onToggleSwitch={() => handleSwitchToggle(0)}
        />

        <AddressCard
          title="Кур’єр Нова Пошта"
          address="проспект Вернадського, б. 36, Київ, 03131"
          logo={<Image source={logoNovaPoshta} style={{ width: 26, height: 26 }} />}
          active={activeSwitchIndex === 1}
          onPress={() => handleSwitchToggle(1)}
          isSwitchEnabled={activeSwitchIndex === 1}
          onToggleSwitch={() => handleSwitchToggle(1)}
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Додати нову адресу</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  saveButton: {
    backgroundColor: '#8E6CEF',
    height: 52,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    //fontFamily: 'OutfitBold',
    fontWeight: 700,
  },
})

import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';

import AddressCard from '@/components/ui/profile/address/AddressCard';
import logoNovaPoshta from '@/assets/images/profile/address/logoNovaPoshta.png';

export default function MyAddresses() {
  const [activeCard, setActiveCard] = useState(0);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <ScrollView contentContainerStyle={styles.container}>
      <AddressCard
        title="Відділення Нова Пошта"
        address="Нова Пошта №131: проспект академіка Палладіна, б. 36, Київ, 03131"
        logo={<Image source={logoNovaPoshta} style={{ width: 26, height: 26 }} />}
        active={activeCard === 0}
        onPress={() => setActiveCard(0)}
        switchValue={switch1}
        onSwitchToggle={() => setSwitch1(!switch1)}
      />

      <AddressCard
        title="Кур’єр Нова Пошта"
        address="проспект Вернадського, б. 36, Київ, 03131"
        logo={<Image source={logoNovaPoshta} style={{ width: 26, height: 26 }} />}
        active={activeCard === 1}
        onPress={() => setActiveCard(1)}
        switchValue={switch2}
        onSwitchToggle={() => setSwitch2(!switch2)}
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
    fontFamily: 'Outfit-Bold',
  },
})
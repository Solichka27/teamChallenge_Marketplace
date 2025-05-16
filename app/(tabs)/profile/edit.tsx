import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Camera, Image, CalendarBlank } from 'phosphor-react-native';
import BackArrow from '@/components/ui/BackArrow';
import EditPhoto from '@/components/ui/profile/edit/EditPhoto';

export default function EditProfile() {
  const [date, setDate] = useState(new Date('2005-04-18'));
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <BackArrow />
          <Text style={styles.headerTitle}>Мої дані</Text>
        </View>

        {/* Profile Image Section */}
        <EditPhoto />

        {/* Divider */}
        <View style={styles.divider} />

        {/* Form Fields */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ім'я</Text>
          <TextInput style={styles.input} defaultValue="Катерина" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Прізвище</Text>
          <TextInput style={styles.input} defaultValue="Коновалова" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>По батькові</Text>
          <TextInput style={styles.input} defaultValue="Володимирівна" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Дата народження</Text>
          <View style={styles.dateInputContainer}>
            <TextInput
              style={styles.input}
              editable={false}
              value={date.toLocaleDateString('uk-UA')}
            />
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.dateIcon}
            >
              <CalendarBlank size={32} color="#170f2b" weight="thin" />
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              maximumDate={new Date()}
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || date;
                setShowDatePicker(false);
                setDate(currentDate);
              }}
            />
          )}
        </View>

        <Text style={styles.contactsHeader}>Контакти</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Телефон</Text>
          <TextInput style={styles.input} defaultValue="+38099-876-5432" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>e-mail</Text>
          <TextInput style={styles.input} defaultValue="konnovalova@gmail.com" />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Зберегти зміни</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView >

  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
  },
  headerTitle: {
    color: '#170F2B',
    fontSize: 22,
    fontFamily: 'Manrope-Regular',
    marginLeft: 33,
  },

  divider: {
    height: 1,
    backgroundColor: '#8E6CEF',
    marginHorizontal: 20,
    marginTop: 16,
  },
  inputGroup: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 12,
    color: '#999999',
    fontFamily: 'Manrope-Regular',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: '#170F2B',
  },
  dateInputContainer: {
    position: 'relative',
  },
  dateIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  contactsHeader: {
    fontSize: 18,
    color: '#170F2B',
    fontFamily: 'Manrope-Regular',
    marginTop: 22,
    marginLeft: 20,
    marginBottom: 18,
  },
  saveButton: {
    backgroundColor: '#8E6CEF',
    height: 53,
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
    paddingVertical: 16,
    paddingHorizontal: 110,
  },
});
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import BackArrow from '@/components/ui/BackArrow';
import EditPhoto from '@/components/ui/profile/edit/EditPhoto';
import FormFields from '@/components/ui/profile/edit/formFields/FormFields';


export default function EditProfile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 70 }}>

        <EditPhoto />

        <View style={styles.divider} />

        <FormFields />

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

  divider: {
    height: 1,
    backgroundColor: '#8E6CEF',
    marginHorizontal: 20,
    marginTop: 16,
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
});
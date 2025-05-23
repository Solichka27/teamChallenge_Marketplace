import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ChangeAddress from '@/components/ui/profile/address/ChangeAddress';

export default function ChangeAddresses() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <ChangeAddress />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
})  
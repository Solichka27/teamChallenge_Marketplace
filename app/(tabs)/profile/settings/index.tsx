import GeneralSettings from "@/components/ui/profile/settings/GeneralSettings";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <GeneralSettings />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 19,
    paddingHorizontal: 20,
    paddingBottom: 56,
  },
});

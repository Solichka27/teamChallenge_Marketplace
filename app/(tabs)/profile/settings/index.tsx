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

  saveButton: {
    backgroundColor: "#8E6CEF",
    height: 52,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Outfit-Bold",
  },
});

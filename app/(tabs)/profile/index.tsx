import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import User from "@/components/ui/profile/profile/User";
import Benefits from "@/components/ui/profile/profile/Benefits";

import { Link } from "expo-router";
import DashBoard from "@/components/ui/profile/profile/DashBoard";

export default function ProfilePage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <User />
        <Benefits />
        <DashBoard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 56,
  },
  
});

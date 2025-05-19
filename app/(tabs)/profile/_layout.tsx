import { Stack, useRouter } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Route, ParamListBase } from "@react-navigation/routers";

interface ProfileHeaderProps {
  route: Route<ParamListBase, string>;
  options: NativeStackNavigationOptions;
  navigation: NativeStackNavigationProp<ParamListBase, string>;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ route, options }) => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {route.name !== "index" && (
        <Pressable onPress={() => router.back()} style={styles.headerLeft}>
          <View style={styles.backButton}>
            <CaretLeft size={18} color="#FFFFFF" weight="bold" />
          </View>
        </Pressable>
      )}
      <Text style={styles.title}>{options.title ?? route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 54,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 18,
    backgroundColor: "#fff",
    position: "relative",
  },
  headerLeft: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: "#AC94E8",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Manrope",
    color: "#170F2B",
  },
});

export default function ProfileStackLayout() {
  const profileScreens = [
    { name: "edit", title: "Мої дані" },
    { name: "cards", title: "Мої картки" },
    { name: "addresses", title: "Мої адреси" },
    { name: "offerNotifications", title: "Пропозиції та сповіщення" },
    { name: "orderHistory", title: "Історія замовлень" },
    { name: "reviews", title: "Мої відгуки" },
    { name: "sellerMessages", title: "Переписки з продавцями" },
    { name: "settings", title: "Налаштування" },
    { name: "support", title: "Служба підтримки" },
  ];

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: (props) => <ProfileHeader {...props} />,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: {
          fontSize: 22,
          fontFamily: "Manrope",
          color: "#170F2B",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, 
        }}
      />
      {profileScreens.map(({ name, title }) => (
        <Stack.Screen
          key={name}
          name={name}
          options={{
            title: title,
            headerLeft: null,
          }}
        />
      ))}
    </Stack>
  );
}

import { View, Text } from "react-native";
import React from "react";
import UserIntro from "../../components/Profile/UserIntro";
import MenuList from "../../components/Profile/MenuList";

export default function profile() {
  return (
    <View
      style={{
        paddingTop: "9%",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
        }}
      >
        Profile
      </Text>
      <UserIntro />
      {/* Menulist */}
      <MenuList />
    </View>
  );
}

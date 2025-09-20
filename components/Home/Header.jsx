import { View, Image, Text, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  const { user } = useUser();

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 50,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{
            width: 45,
            height: 45,
            borderRadius: 99,
          }}
        />
        <View>
          <Text
            style={{
              color: "white",
            }}
          >
            Welcome,{" "}
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontFamily: "outfit-medium",
              color: "white",
            }}
          >
            {user?.fullName}{" "}
          </Text>
        </View>
      </View>
      {/* search bar */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "white",
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginVertical: 15,
          marginTop: 20,
          borderRadius: 8,
        }}
      >
        <FontAwesome name="search" size={24} color={Colors.primary} />
        <TextInput
          placeholder="Search Here..."
          style={{
            fontSize: 16,
            fontFamily: "outfit",
          }}
        />
      </View>
    </View>
  );
}

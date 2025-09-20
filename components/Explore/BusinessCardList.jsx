import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function BusinessCardList({ business }) {
 const router = useRouter()
  return (
    <TouchableOpacity
    onPress={()=>router.push('/businessDetail/'+business.id)}
      style={{
        backgroundColor: "white",
        marginTop: 20,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow:'hidden'
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: "100%",
          height: 150,
        //   borderTopLeftRadius: 15,
        //   borderTopRightRadius: 15,
        }}
      />
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {business?.name}
        </Text>
        <Text
          style={{
            // fontSize: 20,
            fontFamily: "outfit",
            color: Colors.gray,
          }}
        >
          {business?.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function BusinessListCard({ business }) {
  const router = useRouter()

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "white",
        flexDirection: "row",
        gap:10,
        alignItems:'center'
      }}
      onPress={()=>router.push('/businessDetail/'+ business.id)}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
          borderColor: "black",
          borderWidth:1
        }}
      />
      <View style={{
        flex:1,
        gap:7
      }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          {business.name}
        </Text>
        <Text style={{ fontFamily: "outfit",color:Colors.gray , fontSize: 15 }}>
          {business.address}
        </Text>
        <View
            style={{
              flexDirection: "row",
              gap: 5,
              // alignItems:'center',
              // justifyContent:'center'
            }}
          >
            <Image
              source={require("../../assets/images/star.png")}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text style={{ fontFamily: "outfit" }}>4.5</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
}

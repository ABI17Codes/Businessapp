import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { deleteDoc, doc } from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";

export default function Intro({ business }) {
  const router = useRouter();
  const { user } = useUser();

  const OnDelete = () => {
    Alert.alert(
      "Do You Want to Delete?",
      "Do you wwant to delete this business",
      [
        {
          text: "cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteBusiness(),
        },
      ]
    );
  };

  const deleteBusiness = async () => {
    await deleteDoc(doc(deleteBusiness, "BusinessList", business?.id));
    router.back();
    ToastAndroid.show("Business Deleted!", ToastAndroid.LONG);
  };

  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: "5%",
          width: "100%",
          padding: 30,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left-circle" size={32} color="black" />
        </TouchableOpacity>
        <Entypo name="heart-outlined" size={32} color="black" />
        {/* <Entypo name="heart" size={24} color="black" /> */}
      </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: "100%",
          height: 380,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          padding: 20,
          marginTop: -20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 20,
            marginTop: -20,
            backgroundColor: "white",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            // borderTopColor:'black',
            // borderTopWidth:1
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "outfit-bold",
            }}
          >
            {business?.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "outfit",
            }}
          >
            {business?.address}
          </Text>
        </View>
        {user?.primaryEmailAddress?.emailAddress === business?.userEmail && (
          <TouchableOpacity onPress={() => OnDelete()}>
            <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

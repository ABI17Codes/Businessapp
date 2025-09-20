import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import Category from "../../components/Home/Category";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/FireBaseconfig";
import ExploreBusinessList from "../../components/Explore/ExploreBusinessList";

export default function explore() {
  const [businessList, setBusinessList] = useState([]);

  const GetBusinessByCategory = async (category) => {
    setBusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // console.log(doc);
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };

  return (
    <View
      style={{
        paddingTop: "9%",
        padding: 20,
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
        Explore More
      </Text>
      {/* Search */}
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
          // marginTop: 20,
          borderWidth: 1,
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
      {/* Category */}
      <Category
        explore={true}
        onCategorySelect={(category) => GetBusinessByCategory(category)}
      />
      {/* business List */}
      <ExploreBusinessList businessList={businessList} />
    </View>
  );
}

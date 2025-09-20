import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/FireBaseconfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function MyBusiness() {
  const { user } = useUser();
  const navigation = useNavigation();
  const [businessList, setBusinessList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "My Business",
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    });
    user && GetUserBusiness();
  }, []);

  const GetUserBusiness = async () => {
    setLoading(true);
    setBusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("userEmail", "==", user?.primaryEmailAddress?.emailAddress)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(() =>
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }])
    );
    setLoading(false);
  };

  return (
    <View
      style={{
        paddingTop: "9%",
        padding: 20,
      }}
    >
      {/* <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        MyBusiness
      </Text> */}
      <FlatList
        data={businessList}
        onRefresh={GetUserBusiness}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <BusinessListCard key={index} business={item} />
        )}
      />
    </View>
  );
}

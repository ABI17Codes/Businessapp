import { View, FlatList, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/FireBaseconfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "@/constants/Colors";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  const [businessList, setBusinessList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
  }, [navigation, category]);

  useEffect(() => {
    GetBusinesList();
  }, []);

  const GetBusinesList = async () => {
    setIsLoading(true);
    setBusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      setBusinessList((prev) => [...prev,{id:doc?.id, ...doc.data()}]);
    });
    setIsLoading(false);
  };

  return (
    <View>
      {businessList.length > 0 && isLoading === false ? (
        <FlatList
          data={businessList}
          onRefresh={GetBusinesList}
          refreshing={isLoading}
          renderItem={({ item, index }) => (
            <BusinessListCard key={index} business={item} />
          )}
        />
      ) : isLoading ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.primary}
          style={{
            marginTop: "60%",
          }}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            color: Colors.gray,
            textAlign: "center",
            marginTop: "20%",
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
}

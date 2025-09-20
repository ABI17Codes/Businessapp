import { View, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/FireBaseconfig";
import { Colors } from "@/constants/Colors";
import Intro from "../../components/BusinessDetail/Intro";
import ActionBtn from "../../components/BusinessDetail/ActionBtn";
import About from "../../components/BusinessDetail/About";
import BusinessReview from "../../components/BusinessDetail/BusinessReview";

export default function BusinessDetails() {
  const { businessid } = useLocalSearchParams();
  const [business, setBusiness] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GetBusinessById();
  }, []);

  const GetBusinessById = async () => {
    setIsLoading(true);
    const docRef = doc(db, "BusinessList", businessid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data : ", docSnap.data());
      setBusiness({ id: docSnap.id, ...docSnap.data() });
      setIsLoading(false);
    } else {
      console.log("No such Document there...");
    }
  };

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator
          style={{ marginTop: "60%" }}
          size={"large"}
          color={Colors.primary}
        />
      ) : (
        <View>
          {/* Intro */}
          <Intro business={business} />
          {/* Actions Buttons */}
          <ActionBtn business={business} />
          {/* About Section */}
          <About business={business} />

          {/* Review Section */}
          <BusinessReview business={business} />
        </View>
      )}
    </ScrollView>
  );
}

import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/FireBaseconfig";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);
  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom: 10,
        }}
      >
        #Special for You
      </Text>

      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          marginHorizontal: 20,
        }}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            source={{ uri: item.imageUrl }}
            style={{
              width: 350,
              height: 170,
              marginRight: 15,
              borderRadius: 15,
            }}
          />
        )}
      />
      
    </View>
  );
}

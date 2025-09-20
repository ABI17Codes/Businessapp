import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from "react-native";
import React from "react";

export default function ActionBtn({ business }) {
  const actionBtnMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/call.png"),
      url: "tel:+91" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/pin.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" + business?.address,
    },
    {
      id: 3,
      name: "Website",
      icon: require("../../assets/images/web.png"),
      url: business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/share.png"),
      url: business?.website,
    },
  ];

  const handleLinkOpen = (item) => {
    if (item?.name === "Share") {
      Share.share({
        message:business?.name+"\n Address : "+business?.address+"\n Find more detail on Business App"
      })
      return;
    }
    Linking.openURL(item?.url);
  };

  return (
    <View
      style={{
        paddingTop: 5,
        paddingBottom: 15,
        backgroundColor: "white",
      }}
    >
      <FlatList
        data={actionBtnMenu}
        horizontal={true}
        contentContainerStyle={{
          width: "100%",
          justifyContent: "space-around",
        }}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => handleLinkOpen(item)}>
            <Image
              source={item?.icon}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

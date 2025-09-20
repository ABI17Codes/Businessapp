import { FlatList, ScrollView, View } from "react-native";
import BusinessCardList from "./BusinessCardList";

export default function ExploreBusinessList({ businessList }) {
  return (
    <ScrollView>
      <FlatList
        style={{
          // marginTop: 10,
          marginBottom: 150,
        }}
        data={businessList}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled
        renderItem={({ item, index }) => (
          <View>
            <BusinessCardList key={index} business={item} />
          </View>
        )}
      />
      <View style={{
        height: 100
      }}></View>
    </ScrollView>
  );
}

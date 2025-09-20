import { ScrollView, View } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import BusinessList from "../../components/Home/BusinessList";

const home = () => {
  return (
    <ScrollView>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />

      {/* categroy */}
      <Category />
      {/* popular business list */}
      <BusinessList />

      <View style={{height:50}}></View>
    </ScrollView>
  );
};

export default home;

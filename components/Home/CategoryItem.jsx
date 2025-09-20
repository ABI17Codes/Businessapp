import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function CategoryItem({ category,OnCategoryPress }) {
  return (
    <TouchableOpacity onPress={()=>OnCategoryPress(category)}>
      <View 
      style={{
        padding:15,
        // backgroundColor:Colors.primary,
        borderRadius:99,
        marginRight:15
      }}
      >
        <Image
          source={{ uri:category?.imageUrl }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text style={{
        fontSize:12,
        fontFamily:'outfit-medium',
        textAlign:'center',
        marginTop:5,
      }} >{category.name}{" "} </Text>
    </TouchableOpacity>
  );
}

import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const RowCard = ({ topic = "" }) => {
  return (
    <View className="w-full border border-black-100 rounded-lg my-1 py-1">
      <TouchableOpacity
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 8,
        }}
      >
        <Text className="text-lg font-bold text-primary">{topic}</Text>
        <FontAwesome name="chevron-right" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default RowCard;

import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../assets/colors";

const CarreerPaths = ({ topic = "", description = "", image = "" }) => {
  return (
    <View className="w-full flex flex-row my-1 border border-black-100 rounded-lg justify-between px-2 py-2">
      <View className="flex flex-row items-start ">
        <Image
          source={image}
          alt="career"
          className="me-2 w-14 h-14 rounded-md"
        />
        <View className="flex flex-col">
          <Text className="text-lg font-bold text-primary">{topic}</Text>
          <Text className="text-md text-secondary">{description}</Text>
        </View>
      </View>
      <View className="flex flex-col justify-end mr-5">
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <View className="flex flex-row">
            <Text className="text-sm text-secondary me-2">See More </Text>
            <FontAwesome
              name="chevron-right"
              size={15}
              color={colors.secondary}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarreerPaths;

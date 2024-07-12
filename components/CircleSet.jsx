import React, { useState } from "react";
import { View } from "react-native";

const CircleSet = ({ circles, currentCircles }) => {
  return (
    <View className="flex-row justify-center mt-5">
      {Array.from({ length: circles }, (_, index) => (
        <View
          key={index}
          className={`w-2.5 h-2.5 ${
            index < currentCircles ? "bg-blue-500" : "border border-blue-500"
          } rounded-full mx-2`}
        />
      ))}
    </View>
  );
};

export default CircleSet;

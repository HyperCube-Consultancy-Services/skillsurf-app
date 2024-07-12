import React from "react";
import { View } from "react-native";

const PanelLayout = ({
  panelHeight = "h-screen-90", // Optional. Default is 90% of screen height. Other options are 'h-screen-80', 'h-screen-70', etc.
  headerContent = null, // Mandatory - Content in the blue background
  children, // Mandatory - Content in the white background
}) => {
  return (
    <View className="flex-1 justify-start bg-secondary">
      <View className="w-full flex-grow pt-12">{headerContent}</View>
      <View className={`w-full ${panelHeight} bg-white rounded-t-3xl`}>
        {children}
      </View>
    </View>
  );
};

export default PanelLayout;

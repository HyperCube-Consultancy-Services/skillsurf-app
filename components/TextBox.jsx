import React from "react";
import { View, Text, TextInput } from "react-native";

const TextBox = ({
  placeholder = "Enter text", // Mandatory
  value = "", // Mandatory
  setValue = () => {}, // Mandatory
  width = "w-full", // Optional
  caption = false, // Optional. Default is false. If there is a caption, provide a string.
  captionAlignment = "center", // Optional. Default is center. Possible values are 'start', 'center', 'end'.
  secureTextEntry = false, // Optional. Default is false. If true, input text will be hidden (useful for passwords).
  keyboardType = "default", // Optional. Default is "default". Other options are "numeric", "email-address", etc.
}) => {
  return (
    <View className={`${width} flex flex-col items-${captionAlignment}`}>
      {caption && (
        <Text
          className={`text-black-600 text-md mb-2 text-${captionAlignment}`}
        >
          {caption}
        </Text>
      )}
      <TextInput
        className={`w-full h-12 border border-black-100 rounded-md px-3 text-base text-black-900`}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default TextBox;

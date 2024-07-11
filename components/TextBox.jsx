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
  textAlign = "left", // Optional. Default is "left". Other options are "center", "right".
  className = "", // Optional - For margins
}) => {
  return (
    <View
      className={`${width} flex flex-col items-${captionAlignment} ${className}`}
    >
      {caption && (
        <Text
          className={`text-black-600 text-md mb-1 text-${captionAlignment}`}
        >
          {caption}
        </Text>
      )}
      <TextInput
        className={`w-full h-12 border border-black-100 rounded-md px-3 text-base text-black-900 text-${textAlign}`}
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

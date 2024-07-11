import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Entypo from "react-native-vector-icons/Entypo";
import colors from "../assets/colors";

const CustomDateTimePicker = ({
  value = "", // Mandatory
  setValue = () => {}, // Mandatory
  type = "date", // Mandatory - date / time
  width = "w-full", // Optional
  caption = false, // Optional. Default is false. If there is a caption, provide a string.
  captionAlignment = "center", // Optional. Default is center. Possible values are 'start', 'center', 'end'.
}) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const openDatePicker = () => {
    setIsPickerOpen(true);
  };

  const closeDatePicker = () => {
    setIsPickerOpen(false);
  };

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setValue(selectedDate.toLocaleDateString());
      closeDatePicker();
    }
  };

  return (
    <TouchableOpacity className={`${width}`} onPress={openDatePicker}>
      <View className={`w-full flex flex-col items-${captionAlignment}`}>
        {caption && (
          <Text className={`text-black-600 text-md text-${captionAlignment}`}>
            {caption}
          </Text>
        )}
        <View
          className={`w-full flex  flex-row justify-between items-center border border-black-100 rounded-md px-3 py-3`}
        >
          <Text className={`text-base text-black-900`}>{value}</Text>
          <Entypo
            name={`${type == "date" ? "calendar" : "clock"}`}
            size={15}
            color={colors.black[500]}
          />
        </View>

        {isPickerOpen && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={type}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomDateTimePicker;

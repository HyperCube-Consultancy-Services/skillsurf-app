import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import TextBox from "../components/TextBox";
import CustomDateTimePicker from "../components/CustomDateTimePicker";
import PrimaryButton from "./PrimaryButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CircleSet from "./CircleSet";

const PersonalDetails = ({ onNextClick }) => {
  const [nameValue, setNameValue] = useState("");
  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [dateValue, setDateValue] = useState(formatDate(new Date()));
  const [schoolValue, setSchoolValue] = useState("");
  return (
    <View className={`flex-1 justify-center items-center px-20`}>
      <FontAwesome name="user-circle" size={80} color="#2980B9" />
      <Text className={`font-semibold text-3xl text-secondary mt-4`}>
        Personal Details
      </Text>
      <View className={`border border-black-100 w-full my-4`} />
      <TextBox
        placeholder="Enter your name"
        value={nameValue}
        setValue={(text) => setNameValue(text)}
        caption="Name"
        captionAlignment="center"
        className="mt-3"
      />
      <View className="mt-6">
        <CustomDateTimePicker
          value={dateValue}
          setValue={(value) => setDateValue(value)}
          type="date"
          caption={"Select Date"}
          captionAlignment="center"
        />
      </View>
      <TextBox
        placeholder="Enter your school"
        value={schoolValue}
        setValue={setSchoolValue}
        caption="School"
        captionAlignment="center"
        className="mt-6"
      />

      <View className="mt-8 w-80">
        <PrimaryButton
          text={"Next"}
          onClick={() => {
            console.log("Button CLicked");
            onNextClick();
          }}
        />
      </View>

      <View className={`mt-8`}>
        <CircleSet circles={4} currentCircles={1} />
      </View>
    </View>
  );
};
export default PersonalDetails;

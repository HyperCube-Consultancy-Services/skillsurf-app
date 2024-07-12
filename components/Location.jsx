import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import TextBox from "../components/TextBox";
import PrimaryButton from "./PrimaryButton";
import DropdownBox from "./DropdownBox";
import Entypo from "react-native-vector-icons/Entypo";
import CircleSet from "./CircleSet";

const Location = ({ onNextClick }) => {
  // State variables for each address component
  const [numValue, setNumValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [districtValue, setDistrictValue] = useState("0");

  const sriLankanDistricts = [
    { value: "0", label: "Select District" },
    { value: "Ampara", label: "Ampara" },
    { value: "Anuradhapura", label: "Anuradhapura" },
    { value: "Badulla", label: "Badulla" },
    { value: "Batticaloa", label: "Batticaloa" },
    { value: "Colombo", label: "Colombo" },
    { value: "Galle", label: "Galle" },
    { value: "Gampaha", label: "Gampaha" },
    { value: "Hambantota", label: "Hambantota" },
    { value: "Jaffna", label: "Jaffna" },
    { value: "Kalutara", label: "Kalutara" },
    { value: "Kandy", label: "Kandy" },
    { value: "Kegalle", label: "Kegalle" },
    { value: "Kilinochchi", label: "Kilinochchi" },
    { value: "Kurunegala", label: "Kurunegala" },
    { value: "Mannar", label: "Mannar" },
    { value: "Matale", label: "Matale" },
    { value: "Matara", label: "Matara" },
    { value: "Monaragala", label: "Monaragala" },
    { value: "Mullaitivu", label: "Mullaitivu" },
    { value: "Nuwara Eliya", label: "Nuwara Eliya" },
    { value: "Polonnaruwa", label: "Polonnaruwa" },
    { value: "Puttalam", label: "Puttalam" },
    { value: "Ratnapura", label: "Ratnapura" },
    { value: "Trincomalee", label: "Trincomalee" },
    { value: "Vavuniya", label: "Vavuniya" },
  ];

  return (
    <View className={`flex-1 justify-center items-center px-20`}>
      <Entypo name="location-pin" size={80} color="#2980B9" />
      <Text className={`font-semibold text-3xl text-secondary mt-4`}>
        Permanent Address
      </Text>
      <View className={`border border-black-100 w-full my-4`} />
      <TextBox
        placeholder="No."
        value={numValue}
        setValue={(text) => setNumValue(text)}
        captionAlignment="center"
        className="mt-3"
      />

      <TextBox
        placeholder="Street Name"
        value={streetValue}
        setValue={(text) => setStreetValue(text)}
        captionAlignment="center"
        className="mt-6"
      />

      <TextBox
        placeholder="City Name"
        value={cityValue}
        setValue={(text) => setCityValue(text)}
        captionAlignment="center"
        className="mt-6"
      />
      <DropdownBox
        options={sriLankanDistricts}
        placeholder="Select District"
        value={districtValue}
        setValue={(value) => setDistrictValue(value)}
        search={true}
        className="mt-6"
      />

      <View className="mt-8 w-80">
        <PrimaryButton
          text={"Next"}
          onClick={() => {
            onNextClick();
          }}
        />
      </View>

      <View className={`mt-8`}>
        <CircleSet circles={4} currentCircles={2} />
      </View>
    </View>
  );
};

export default Location;

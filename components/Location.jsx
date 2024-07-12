import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import TextBox from "../components/TextBox";
import PrimaryButton from "./PrimaryButton";

const Location = ({
    onNextClick,
}) => {
    // State variables for each address component
    const [streetValue, setStreetValue] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [countryValue, setCountryValue] = useState("");

    return (
        <View className="flex-1 items-center justify-center p-4">
            <Image
                source={require('../assets/Logo.png')}
                className="w-40 h-40" 
            />
            <Text className="text-center text-blue-500 text-lg mt-2.5">Location</Text>
            <View className="h-px bg-black opacity-20 my-5" /> 
            <TextBox
                placeholder="Enter your street"
                value={streetValue}
                setValue={setStreetValue}
                caption="Street"
                captionAlignment="center"
                className="w-60" 
            />
            <TextBox
                placeholder="Enter your city"
                value={cityValue}
                setValue={setCityValue}
                caption="City"
                captionAlignment="center"
                className="w-60" 
            />
            <TextBox
                placeholder="Enter your country"
                value={countryValue}
                setValue={setCountryValue}
                caption="Country"
                captionAlignment="center"
                className="w-60" 
            />
            <PrimaryButton
                text={"Next"}
                onClick={onNextClick}
                className="mt-4" 
            />
            <View className="flex-row justify-center mt-5">
                <View className="w-2.5 h-2.5 bg-blue-500 rounded-full mx-0.5" />
                <View className="w-2.5 h-2.5 border border-blue-500 rounded-full mx-0.5" />
                <View className="w-2.5 h-2.5 border border-blue-500 rounded-full mx-0.5" />
                <View className="w-2.5 h-2.5 border border-blue-500 rounded-full mx-0.5" />
            </View>
        </View>
    );
};

export default Location;
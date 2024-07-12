import React from "react";
import { View, Text, TextInput } from "react-native";
import TextBox from "../components/TextBox";
import CustomDateTimePicker from "../components/CustomDateTimePicker";
import PrimaryButton from "./PrimaryButton";


const PersonalDetails = ({
    onNextClick,
}) => {
    return (
        <View>
            <Image
                source={require('../assets/Logo.png')}
                className={`w-40 h-40`}
            />
            <Text style={{ textAlign: 'center', color: '#2980B9', fontSize: 20, marginTop: 10 }}>Personal Details</Text> 
            <View style={{ height: 1, backgroundColor: 'black', opacity: 0.2, marginVertical: 20 }} /> 
            <TextBox
                placeholder="Enter your name"
                value={textValue}
                setValue={setTextValue}
                caption="Name"
                captionAlignment="center"
                width="w-60"
            />
            <View className="mt-4 w-60">
                <CustomDateTimePicker
                    value={dateValue}
                    setValue={(value) => setDateValue(value)}
                    type="date"
                    caption={'Date of Birth'}
                    captionAlignment="center" />
            </View>
            <TextBox 
                placeholder="Enter your school"
                value={schoolValue}
                setValue={setSchoolValue}
                caption="School"
                captionAlignment="center"
                width="w-60"
            />
            
            <PrimaryButton
                text={"Next"}
                onClick={onNextClick} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <View className="w-2.5 h-2.5 bg-blue-600 rounded-full mx-1"/> 
                <View className="w-2.5 h-2.5 border border-blue-600 rounded-full mx-1" /> 
                <View className="w-2.5 h-2.5 border border-blue-600 rounded-full mx-1"/> 
                <View className="w-2.5 h-2.5 border border-blue-600 rounded-full mx-1"/> 
            </View>
        </View>
    );
    };
    export default PersonalDetails;
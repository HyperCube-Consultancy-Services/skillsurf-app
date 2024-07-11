import React, { useState } from "react";
import { View } from "react-native";
import DropdownBox from "../components/DropdownBox";
import PrimaryButton from "../components/PrimaryButton";
import TextBox from "../components/TextBox";
import CustomDateTimePicker from "../components/CustomDateTimePicker";

const TestScreen = () => {
    const [selectedOption, setSelectedOption] = useState("option1");
    const [textValue, setTextValue] = useState('');
    const [numericValue, setNumericValue] = useState('');
    const [dateValue, setDateValue] = useState('2024/01/01')
    return (
        <View className={`flex-1 bg-white justify-center items-center`}>
            <DropdownBox
                options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Option 3", value: "option3" },
                ]}
                placeholder="Select Option"
                value={selectedOption}
                setValue={(value) => setSelectedOption(value)}
                width="w-60"
                caption={'Select an option'}
                search={true} />
            <View className="mt-4 w-80">
                <PrimaryButton
                    text={"Submit"}
                    onClick={() => {
                        console.log('Button CLicked');
                    }}
                />
            </View>
            <TextBox
                placeholder="Enter your name"
                value={textValue}
                setValue={setTextValue}
                caption="Name"
                captionAlignment="center"
                width="w-60"
            />
            <TextBox
                placeholder="Enter your age"
                value={numericValue}
                setValue={setNumericValue}
                keyboardType="numeric"
                caption="Age"
                captionAlignment="start"
                width="w-60"
            />
            <View className="mt-4 w-60">
                <CustomDateTimePicker
                    value={dateValue}
                    setValue={(value) => setDateValue(value)}
                    type="date"
                    caption={'Select Date'}
                    captionAlignment="center" />
            </View>

        </View>
    )
}

export default TestScreen;
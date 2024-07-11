import React, { useState } from "react";
import { View } from "react-native";
import DropdownBox from "../components/DropdownBox";
const TestScreen = () => {
    const [selectedOption, setSelectedOption] = useState("option1");

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
        </View>
    )
}

export default TestScreen;
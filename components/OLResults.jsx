import React from "react";
import { View, Text, TextInput } from "react-native";
import TextBox from "../components/TextBox";
import CustomDateTimePicker from "../components/CustomDateTimePicker";
import PrimaryButton from "./PrimaryButton";
import ResultsField from "./ResultsFeild";

const OLResults = ({
    textValue,
    setTextValue,
    dateValue,
    setDateValue,
    schoolValue,
    setSchoolValue,
    onNextClick,
  }) => {
      return (
          <View>
              <Image
                  source={require('../assets/Logo.png')}
                  className={`w-40 h-40`}
              />
              <Text style={{ textAlign: 'center', color: '#2980B9', fontSize: 20, marginTop: 10 }}>G.C.E. (O/L) Examination</Text>
              <View style={{ height: 1, backgroundColor: 'black', opacity: 0.2, marginVertical: 20 }} />
              <TextBox 
                placeholder="Enter the year you did OLs"
                value={schoolValue}
                setValue={setSchoolValue}
                caption="Examination Year"
                captionAlignment="center"
                width="w-60"
            />
                <ResultsField
                    placeholder="Enter your OL Subject 1"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 1"
                    captionAlignment="center"
                    width="w-60"
                />
                <ResultsField
                    placeholder="Enter your OL Subject 2"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 2"
                    captionAlignment="center"
                    width="w-60"
                />
                <ResultsField
                    placeholder="Enter your OL Subject 3"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 3"
                    captionAlignment="center"
                    width="w-60"
                />
                <ResultsField
                    placeholder="Enter your OL Subject 4"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 4"
                    captionAlignment="center"
                    width="w-60"
                />
                <ResultsField
                    placeholder="Enter your OL Subject 5"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 5"
                    captionAlignment="center"
                    width="w-60"
                />
                <ResultsField
                    placeholder="Enter your OL Subject 6"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 6"
                    captionAlignment="center"
                    width="w-60"
                />
                <ResultsField
                    placeholder="Enter your OL Subject 7"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 7"
                    captionAlignment="center"
                    width="w-60"
                />
                <ResultsField
                    placeholder="Enter your OL Subject 8"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 8"
                    captionAlignment="center"
                    width="w-60"
                />
                <ResultsField
                    placeholder="Enter your OL Subject 9"
                    value={textValue}
                    setValue={setTextValue}
                    caption="Subject 9"
                    captionAlignment="center"
                    width="w-60"
                />
              <PrimaryButton
                text={"Next"}
                onClick={onNextClick} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <View className="w-2.5 h-2.5 border border-blue-600 rounded-full mx-1" />
                <View className="w-2.5 h-2.5 border border-blue-600 rounded-full mx-1"/> 
                <View className="w-2.5 h-2.5 bg-blue-600 rounded-full mx-1"/> 
                <View className="w-2.5 h-2.5 border border-blue-600 rounded-full mx-1"/> 
            </View>
              {/* Other components */}
          </View>
      );
  };
    export default OLResults;
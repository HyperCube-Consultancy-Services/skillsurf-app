import React, { useState } from "react";
import { View } from "react-native";
import PersonalDetails from "../components/PersonalDetails";
import OLResults from "../components/OLResults";
import Location from "../components/Location";
import ALResults from "../components/ALResults";
const QuestionnaireScreen = () => {
    const [textValue, setTextValue] = useState("");
    const [dateValue, setDateValue] = useState(new Date());
    const [schoolValue, setSchoolValue] = useState("");
    const [currentStep, setCurrentStep] = useState("personalDetails");
  
    const handleNextClickFromPD = () => {
      setCurrentStep("locations");
    };
    const handleNextClickFromLocation = () => {
        setCurrentStep("olResults");
      };
    const handleNextClickFromOL = () => {
        setCurrentStep("olResults");
    }
    const handleNextClickFromAL = () => {
        console.log();
    }
  
    return (
      <View>
        {currentStep === "personalDetails" && (
          <PersonalDetails onNextClick={handleNextClickFromPD} />
        )}
         {currentStep === "locations" && (
          <Location onNextClick={handleNextClickFromLocation} />
        )}
        {currentStep === "olResults" && (
          <OLResults
            textValue={yourTextValue}
            setTextValue={yourSetTextValueFunction}
            dateValue={yourDateValue}
            setDateValue={yourSetDateValueFunction}
            schoolValue={yourSchoolValue}
            setSchoolValue={yourSetSchoolValueFunction} 
            onNextClick={handleNextClickFromOL}/>
        )}
         {currentStep === "olResults" && (
          <OLResults
            textValue={yourTextValue}
            setTextValue={yourSetTextValueFunction}
            dateValue={yourDateValue}
            setDateValue={yourSetDateValueFunction}
            schoolValue={yourSchoolValue}
            setSchoolValue={yourSetSchoolValueFunction} 
            onNextClick={handleNextClickFromOL}/>
        )}
         {currentStep === "alResults" && (
          <ALResults
            textValue={yourTextValue}
            setTextValue={yourSetTextValueFunction}
            dateValue={yourDateValue}
            setDateValue={yourSetDateValueFunction}
            schoolValue={yourSchoolValue}
            setSchoolValue={yourSetSchoolValueFunction} 
            onNextClick={handleNextClickFromAL}/>
        )}
      </View>
    );
  };
export default QuestionnaireScreen;
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import PersonalDetails from "../components/PersonalDetails";
import OLResults from "../components/OLResults";
import Location from "../components/Location";
import ALResults from "../components/ALResults";
import { useNavigation } from "@react-navigation/native";

const QuestionnaireScreen = () => {
  const navigation = useNavigation();

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
    console.log("Next Clicked", currentStep);
  }

  useEffect(() => {
    if (currentStep > 3) {
      navigation.navigate("ChatScreen");
    }
  }, [currentStep]);

  return (
    <View className={`flex-1`}>
      {currentStep === 0 && (
        <PersonalDetails onNextClick={handleNextClick} />
      )}
      {currentStep === 1 && (
        <Location onNextClick={handleNextClick} />
      )}
      {currentStep === 2 && (
        <OLResults
          onNextClick={handleNextClick} />
      )}
      {currentStep === 3 && (
        <ALResults
          onNextClick={handleNextClick} />
      )}
    </View>
  );
};
export default QuestionnaireScreen;
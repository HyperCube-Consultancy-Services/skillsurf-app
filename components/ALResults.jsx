import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import TextBox from "./TextBox";
import CircleSet from "./CircleSet";
import PrimaryButton from "./PrimaryButton";
import ResultsField from "./ResultsFeild";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ALResults = ({ onNextClick }) => {
  const [year, setYear] = useState("");
  const [subject1, setSubject1] = useState({
    subject: "",
    grade: "",
  });
  const [subjects, setSubjects] = useState([
    {
      subject: "",
      grade: "",
    },
    {
      subject: "",
      grade: "",
    },
    {
      subject: "",
      grade: "",
    },
    {
      subject: "",
      grade: "",
    },
  ]);

  const handleSubjectChange = (text, index) => {
    let newSubjects = [...subjects];
    newSubjects[index].subject = text;
    setSubjects(newSubjects);
  };

  const handleGradeChange = (text, index) => {
    let newSubjects = [...subjects];
    newSubjects[index].grade = text;
    setSubjects(newSubjects);
  };

  return (
    <View className={`flex-1 justify-center items-center px-20`}>
      <FontAwesome5 name="book-open" size={80} color="#2980B9" />
      <Text className={`font-semibold text-3xl text-secondary mt-4`}>
        G.C.E. O/L Results
      </Text>
      <View className={`border border-black-100 w-full my-4`} />
      <TextBox
        placeholder="Enter the year you did A/Ls"
        value={year}
        setValue={(text) => setYear(text)}
        type="number"
        caption="Examination Year"
        captionAlignment="center"
        width="w-60"
        className="mb-4"
      />

      {subjects.map((subject, index) => (
        <ResultsField
          key={index}
          handleSubjectChange={(text) => handleSubjectChange(text, index)}
          handleGradeChange={(text) => handleGradeChange(text, index)}
        />
      ))}

      <View className="mt-8 w-80">
        <PrimaryButton
          text={"Next"}
          onClick={() => {
            console.log("Button CLicked");
            onNextClick();
          }}
        />
      </View>

      <View className={`mt-4`}>
        <CircleSet circles={4} currentCircles={4} />
      </View>
    </View>
  );
};
export default ALResults;

import React, { useState } from "react";
import { View } from "react-native";
import TextBox from "./TextBox"; // Adjust the path as necessary
import DropdownBox from "./DropdownBox"; // Adjust the path as necessary

const ResultsField = ({
  handleSubjectChange = () => {},
  handleGradeChange = () => {},
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [grade, setGrade] = useState("");

  const dropdownOptions = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "S", value: "S" },
    { label: "F", value: "F" },
  ];

  return (
    <View className={`w-full flex flex-row justify-between items-center my-1`}>
      <TextBox
        placeholder="Subject Name"
        value={subjectName}
        setValue={(text) => {
          setSubjectName(text);
          handleSubjectChange(text);
        }}
        type="number"
        captionAlignment="center"
        width=""
        className="flex-grow me-3"
      />
      <DropdownBox
        options={dropdownOptions}
        value={grade}
        setValue={(value) => {
          setGrade(value);
          handleGradeChange(value);
        }}
        placeholder="Grade"
        width="w-1/3"
      />
    </View>
  );
};

export default ResultsField;

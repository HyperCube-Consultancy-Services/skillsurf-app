import React, { useState } from 'react';
import { View } from 'react-native';
import TextBox from './TextBox'; // Adjust the path as necessary
import DropdownBox from './DropdownBox'; // Adjust the path as necessary

const ResultsField = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const dropdownOptions = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'S', value: 'S' },
    { label: 'F', value: 'F' },
  ];

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextBox /* Props for TextBox */ />
      <DropdownBox
        options={dropdownOptions}
        value={selectedValue}
        setValue={setSelectedValue}
        placeholder="Select Grade"
      />
    </View>
  );
};

export default ResultsField;
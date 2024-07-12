import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropdownBox = ({
  options = [], // Mandatory
  placeholder = "Select", // Mandatory
  value = "", // Mandatory
  setValue = () => {}, // Mandatory
  width = "w-full", // Optional
  caption = false, // Optional. Default is false. If there is a caption, provide a string.
  captionAlignment = "center", // Optional. Default is center. Possible values are 'start', 'center', 'end'.
  search = false, // Optional. Default is false. If true, search bar will be shown.
  className = "", // Optional - For margins
}) => {
  return (
    <View
      className={`${width} flex flex-col items-${captionAlignment} ${className}`}
    >
      {caption && (
        <Text className="text-black-400 text-md mb-2">Select an option</Text>
      )}
      <Dropdown
        style={{
          width: "100%",
          height: 40,
          borderColor: "#E0E0E0",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
        }}
        data={options}
        maxHeight={200}
        labelField="label"
        valueField="value"
        search={search}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.selectedTextStyle}
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectedTextStyle: {
    fontSize: 14,
    color: "#000",
  },
  placeholderStyle: {
    fontSize: 14,
    color: "gray",
  },
});

export default DropdownBox;

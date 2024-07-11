import { TouchableOpacity, View, Text } from "react-native";
import colors from "../assets/colors";

const PrimaryButton = ({
  text, // Mandatory
  onClick, // Mandatory
  disabled = false, // Optional. Default is false
}) => {
  return (
    <TouchableOpacity
      className={``}
      onPress={() => {
        onClick();
      }}
    >
      <View
        className={`w-full flex flex-row items-center justify-center py-3 px-4 rounded-md  bg-black-900`}
        disabled={disabled}
      >
        <Text className="text-white font-semibold">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

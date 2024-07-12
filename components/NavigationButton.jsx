import { TouchableOpacity, View, Text } from "react-native";
import colors from "../assets/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const NavigationButton = ({ text, onClick }) => {
  return (
    <TouchableOpacity
      className={``}
      onPress={() => {
        onClick();
      }}
    >
      <View
        className={`flex flex-row items-center justify-center rounded-2xl px-8 py-1.5 border border-black-200 `}
      >
        <FontAwesome name="home" size={20} color={colors.black[500]} />
        <Text className="text-black-500 font-semibold mx-2">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default NavigationButton;

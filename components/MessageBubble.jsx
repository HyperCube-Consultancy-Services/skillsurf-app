import { View, Text } from "react-native";

const MessageBubble = ({
  message = "",
  color = "black-200",
  textColor = "white",
  className = "",
}) => {
  return (
    <View
      className={`flex flex-row justify-center items-center bg-${color} rounded-lg px-4 py-2 ${className}`}
    >
      <Text className={`text-${textColor}`}>{message}</Text>
    </View>
  );
};

export default MessageBubble;

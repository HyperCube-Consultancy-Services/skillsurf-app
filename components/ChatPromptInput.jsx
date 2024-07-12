import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../assets/colors";

const ChatPrompInput = ({ onSend }) => {
  const [prompt, setPrompt] = useState();

  return (
    <View className={`px-4 mt-4`}>
      <View
        className={`flex flex-row justify-between items-center border border-black-200 rounded-lg px-4 py-2`}
      >
        <TextInput
          className={`mr-8 flex-grow`}
          placeholder="Type your answer"
          multiline={true}
          value={prompt}
          onChangeText={(text) => setPrompt(text)}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 10 }}
          onPress={() => {
            onSend(prompt);
            setPrompt("");
          }}
        >
          <Ionicons name="send" size={24} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatPrompInput;

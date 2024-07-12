import { View, Text } from "react-native";
import PanelLayout from "../components/PanelLayout";
import ChatComponent from "../components/ChatComponent";
import Entypo from "react-native-vector-icons/Entypo";
import colors from "../assets/colors";

const ChatScreen = ({ }) => {

    const HeaderContent = () => {
        return (
            <View className="flex-1 justify-center items-center px-4 py-2">
                <Entypo name="chat" size={50} color={colors.white} />
                <Text className="text-white text-3xl font-semibold mt-2">Let’s Know About Yourself</Text>
            </View>
        )
    }
    return (
        <View className={`flex-1`}>
            <View className="flex flex-col justify-center items-center px-4 pt-20 pb-10 bg-secondary rounded-lg">
                <Entypo name="chat" size={50} color={colors.white} />
                <Text className="text-white text-3xl font-semibold mt-2">Let’s Know About Yourself</Text>
            </View>
            <ChatComponent />
        </View>
    )
}

export default ChatScreen;
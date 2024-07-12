import { TouchableOpacity, View, Text } from "react-native";
import colors from "../assets/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Button = ({
    text, 
    onClick, 
    }) => {
    return (
        <TouchableOpacity className={``} onPress={() => { onClick() }}>
            <View className={`w-1/4 flex flex-row items-center justify-center rounded-2xl mx-5 py-1 border border-black-500 `}>
                <FontAwesome name="home" size={20} color="black" />
                <Text className="text-black font-semibold mx-2">{text}</Text>
            </View>
        </TouchableOpacity>
    );
    };
export default Button;
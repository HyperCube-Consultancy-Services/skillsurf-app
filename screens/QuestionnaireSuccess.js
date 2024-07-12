import { View, Text, Image } from "react-native"
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const QuestionnaireSuccess = ({ }) => {
    const navigation = useNavigation();

    return (
        <View className={`flex-1 items-center justify-center bg-white`}>
            <Image
                source={require("../assets/img/questionnaire.jpg")}
                className={`w-60 h-60`}
            />
            <Text className={`mt-8 text-secondary font-semibold text-3xl`}>
                Questionnaire Successful
            </Text>
            <Text className={`mt-2 text-black-500 font-semibold text-lg`}>
                Tap 'Next' to see results
            </Text>
            <View className={`mt-10 w-40`}>
                <PrimaryButton
                    text="Next"
                    onClick={() => {
                        navigation.navigate("CareerPathsScreen");
                    }} />
            </View>
        </View>
    )
}

export default QuestionnaireSuccess;
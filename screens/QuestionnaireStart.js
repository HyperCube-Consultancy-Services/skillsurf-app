import { View, Text, Image } from "react-native"
import PrimaryButton from "../components/PrimaryButton";

const QuestionnaireStart = ({ }) => {
    return (
        <View className={`flex-1 items-center justify-center bg-white px-16`}>
            <Image
                source={require("../assets/img/questionnaire.jpg")}
                className={`w-60 h-60`}
            />
            <Text className={`mt-8 text-secondary font-semibold text-3xl`}>
                Hello There
            </Text>
            <Text className={`mt-2 text-black-500 font-semibold text-lg text-center`}>
                Before continuing, please follow next pages to answer some questions.
            </Text>
            <Text className={`text-black-500 font-normal text-lg text-center`}>
                These questions will help us to understand you better.
            </Text>
            <View className={`mt-10 w-40`}>
                <PrimaryButton
                    text="Let's Go"
                    onClick={() => { }} />
            </View>
        </View>
    )
}

export default QuestionnaireStart;
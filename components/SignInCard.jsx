import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TextBox from "./TextBox";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const SignInCard = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className={`flex-1 items-center justify-center`}>
      <View className={`w-full flex flex-row justify-center items-center py-8`}>
        <FontAwesome name="user" size={18} color="black" />
        <Text className={`ml-2 text-black-900 text-2xl font-semibold`}>
          SIGN IN
        </Text>
      </View>
      <View className={`w-2/3 flex flex-col items-center justify-center`}>
        <TextBox
          placeholder="Enter your email"
          caption="Email"
          keyboardType="email-address"
          textAlign="center"
          value={email}
          setValue={(text) => setEmail(text)}
          className="my-2"
        />
        <TextBox
          placeholder="Enter your password"
          caption="Password"
          secureTextEntry={true}
          textAlign="center"
          value={password}
          setValue={(text) => setPassword(text)}
          className="my-2"
        />
        <TouchableOpacity className={`w-full`}>
          <Text className={`w-full text-secondary text-md text-right`}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View className="mt-8 w-full">
          <PrimaryButton
            text={"Sign In"}
            onClick={() => {
              console.log("Button CLicked");
              navigation.navigate("QuestionnaireStart");
            }}
          />
        </View>
        <View className="w-full flex flex-row justify-center items-center mt-6">
          <View className="flex-1 border-t border-gray-300"></View>
          <Text className="text-black-300 text-lg px-8">OR</Text>
          <View className="flex-1 border-t border-gray-300"></View>
        </View>
        <View
          className={`w-full flex flex-row justify-center items-center mt-6`}
        >
          <TouchableOpacity>
            <View
              className={`w-16 h-16 px-3 py-3 border border-black-200 rounded-full mx-4`}
            >
              <Image
                source={require("../assets/icons/google.png")}
                className={`w-full h-full rounded-full`}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className={`w-16 h-16 px-3 py-3 border border-black-200 rounded-full mx-4`}
            >
              <Image
                source={require("../assets/icons/facebook.png")}
                className={`w-full h-full rounded-full`}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInCard;

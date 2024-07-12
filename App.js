import "./global.css"
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import TestScreen from './screens/TestScreen';
import SignInScreen from "./screens/SignInScreen";
import QuestionnaireScreen from "./screens/QuestionnaireScreen";
import ChatScreen from "./screens/ChatScreen";
import CareerPathsScreen from "./screens/CareerPathsScreen";
import SingleCareerPathScreen from "./screens/SingleCareerPathScreen";
import QuestionnaireStart from "./screens/QuestionnaireStart";
import QuestionnaireSuccess from "./screens/QuestionnaireSuccess";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="SignInScreen">
              <Stack.Screen name="SignInScreen" component={CareerPathsScreen} options={{ headerShown: false }} />
              <Stack.Screen name="QuestionnaireScreen" component={QuestionnaireScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
              <Stack.Screen name="CareerPathsScreen" component={CareerPathsScreen} options={{ headerShown: false }} />
              <Stack.Screen name="SingleCareerPathScreen" component={SingleCareerPathScreen} options={{ headerShown: false }} />
              <Stack.Screen name="QuestionnaireStart" component={QuestionnaireStart} options={{ headerShown: false }} />
              <Stack.Screen name="QuestionnaireSuccess" component={QuestionnaireSuccess} options={{ headerShown: false }} />
              <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="light" />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

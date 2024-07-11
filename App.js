import "./global.css"
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import TestScreen from './screens/TestScreen';
import SignIn from "./screens/SignIn";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
              <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
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

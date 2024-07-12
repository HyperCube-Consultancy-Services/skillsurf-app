
import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('SignInScreen'); // Replace 'Home' with the name of your target screen
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigation]);

    return (
        <View className="flex-1 items-center justify-center bg-secondary">
            <Image
                source={require("../assets/icon.png")}
                className="w-40 h-40"
            />
        </View>
    );
};

export default SplashScreen;

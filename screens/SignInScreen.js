import React, { useState } from 'react';
import { View, Text } from 'react-native';
import colors from '../assets/colors';
import Foundation from 'react-native-vector-icons/Foundation';
import PanelLayout from '../components/PanelLayout'; // This is the layout component with white panel
import SignInCard from '../components/SignInCard';

const SignInScreen = ({ }) => {
    const HeaderContent = () => {
        return (
            <View className="flex-1 items-center justify-center">
                <Foundation name="social-skillshare" size={70} color={colors.white} />
                <Text className="text-4xl font-bold text-white mt-4">Welcome To SkillSurf</Text>
                <Text className="text-lg text-white mt-2">Your Career Companion</Text>
            </View>
        )
    }

    return (
        <PanelLayout
            panelHeight='h-screen-60'
            // This is the blue content as header content - See HeaderContent above
            headerContent={<HeaderContent />}>
            {/* This is the white content as children */}
            <SignInCard />
        </PanelLayout>
    )
}

export default SignInScreen;
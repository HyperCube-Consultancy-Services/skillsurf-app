import React from 'react';
import { View, Text} from 'react-native';
import PanelLayout from '../components/PanelLayout';
import colors from '../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CareerPathsScreen = ({ }) => {

    const HeaderContent = () => {
        return (
            <View className="flex-1 mx-5">
               <FontAwesome name="user" size={30} color={colors.white} />
               <Text className="text-3xl font-bold text-white mt-4">Good Morning, Sankha</Text>
            </View>
        )
    }

    return (
        <PanelLayout
            panelHeight='h-screen-80'
            // This is the blue content as header content - See HeaderContent above
            headerContent={<HeaderContent />}>
            {/* This is the white content as children */}

            <View className="flex-1 mx-5 mt-10">
                <Text className="text-2xl font-bold text-primary">Recommended Careers</Text>
            </View>
      
    </PanelLayout>
);
    

}

export default CareerPathsScreen;
import React from 'react';
import { View, Text } from 'react-native';
import PanelLayout from '../components/PanelLayout';
import colors from '../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CarreerPaths from '../components/CareerPaths';
import RowCard from '../components/RowCard';
import NavigationButton from '../components/NavigationButton';

const CareerPathsScreen = ({ }) => {

    const HeaderContent = () => {
        return (
            <View className="flex-1 justify-center px-6">
                {/* <FontAwesome name="user" size={30} color={colors.white} /> */}
                <Text className="text-3xl font-bold text-white mt-2">Good Morning, Sankha</Text>
            </View>
        )
    }

    return (
        <PanelLayout
            panelHeight='h-screen-90'
            headerContent={<HeaderContent />}>

            <View className="flex-1 px-5 mt-2">
                <View className={`flex-grow`}>
                    <Text className="text-2xl font-bold text-primary my-2">Recommended Careers</Text>
                    <CarreerPaths topic='Information Technology' description='Most matching' image={require('../assets/icons/IT.png')} />
                    <CarreerPaths topic='Telecommunication Engineering' description='Based on skills' image={require('../assets/icons/IT.png')} />
                    <CarreerPaths topic='Electronics Engineering' description='Based on skills' image={require('../assets/icons/IT.png')} />
                    <CarreerPaths topic='Electrical Engineering' description='Based on interests' image={require('../assets/icons/IT.png')} />
                    <Text className="text-2xl font-bold text-primary mt-6 mb-3">What We Have Identified</Text>
                    <RowCard topic='Indetified Consents' />
                    <RowCard topic='Indetified Historical Skills' />
                    <RowCard topic='Indetified Past Achivements' />
                    <RowCard topic='Indetified Personality' />
                </View>
                <View className="w-full flex justify-center items-center mb-6">
                    <NavigationButton text='Home' onClick={() => { console.log('View All Clicked') }} />
                </View>
            </View>




        </PanelLayout>
    );


}

export default CareerPathsScreen;
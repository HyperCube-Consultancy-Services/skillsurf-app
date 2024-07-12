import React from 'react';
import { View, Text} from 'react-native';
import PanelLayout from '../components/PanelLayout';
import colors from '../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CarreerPaths from '../components/CareerPaths';
import RowCard from '../components/RowCard';
import Button from '../components/Button';

const CareerPathsScreen = ({ }) => {

    const HeaderContent = () => {
        return (
            <View className="flex-1 mx-5">
               <FontAwesome name="user" size={30} color={colors.white} />
               <Text className="text-3xl font-bold text-white mt-2">Good Morning, Sankha</Text>
            </View>
        )
    }

    return (
        <PanelLayout
            panelHeight='h-screen-90'
            // This is the blue content as header content - See HeaderContent above
            headerContent={<HeaderContent />}>
            {/* This is the white content as children */}

            <View className="flex-1 mx-5 mt-1">
                <Text className="text-2xl font-bold text-primary my-2">Recommended Careers</Text>
                <CarreerPaths topic='Information Technology' description='More matching' image={require('../assets/icons/IT.png')}  />
                <CarreerPaths topic='Health Care' description='Based on qualifications' image={require('../assets/icons/IT.png')} />
                <CarreerPaths topic='Business and Finance' description='Based on skills'image={require('../assets/icons/IT.png')} />
                <CarreerPaths topic='Engineering' description='Based on interests' image={require('../assets/icons/IT.png')} />
                <Text className="text-2xl font-bold text-primary mt-3 mb-2">What We Have Identified</Text>
                <RowCard topic='Indetified Consents' />
                <RowCard topic='Indetified Historical Skills' />
                <RowCard topic='Indetified Past Achivements' />
                <RowCard topic='Indetified Personality' />
                <View className="w-full my-5 mx-36">
                    <Button text='Home' onClick={() => { console.log('View All Clicked') }} />
                </View>
            </View>
           
            
            
      
    </PanelLayout>
);
    

}

export default CareerPathsScreen;
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const CarreerPaths = (
    { 
        topic="",
        description="",
        image="",
       
    }
) => {
   

    return (
        <View className="w-full flex flex-row my-2 border border-primary  rounded-lg ">
            <Image source={image} alt="career" className=" w-20 h-20 mx-2 my-1 rounded-md" />
            <View className="flex justify-between p-2">
                <Text className="text-xl font-bold text-primary">{topic}</Text>
                <Text className="text-lg text-secondary">More matching</Text>
                <TouchableOpacity className="w-1/4" style={{ alignSelf: 'flex-end' }}>
                    <Text className="text-md text-secondary">See More
                        <FontAwesome name="chevron-right" size={15} color="black" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CarreerPaths;

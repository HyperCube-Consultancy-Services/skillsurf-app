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
        <View className="w-full flex flex-row my-2 border border-black-500 rounded-lg ">
            <Image source={image} alt="career" className=" w-12 h-12 mx-2 my-1 rounded-md" />
            <View className="flex justify-between p-1 mx-1 my-2">
                <Text className="text-lg font-bold text-primary">{topic}</Text>
                <Text className="text-md text-secondary">More matching</Text>
            </View>
            <TouchableOpacity  style={{  alignSelf: 'flex-end' }}>
                    <Text className="text-sm text-secondary">See More
                        <FontAwesome name="chevron-right" size={15} color="black" />
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CarreerPaths;

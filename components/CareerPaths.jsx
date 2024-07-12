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
        <View className="w-full flex flex-row my-1 border border-black-500 rounded-lg justify-between ">
            
            <View className="flex flex-row p-1 mx-1 my-1">
                <Image source={image} alt="career" className=" w-14 h-14 mx-2 my-2 rounded-md" />
                    <View className="flex flex-col my-1">
                        <Text className="text-lg font-bold text-primary">{topic}</Text>
                        <Text className="text-md text-secondary">More matching</Text>
                    </View>
                   
            </View>                                
            <View className="mt-16 mr-5">
                <TouchableOpacity  style={{alignSelf: 'flex-end' }}>
                        <View className="flex flex-row">
                            <Text className="text-sm text-secondary">See More </Text>
                            <FontAwesome name="chevron-right" size={15} color="black" />
                        </View>                                 
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CarreerPaths;

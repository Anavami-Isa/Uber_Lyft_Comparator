import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import Car from "../images/car.png";

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://drive.google.com/uc?export=view&id=1KFLiSlgjHZxqzDkX-y3940Qnq_8Kw-hN",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "View History",
        image: "https://drive.google.com/uc?export=view&id=183lnHkgLQ5lTTrj4O9jr_JANH1vnVi_4",
        screen: "EatsScreen", // i think i need to create this screen
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style={tw`pl-6 p-2 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}>
                <View style = {tw`${!origin && "opacity-20"}`}>
                    <Image
                    style={{width: 120, height:120, resizeMode: "contain"}}
                    source={{ uri: item.image}}
                    />
                    <Text style={tw`m-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign"/>
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions
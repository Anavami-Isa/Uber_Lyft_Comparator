import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setOrigin } from "../slices/navSlice";

const location =  (place) => {
    lat: "1";
    lng: "1";
}

const data = [
    {
        id: "123",
        icon: "home",
        name: "Home",
        place: "211 Main Street, Columbia, SC",
        location: [{lat: "33.988430",
                    lng: "-81.028640"}]
    },
    {
        id: "456",
        icon: "briefcase",
        name: "Work",
        place: "300 Main Street, Columbia, SC",
        location: [{lat:"33.990260",
                    lng: "-81.028350"}]
    }
]

const NavFavorites = () => {
    const dispatch = useDispatch();
    return (
        <FlatList 
        data={data} 
        keyExtractor={(item) => item.id} 
        ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200`, { height:0.5 }]}/>
        )}
        renderItem={({item: {name, place, icon}}) => (
            <TouchableOpacity
            onPress={(data, details = null) =>{
                dispatch(setOrigin({
                    location: data.location,
                    description: data.place,
                }));
                console.log("hi");
                dispatch(setDestination(null));
            }}
            style={tw`flex-row items-center p-5`}>
                <Icon
                    style ={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{name}</Text>
                    <Text style={tw`text-gray-500`}>{place}</Text>
                </View>
            </TouchableOpacity>
        )}/>
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
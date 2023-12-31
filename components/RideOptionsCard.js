import { useNavigation } from "@react-navigation/native";
import {useState, React} from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1, 
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2, 
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX", 
        multiplier: 1.75, 
        image: "https://links.papareact.com/7pf",
    }
];

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                onPress={() => navigation.navigate("NavigateCard")}
                >
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
            </View>
            <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
            <FlatList data={data} keyExtractor={(item) => item.id}
                renderItem={({item: {id, title, multiplier, image}, item}) => (
                <TouchableOpacity 
                onPress={() => {setSelected(item), 
                    console.log(travelTimeInformation)}}
                style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
                <Image 
                style={{
                    width: 100, 
                    height: 100, 
                    resizeMode: "contain",
                }}
                source={{ uri: image }}
                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>Travel time... </Text>
                </View>
                    <Text style={tw`text-xl`}> Price: $1...</Text>
                </TouchableOpacity>
                )}

            />
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>

            <Text style={tw`text-center text-xl text-white`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
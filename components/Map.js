import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
    const origin = useSelector(selectOrigin);
    console.log(origin);
    return (
        <MapView
        style={tw`flex-1`}
            initialRegion={{
                latitude: 137,
                longitude: -122,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        />
    )
}

export default Map
const styles = StyleSheet.create({});
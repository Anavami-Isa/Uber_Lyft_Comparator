import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
    const dispatch = useDispatch();
    //navigator.geolocation = require('@react-native-community/geolocation'); for current location

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 250, 
                        height: 100, 
                        resizeMode: "contain",
                    }}
                    source={{
                        url: "https://drive.google.com/uc?export=view&id=1zTGLDAIhwjKDPsujPY4tNuSViT8dx0Hj"
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder="Where from?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) =>{
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }));
                        console.log(details);
                        dispatch(setDestination(null));
                    }}
                    // currentLocation={true}
                    // currentLocationLabel='Current Location'
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavOptions/>
                <NavFavorites/>
            </View>
        </SafeAreaView>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});
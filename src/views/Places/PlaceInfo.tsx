import React, {useEffect, useState} from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
import {settings} from "../../config/settings";
const { colors } = config.tokens;

export const PlaceInfo = ({route, navigation}: any) => {
    const { placeId } = route.params;

    const [place, setPlace] = useState({
        name: '',
        street: '',
        city: '',
        hours: '',
        tel: '',
        logo: require('../../assets/users/user1.png')
    });

    useEffect(() => {
        // Fetch place information based on the received placeId
        const fetchPlaceInfo = async () => {
            try {
                const response = await fetch('http://'+ settings.ip +':3000/places/'+ placeId);
                if (response.ok) {
                    const placeData = await response.json();
                    setPlace({
                        name: placeData.name,
                        street: placeData.street,
                        city: placeData.city,
                        hours: placeData.hours,
                        tel: placeData.tel,
                        logo: placeData.logo
                    });
                } else {
                    console.error('Failed to fetch place information');
                }
            } catch (error) {
                console.error('Error during place information fetch:', error);
            }
        };

        fetchPlaceInfo();
    }, [placeId]);


    return (
        <Box  style={{flex:1 ,justifyContent:"center", alignItems:"center", marginVertical:15, borderRadius:55,
            backgroundColor:colors.background}}>

            <View style={{width:'90%',flex:1}}>
                <View style={{width:'45%',borderRadius:90, marginLeft:'5%',alignSelf:'center',marginVertical:30}}>
                    <Image alt={'logo'} source={place.logo} style={styles.card.logo} />
                </View >
                <Text style={{color:colors.white,textAlign:'center',fontSize:20}}> {place.name}</Text>
                <View >
                    <Text style={styles.area}>{place.street}</Text>
                    <Text style={styles.area}>{place.city}</Text>
                    <Text style={styles.area}>{place.hours}</Text>
                    <Text style={styles.area}>{place.tel}</Text>
                </View>


            </View>

        </Box>
    );
};

export default PlaceInfo;


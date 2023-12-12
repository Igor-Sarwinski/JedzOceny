import React, {useState} from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;

export const PlaceInfo = ({navigation}:any) => {
    const [place, setUser] = useState({
        name: 'U rafonixa ',
        address:'ul. Rafonixa 1',
        city:'Ostrowiec Świętokrzyski',
        hrs:'10:00-11:00',
        tel:'997 997 997',
        logo: require('../../assets/users/user1.png'), // Dodaj ścieżkę do twojego pliku z avatarem
        // Dodaj inne dane użytkownika według potrzeb
    });



    return (
        <Box  style={{flex:1 ,justifyContent:"center", alignItems:"center", marginVertical:15, borderRadius:55,
            backgroundColor:colors.background}}>

            <View style={{width:'90%',flex:1}}>
                <View style={{width:'45%',borderRadius:90, marginLeft:'5%',alignSelf:'center',marginVertical:30}}>
                    <Image alt={'logo'} source={place.logo} style={styles.card.logo} />
                </View >
                <Text style={{color:colors.white,textAlign:'center',fontSize:20}}> {place.name}</Text>
                <View >
                    <Text style={styles.area}>{place.address}</Text>
                    <Text style={styles.area}>{place.city}</Text>
                    <Text style={styles.area}>{place.hrs}</Text>
                    <Text style={styles.area}>{place.tel}</Text>
                </View>


            </View>

        </Box>
    );
};

export default PlaceInfo;


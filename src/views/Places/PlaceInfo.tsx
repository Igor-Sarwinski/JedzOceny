import React, {useState} from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;

export const PlaceInfo = ({navigation}:any) => {
    const [user, setUser] = useState({
        name: 'Jarosław ',
        surname:'Wikarek',
        mail:'jestemjebanadziwka@gmail.com',
        city:'Ostrowiec Świętokrzyski',
        avatar: require('../../assets/users/user1.png'), // Dodaj ścieżkę do twojego pliku z avatarem
        // Dodaj inne dane użytkownika według potrzeb
    });

    const handleEditProfile = () => {
        // Obsługa przycisku do edycji profilu
        // Dodaj kod nawigacji do ekranu edycji profilu lub innej logiki
    };

    const handleAddPhoto = () => {
        // Obsługa przycisku do dodawania zdjęcia
        // Tutaj możesz umieścić kod obsługi dodawania zdjęcia
        // Na przykład, otworzyć modal lub nawigować do ekranu do dodawania zdjęcia
    };

    return (
        <Box  style={{flex:1 ,justifyContent:"center", alignItems:"center", marginVertical:15, borderRadius:55,
            backgroundColor:colors.background}}>
            <View style={{width:'90%',flex:1}}>
                <View style={{width:'45%',borderRadius:90, marginLeft:'5%',alignSelf:'center',marginVertical:30}}>
                    <Image alt={'logo'} source={require("../../assets/logo.png")} style={styles.card.logo} />
                </View >
                <View >
                    <Text style={styles.input}>{user.name}</Text>
                    <Text style={styles.input}>{user.surname}</Text>
                    <Text style={styles.input}>{user.mail}</Text>
                    <Text style={styles.input}>{user.city}</Text>
                </View>

                <View style={{ marginLeft:'5%',alignSelf:'center',marginVertical:30, flexDirection:'row'}}>
                    <Pressable style={{...styles.button, marginTop:15,marginRight:20}} onPress={handleAddPhoto}  >
                        <Text style={styles.button.text}>Dodaj Zdjęcie</Text>
                    </Pressable>


                    <Pressable style={{...styles.button, marginTop:15,marginLeft:20}} onPress={handleEditProfile}  >
                        <Text style={styles.button.text}>Edytuj Profil</Text>
                    </Pressable>
                </View>
            </View>

        </Box>
    );
};

export default PlaceInfo;


import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import { View, TouchableOpacity, FlatList, Animated, Linking } from 'react-native';
import {config} from "../../../config/gluestack-ui.config";
import { styles } from './styles';
import { Q } from '@expo/html-elements';
const { colors } = config.tokens;
export const Profile = ({ navigation }: any) => {

    const [user, setUser] = useState({
        name: 'Marcin',
        surname:'Nowak',
        mail:'yngigi@gmail.com',
        city:'Kielce',
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
                <Image alt={'logo'} source={user.avatar} style={styles.card.logo} />
            </View >

            <Text style={styles.area}>{user.name}</Text>
            <Text style={styles.area}>{user.surname}</Text>
            <Text style={styles.area}>{user.mail}</Text>
            <Text style={styles.area}>{user.city}</Text>


            <View style={{ marginLeft:'5%',alignSelf:'center',marginVertical:30, flexDirection:'row'}}>
                <Pressable style={{...styles.button, marginTop:15,marginRight:20}} onPress={handleAddPhoto}  >
                    <Text style={styles.button.text}>Dodaj Zdjęcie</Text>
                </Pressable>


                <Pressable style={{...styles.button, marginTop:15,marginLeft:20}} onPress={()=> navigation.push("Edytuj profil")}  >
                    <Text style={styles.button.text}>Edytuj Profil</Text>
                </Pressable>
            </View>
        </View>

        </Box>
    );
};

export default Profile;

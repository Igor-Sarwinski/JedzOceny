import React, { useState } from 'react';
import { Box, Text, Pressable, Image } from '@gluestack-ui/themed';
import { View, TextInput } from 'react-native';
import { config } from "../../../config/gluestack-ui.config";
import { styles } from './styles';
import {settings} from "../../config/settings"

const { colors } = config.tokens;

export const EditProfile = ({ navigation, route }: any) => {
    const [name, setName] = useState(route.params?.editItem?.name || '');
    const [surname, setSurname] = useState(route.params?.editItem?.surname || '');
    const [mail, setMail] = useState(route.params?.editItem?.mail || '');
    const [password, setPassword] = useState(route.params?.editItem?.password || '');
    const [photo, setPhoto] = useState(route.params?.editItem?.photo || '');
    const [reviews, setReviews] = useState(route.params?.editItem?.reviews || 0);
    const [login, setLogin] = useState(route.params?.editItem?.login || '');

    const handleEditProfile = async () => {
        const editedItem = {
            name: name,
            surname: surname,
            mail: mail,
            password: password,
            photo: photo,
            reviews: reviews,
            login: login,
        };

        // Aktualizacja danych w bazie
        const response = await fetch(`http://${settings.ip}:3000/users/${route.params.editItem.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedItem),
        });

        if (response.ok) {
            // Jeśli aktualizacja zakończyła się sukcesem, przejście do poprzedniego ekranu
            route.params.handleEditProfile(editedItem);
            navigation.goBack();
        } else {
            // Obsługa błędów (możesz dostosować odpowiednio do swoich potrzeb)
            console.error('Błąd aktualizacji danych w bazie');
        }
    };

    return (
        <Box  style={{flex:1 ,justifyContent:"center", alignItems:"center", marginVertical:15, borderRadius:55,
            backgroundColor:colors.background}}>
            <View style={{width:'90%',flex:1}}>
            <View style={{width:'45%',borderRadius:90, marginLeft:'5%',alignSelf:'center',marginVertical:30}}>
                <Image alt={'logo'} source={require("../../assets/logo.png")} style={styles.card.logo} />
            </View >
            <View >
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={{...styles.input,textAlign:'left'}}
                    placeholder="Nazwa"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={{...styles.input,textAlign:'left'}}
                    placeholder="Nazwisko"
                    value={surname}
                    onChangeText={(text) => setSurname(text)}
                />
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={{...styles.input,textAlign:'left'}}
                    placeholder="Mail"
                    value={mail}
                    onChangeText={(text) => setMail(text)}
                />
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={{...styles.input,textAlign:'left'}}
                    placeholder="Haslo"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <View style={{ marginLeft:'5%',alignSelf:'center',marginVertical:30, flexDirection:'row'}}>
                <Pressable style={{...styles.button, marginTop:15,marginRight:20}} onPress={handleEditProfile}  >
                    <Text style={styles.button.text}>Zapisz</Text>
                </Pressable>
            </View>
        </View>
        </Box>
    );
};

export default EditProfile;

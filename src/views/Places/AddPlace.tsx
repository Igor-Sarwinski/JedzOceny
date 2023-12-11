import React, {useState} from 'react';
import {Button, Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
import {Box, Text} from "@gluestack-ui/themed";
const { colors } = config.tokens;

export const AddPlace = ({ navigation, route }:any) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [hours, setHours] = useState('');
    const [phone, setPhone] = useState('');

    const handleAddItem = () => {

        // Dodawanie nowej pozycji do listy w ekranie Lista
        route.params.addItem({ name,city,street,hours,phone });

        // Powrót do ekranu Lista
        navigation.goBack();
    };

    return (
        <Box flex={1} alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
        <View style={{width:'60%'}}>
            <Image style={styles.logo} source={require("../../assets/logo.png")}></Image>
            <Pressable style={{...styles.button,marginBottom:15, width:50,alignSelf:'center'}} >
                <Text style={styles.button.text}>Dodaj Logo</Text>
            </Pressable>
            <TextInput
                placeholderTextColor={'#fff'}
                style={styles.input}
                placeholder="Nazwa restauracji"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                placeholderTextColor={'#fff'}
                style={styles.input}
                placeholder="Miasto"
                value={city}
                onChangeText={(text) => setCity(text)}
            />
            <TextInput
                placeholderTextColor={'#fff'}
                style={styles.input}
                placeholder="Ulica"
                value={street}
                onChangeText={(text) => setStreet(text)}
            />
            <TextInput
                placeholderTextColor={'#fff'}
                style={styles.input}
                placeholder="Godziny otwarcia"
                value={hours}
                onChangeText={(text) => setHours(text)}
            />
            <TextInput
                placeholderTextColor={'#fff'}
                style={styles.input}
                placeholder="Numer telefonu"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                keyboardType={'number-pad'}
            />
            <Pressable style={{...styles.button, marginTop:30,marginBottom:15}} onPress={handleAddItem} >
                <Text style={styles.button.text}>Dodaj</Text>
            </Pressable>
        </View>
        </Box>
    );
};

export default AddPlace;

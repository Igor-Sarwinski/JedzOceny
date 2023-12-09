import React, {useState} from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;

export const Register = ({navigation}:any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const handleLogin = () => {
        if (email === password) {
            navigation.navigate('DrawerNavigation');
        } else {
            alert('Nieprawidłowy login lub hasło');
        }
    };

    return (
        <Box flex={1} alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
            <View>
                <Pressable onPress={()=> navigation.navigate("DrawerNavigation")}>
                    <Text style={styles.button.text}>Skip</Text>
                </Pressable>
                <Image style={{width:133,height:145,alignSelf:'center', marginVertical:35}} source={require("../../assets/logo.png")}></Image>
                <TextInput
                    style={styles.input}
                    placeholder="Imię"
                    placeholderTextColor={'#fff'}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nazwisko"
                    secureTextEntry
                    placeholderTextColor={'#fff'}
                    value={surname}
                    onChangeText={(text) => setSurname(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={'#fff'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Hasło"
                    secureTextEntry
                    placeholderTextColor={'#fff'}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Pressable style={{...styles.button, marginTop:50}} onPress={() => navigation.goBack()}>
                    <Text style={styles.button.text} >Zarejestruj się</Text>
                </Pressable>
            </View>
        </Box>
    );
};

export default Register;


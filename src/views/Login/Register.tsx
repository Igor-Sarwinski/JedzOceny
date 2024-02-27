import React, {useState} from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
import {settings} from "../../config/settings";
const { colors } = config.tokens;

export const Register = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [login, setLogin] = useState('');
    const handleRegister = async () => {
        try {
            const response = await fetch('http://' + settings.ip + ':3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    surname: surname,
                    mail: email,
                    password: password,
                    photo: 'src/assets/user/user1.png',
                    reviews: 0,
                    login: login,
                }),
            });
            console.log(response)
            if (response.ok) {
                // Registration successful, you can navigate or handle it accordingly
                navigation.goBack();
            } else {
                // Registration failed, handle error
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred during registration. Please try again.');
        }
    };


    return (
        <Box flex={1} alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
            <View style={{width:'60%'}}>
                <Image style={{width:133,height:145,alignSelf:'center', marginVertical:35}} source={require("../../assets/logo.png")}></Image>
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    placeholderTextColor={'#fff'}
                    value={login}
                    onChangeText={(text) => setLogin(text)}
                />
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
                <Pressable style={{ ...styles.button, marginTop: 50 }} onPress={handleRegister}>
                    <Text style={styles.button.text} >Zarejestruj się</Text>
                </Pressable>
            </View>
        </Box>
    );
};

export default Register;


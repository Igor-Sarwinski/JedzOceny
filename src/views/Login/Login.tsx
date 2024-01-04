import React, {useState} from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;

export const Login = ({navigation}:any) => {
    //    const handleLogin = () => {
    //     if (email === password) {
    //         navigation.navigate('DrawerNavigation');
    //     } else {
    //         alert('Nieprawidłowy login lub hasło');
    //     }
    // };

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://172.20.10.4:3000/users', {
                method: 'GET',
            });

            const textResponse = await response.text();
            console.log('Response from server:', textResponse);

            const clonedResponse = response.clone();

            const data = await clonedResponse.json();

            if (Array.isArray(data) && data.length > 0) {
                const user = data.find((user) => user.login === login && user.password === password);

                if (user) {
                    console.log('User przed nawigacją:', user);
                    navigation.navigate('DrawerNavigation', {
                        screen: 'HomeNavigation',
                        params: { user: user },
                    });
                } else {
                    alert('Nieprawidłowy login lub hasło');
                }

            } else {
                console.error('Nieprawidłowy format danych z serwera:', data);
                alert('Wystąpił problem z formatem danych z serwera');
            }
        } catch (error) {
            console.error('Błąd logowania:', error);
        }
    };

    return (
        <Box flex={1} alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
            <View style={{width:'60%'}}>
                    <Image style={{width:133,height:145,alignSelf:'center', marginVertical:35}} source={require("../../assets/logo.png")}></Image>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={'#fff'}
                        value={login}
                        onChangeText={(text) => setLogin(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Hasło"
                        secureTextEntry
                        placeholderTextColor={'#fff'}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Pressable style={{...styles.button, marginTop:30,marginBottom:15}}  onPress={handleLogin}>
                        <Text style={styles.button.text}>Zaloguj</Text>
                    </Pressable>
                    <Pressable onPress={()=> alert("Zarejestruj konto lub skontaktuj sie z administartorem")}>
                        <Text style={{color:'#990000', marginBottom: 50 }}>Nie możesz się zalogować ?</Text>
                    </Pressable>
                    <Pressable style={styles.button } onPress={() => navigation.push('Rejestracja')}>
                        <Text style={styles.button.text} >Zarejestruj się</Text>
                    </Pressable>
                </View>
        </Box>
    );
};

export default Login;

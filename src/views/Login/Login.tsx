import React, {useState} from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;
import {settings} from "../../config/settings";
import {useUser} from "../../context/UserContext"

export const Login = ({navigation}:any) => {
    const { userId, updateUser } = useUser();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const ip = settings.ip;
    const handleLogin = async () => {
        try {
            const response = await fetch('http://'+ ip +':3000/users', {
                method: 'GET',
            });

            const textResponse = await response.text();
            console.log('Response from server:', textResponse);

            const clonedResponse = response.clone();

            const data = await clonedResponse.json();

            if (Array.isArray(data) && data.length > 0) {
                const user = data.find((user) => user.login === login && user.password === password);
                console.log(user.id, user.name , user.login )
                if (user) {
                    updateUser(user.id);
                    console.log('User przed nawigacją:', user);
                    navigation.navigate('DrawerNavigation', {
                        screen: 'HomeNavigation',
                        params: { user: user},
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
                    placeholder="Login"
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

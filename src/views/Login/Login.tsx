import React, {useState} from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Image, Pressable, TextInput, View} from "react-native";
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;

export const Login = ({navigation}:any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <View style={{width:'60%'}}>
                    <Image style={{width:133,height:145,alignSelf:'center', marginVertical:35}} source={require("../../assets/logo.png")}></Image>
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

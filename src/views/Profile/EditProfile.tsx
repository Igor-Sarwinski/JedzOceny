import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import {View, TouchableOpacity, FlatList, Animated, Linking, TextInput} from 'react-native';
import {config} from "../../../config/gluestack-ui.config";
import { styles } from './styles';
import { Q } from '@expo/html-elements';
const { colors } = config.tokens;
export const EditProfile = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

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
                <Pressable style={{...styles.button, marginTop:15,marginRight:20}} onPress={handleAddPhoto}  >
                    <Text style={styles.button.text}>Zapisz</Text>
                </Pressable>


                <Pressable style={{...styles.button, marginTop:15,marginLeft:20}} onPress={handleEditProfile}  >
                    <Text style={styles.button.text}>Edytuj zdjęcie</Text>
                </Pressable>
            </View>
        </View>

        </Box>
    );
};

export default EditProfile;
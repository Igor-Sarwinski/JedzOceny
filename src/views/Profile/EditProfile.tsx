import React, {useState} from 'react';
import {Box, Text, Pressable, Image} from '@gluestack-ui/themed';
import {View, TextInput} from 'react-native';
import {config} from "../../../config/gluestack-ui.config";
import { styles } from './styles';
const { colors } = config.tokens;
export const EditProfile = ({ navigation, route }: any) => {
    const [name, setName] = useState(route.params?.editItem?.name || '');
    const [surname, setSurname] = useState(route.params?.editItem?.surname || '');
    const [mail, setMail] = useState(route.params?.editItem?.mail || '');
    const [password, setPassword] = useState(route.params?.editItem?.password || '');

    const handleEditProfile = () => {
        const editedItem = {
            name: name,
            surname: surname,
            mail: mail,
            password: password,
        };
        route.params.handleEditProfile(editedItem);

        navigation.goBack();
    };

    const handleAddPhoto = () => {
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


                <Pressable style={{...styles.button, marginTop:15,marginLeft:20}} onPress={handleAddPhoto}  >
                    <Text style={styles.button.text}>Edytuj zdjęcie</Text>
                </Pressable>
            </View>
        </View>
        </Box>
    );
};

export default EditProfile;

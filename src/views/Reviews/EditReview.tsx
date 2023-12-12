import React, {useState} from 'react';
import {styles} from "./styles";
import {config} from "../../../config/gluestack-ui.config";
import {Box, Text} from "@gluestack-ui/themed";
import {Pressable,Image, TextInput, View} from "react-native";
const { colors } = config.tokens;

export const EditReview = ({ navigation, route }:any) => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');


    return (
        <Box flex={1} alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
            <View style={{width:'60%'}}>
                <Image style={styles.logo} source={require("../../assets/logo.png")}></Image>
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                    placeholder="Nazwa"
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={{...styles.input,height:300,padding:10}}
                    placeholder="Napisz opinię..."
                    value={description}
                    multiline={true}
                    onChangeText={(text) => setDescription(text)}
                />
                <Pressable style={{...styles.button, marginTop:30,marginBottom:15}} onPress={()=> navigation.goBack()} >
                    <Text style={styles.button.text}>Edytuj</Text>
                </Pressable>
            </View>
        </Box>
    );
};

export default EditReview;

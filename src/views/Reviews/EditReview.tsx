import React, { useState } from 'react';
import { styles } from './styles';
import { config } from '../../../config/gluestack-ui.config';
import { Box, Text } from '@gluestack-ui/themed';
import { Pressable, Image, TextInput, View } from 'react-native';
const { colors } = config.tokens;

export const EditReview = ({ navigation, route }: any) => {
    const [description, setDescription] = useState(route.params?.editItem?.description || '');
    const [value, setValue] = useState(route.params?.editItem?.value || '');
    const handleValueChange = (text: string) => {
        // Sprawdzamy, czy wprowadzone dane są liczbą z zakresu 1-5
        const numericValue = parseFloat(text);
        if (numericValue <=0 && numericValue >= 6) {
            alert("Podaj wartość od 0 do 5")

        }
        else{
            setValue(text);
        }
    };
    const handleEdit = () => {
        // Sprawdźmy, czy funkcja jest wywoływana
        console.log('Edytowano:', value, description);



        // Tutaj obsłuż zapis edytowanych wartości, np. zaktualizuj element na liście
        const editedItem = {
            ...route.params.editItem,
            description: description,
            value: value,
        };
        route.params.handleEdit(route.params.index, editedItem);

        // Powrót do ekranu z listą
        navigation.goBack();
    };

    return (
        <Box flex={1} alignItems="center" marginVertical={15} borderRadius={55} backgroundColor={colors.background}>
            <View style={{ width: '60%' }}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
                <Text>{route.params?.editItem?.name}</Text>
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                    placeholder="Wartosc opini(0-5)"
                    value={value}
                    onChangeText={handleValueChange}
                    keyboardType="numeric"

                />
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={{ ...styles.input, height: 'auto', padding: 10 }}
                    placeholder="Napisz opinię..."
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
                <Pressable style={{ ...styles.button, marginTop: 30, marginBottom: 15 }} onPress={handleEdit}>
                    <Text style={styles.button.text}>Edytuj</Text>
                </Pressable>
            </View>
        </Box>
    );
};

export default EditReview;

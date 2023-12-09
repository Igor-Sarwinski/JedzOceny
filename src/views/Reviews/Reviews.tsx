import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import {config} from "../../../config/gluestack-ui.config";
import {Animated, Button, ScrollView, TextInput, View} from "react-native";
import FlatList = Animated.FlatList;
import { styles } from './styles';
const { colors } = config.tokens;

const restaurantData = [
    { name: 'Astana kebab', value: 3.5, description:'Komentarz nr.1, ogo\nlnig]n\ng\ng\nggggggkkldfldkfldk lfdldlfdkdfkdlfkdlfkdlfldkfldklfdklflk lfkdlkfldkfl ld d fd fdfd fd fd fd fd fd fdfd fd fd d fd\n  sd s dobre jedzonko ale moglobyc lepiej', logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja C', value: 1.0, logo: require('../../assets/logo.png') },
    { name: 'Astana', value: 3.5, logo: require('../../assets/users/user1.png') },
    { name: 'Restssracja B', value: 4.75, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja C', value: 3.0, logo: require('../../assets/logo.png') },
    { name: 'Astana       ', value: 1.5, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
    { name: 'Astana', value: 3.5, logo: require('../../assets/logo.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja C', value: 1.0, logo: require('../../assets/users/user1.png') },
    { name: 'Astana', value: 3.5, logo: require('../../assets/users/user1.png') },
    { name: 'Restssracja B', value: 4.75, logo: require('../../assets/logo.png') },
    { name: 'Restauracja C', value: 3.0, logo: require('../../assets/users/user1.png') },
    { name: 'Astana       ', value: 1.5, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
];



// @ts-ignore
const renderItem = ({ item, index, navigation }) => (
    <View key={index} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <View style={styles.card}>
            <View style={{ flexDirection: 'row',flexWrap:'wrap' , alignItems: 'center', marginTop: 20 }}>
                <View style={{ width: '45%', marginLeft: '5%' }}>
                    <Image alt={'logo'} source={item.logo} style={styles.card.logo} />
                </View>
                <View style={{ flexDirection: 'column', width: "40%", marginLeft: '3%' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>Twoja ocena:</Text>
                        <Text style={{ ...styles.text, alignSelf: 'center', fontWeight: 'bold' }}>{item.value}/5 </Text>
                    </View>
                    <Pressable style={styles.button} onPress={() => navigation.push('Edytuj opinię')}>
                        <Text style={styles.button.text}>Edytuj</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.push('Dodaj opinię')}>
                        <Text style={styles.button.text}>Usuń</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ marginLeft:15,marginBottom:20, width: '90%'}}>
                <Text style={styles.text}>{item.description}</Text>
            </View>
        </View>
    </View>
);



export const Reviews = ({navigation}:any) => {
    const [nazwa, setNazwa] = useState('');

    return (
        <Box flex={1} justifyContent="center" alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>

            <View style={{flexDirection: 'row', alignItems: 'center', width:"90%"}}>
                <TextInput
                    style={styles.search}
                    placeholder="Szukaj"
                    placeholderTextColor={colors.white}
                    value={nazwa}
                    onChangeText={(text) => setNazwa(text)}
                    onSubmitEditing={() => {
                        console.log('Wprowadzona wartość:', nazwa);
                    }}
                />
            </View>
            <ScrollView style={{marginTop:10,marginBottom:35}}>
                <View>
                    <FlatList
                        data={restaurantData}
                        renderItem={({ item, index }) => renderItem({ item, index, navigation })}
                        keyExtractor={(item, index) => index.toString()}

                    />
                </View>

            </ScrollView>

        </Box>
    );
};

export default Reviews;

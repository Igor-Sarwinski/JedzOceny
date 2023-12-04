import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import {config} from "../../../config/gluestack-ui.config";
import {Animated, Button, ScrollView, TextInput, View} from "react-native";
import FlatList = Animated.FlatList;
const { colors } = config.tokens;
// @ts-ignore
const restaurantData = [
    { name: 'Astana kebab', value: 3.5,reviews:150 , distance:1.4 , logo: require('../../img/users/user1.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../img/users/user1.png') },
    { name: 'Restauracja C', value: 1.0, logo: require('../../img/logo.png') },
    { name: 'Astana', value: 3.5, logo: require('../../img/users/user1.png') },
    { name: 'Restssracja B', value: 4.75, logo: require('../../img/users/user1.png') },
    { name: 'Restauracja C', value: 3.0, logo: require('../../img/logo.png') },
    { name: 'Astana       ', value: 1.5, logo: require('../../img/users/user1.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../img/users/user1.png') },
    { name: 'Astana', value: 3.5, logo: require('../../img/logo.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../img/users/user1.png') },
    { name: 'Restauracja C', value: 1.0, logo: require('../../img/users/user1.png') },
    { name: 'Astana', value: 3.5, logo: require('../../img/users/user1.png') },
    { name: 'Restssracja B', value: 4.75, logo: require('../../img/logo.png') },
    { name: 'Restauracja C', value: 3.0, logo: require('../../img/users/user1.png') },
    { name: 'Astana       ', value: 1.5, logo: require('../../img/users/user1.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../img/users/user1.png') },
];
// @ts-ignore
const renderItem = ({ item,index,navigation}) => (
    <View  style={{ flexDirection:'row' , justifyContent: 'center', alignItems: 'center'}}>
        <View style={{
            marginTop:10, alignItems: 'center',
            backgroundColor:colors.input , borderWidth:2, borderColor:colors.border,
            borderRadius:5, width:'100%',flexDirection:'row', height:200}}>
            <View style={{width:'45%', marginLeft:'5%'}}>
                <Image alt={'logo'} source={item.logo} style={{ width: 150, height: 150, borderRadius:100, borderWidth:2, borderColor:colors.white }} />
            </View>
            <View style={{ flexDirection:'column', width:"45%", marginRight:'5%' }}>
                <Text style={{ color:colors.white}}>{item.name}</Text>
                <Text style={{ color:colors.white}}>Ocena: {item.value} /5</Text>
                <Text style={{ color:colors.white}}>Liczba opini: {item.reviews}</Text>
                <Text style={{ color:colors.white}}>Do celu: {item.distance} km</Text>
                <Pressable style={{backgroundColor: 'red'}} onPress={() => navigation.push('Stats')}>
                    <Text>Dodaj opinię</Text>
                </Pressable>
            </View>
        </View>
    </View>
);
export const Places = ({navigation}:any) => {
    const [nazwa, setNazwa] = useState('');

    return (
        <Box flex={1} justifyContent="center" alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                    style={{flex: 1, backgroundColor:colors.input ,color:colors.white ,borderColor: colors.border, borderRadius:15 ,borderWidth: 1, padding: 10, margin:10}}
                    placeholder="Szukaj"
                    value={nazwa}
                    onChangeText={(text) => setNazwa(text)}
                    onSubmitEditing={() => {
                        // Tutaj możesz wykonać dowolne działania związane z wartością 'nazwa'
                        console.log('Wprowadzona wartość:', nazwa);
                    }}
                />
                <Pressable style={{backgroundColor: 'red'}} onPress={() => navigation.push('Profile')}>
                    <Text>Dodaj restauracje</Text>
                </Pressable>
            </View>
            <ScrollView>
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

export default Places;

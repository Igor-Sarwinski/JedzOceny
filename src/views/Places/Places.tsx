import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import {config} from "../../../config/gluestack-ui.config";
import {Animated, Button, ScrollView, TextInput, View} from "react-native";
import FlatList = Animated.FlatList;
import { styles } from './styles';
const { colors } = config.tokens;
import { AddReview } from '../Reviews/AddReview';
// @ts-ignore
// const restaurantData = [
//     { name: 'Astana kebab', value: 3.5,reviews:150 , distance:1.4 , logo: require('../../assets/users/user1.png') },
//     { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
//     { name: 'Restauracja C', value: 1.0, logo: require('../../assets/logo.png') },
//     { name: 'Astana', value: 3.5, logo: require('../../assets/users/user1.png') },
//     { name: 'Restssracja B', value: 4.75, logo: require('../../assets/users/user1.png') },
//     { name: 'Restauracja C', value: 3.0, logo: require('../../assets/logo.png') },
//     { name: 'Astana       ', value: 1.5, logo: require('../../assets/users/user1.png') },
//     { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
//     { name: 'Astana', value: 3.5, logo: require('../../assets/logo.png') },
//     { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
//     { name: 'Restauracja C', value: 1.0, logo: require('../../assets/users/user1.png') },
//     { name: 'Astana', value: 3.5, logo: require('../../assets/users/user1.png') },
//     { name: 'Restssracja B', value: 4.75, logo: require('../../assets/logo.png') },
//     { name: 'Restauracja C', value: 3.0, logo: require('../../assets/users/user1.png') },
//     { name: 'Astana       ', value: 1.5, logo: require('../../assets/users/user1.png') },
//     { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
// ];



// @ts-ignore

export const Places = ({navigation}:any) => {
    const [list, setList] = useState([]);
    const reviews = 1;
    const value = 3;
    const distance = 2;
    const handleAddItem = (newItem: any) => {
        // @ts-ignore
        setList([...list, newItem]);
    };
    const handleAddReview = (newItem: any) => {
        // @ts-ignore
        setList([...listReview, newItem]);
    };
    const renderItem = ({ item,index,navigation}:any) => (
        <View  style={{ flexDirection:'row' , justifyContent: 'center', alignItems: 'center',marginTop:0}}>
            <View style={styles.card}>
                <View style={{width:'45%', marginLeft:'5%'}}>
                   <Image alt={'logo'} source={require("../../assets/logo.png")} style={styles.card.logo} />
                </View>
                <View style={{ flexDirection:'column', width:"40%",marginLeft:'3%' }}>
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>Ocena: {item.value} /5</Text>
                        <Text style={styles.text}>Liczba opini: {item.reviews}</Text>
                        <Text style={styles.text}>Do celu: {item.distance} km</Text>
                    </View>
                    <Pressable style={styles.button} onPress={() => navigation.push('Dodaj opinię', { addItem: handleAddReview })}>
                        <Text style={styles.button.text} >Dodaj opinię</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );

    const [nazwa, setNazwa] = useState('');

    return (
        <Box flex={1} justifyContent="center" alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
<Pressable>
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
                <Pressable
                    style={styles.button}
                    onPress={ () => navigation.push('Dodaj restaurację',{ addItem: handleAddItem })}
                >
                    <Text style={styles.button.text}>Dodaj restauracje</Text>
                </Pressable>
            </View>
            <ScrollView style={{marginTop:10,marginBottom:35}}>
                <View>
                    <FlatList
                        data={list}
                        renderItem={({ item, index }) => renderItem({ item, index, navigation })}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </ScrollView>
</Pressable>
        </Box>
    );
};

export default Places;

import React, {useEffect, useState} from 'react';
import {Box, Text, Pressable, Image} from '@gluestack-ui/themed';
import {config} from "../../../config/gluestack-ui.config";
import {Animated, ScrollView, TextInput, View} from "react-native";
import FlatList = Animated.FlatList;
import { styles } from './styles';
const { colors } = config.tokens;
import {settings} from "../../config/settings";

export const Places = ({navigation}:any) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const ip = settings.ip;
    // Funkcja do pobierania danych z bazy danych JSON
    const fetchPlaces = async () => {
        try {
            const response = await fetch('http://'+ ip +':3000/places');
            const data = await response.json();
            setList(data);
            setLoading(false);
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
            setLoading(false);
        }
    };
    const addPlace = async (newPlace: any) => {
        try {
            const response = await fetch('http://'+ ip +':3000/places', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPlace),
            });

            if (response.ok) {
                // Pobranie zaktualizowanej listy miejsc po dodaniu nowego
                fetchPlaces();
            } else {
                console.error('Błąd podczas dodawania miejsca');
            }
        } catch (error) {
            console.error('Błąd podczas dodawania miejsca:', error);
        }
    };

    const handleAddReview = (newItem: any) => {
        // @ts-ignore
        setList([...listReview, newItem]);
    };

    useEffect(() => {
        fetchPlaces();
    }, []); // useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu


    const renderItem = ({ item,index,navigation}:any) => (
        <View  style={{ flexDirection:'row' , justifyContent: 'center', alignItems: 'center',marginTop:0}}>
            <View style={styles.card}>
                <View style={{width:'45%', marginLeft:'5%'}}>
                    <Pressable onPress={() => navigation.push("Informacje o restauracji", { placeId: item.id })}>
                   <Image alt={'logo'} source={require("../../assets/logo.png")} style={styles.card.logo} />
                </Pressable>
                </View>

                <View style={{ flexDirection:'column', width:"40%",marginLeft:'3%' }}>

                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>Ocena: {item.value} /5</Text>
                        <Text style={styles.text}>Liczba opini: {item.reviews}</Text>
                    </View>
                    <Pressable style={styles.button} onPress={() => navigation.push('Dodaj opinię', { addItem: handleAddReview })}>
                        <Text style={styles.button.text} >Dodaj opinię</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );

    const [nazwa, setNazwa] = useState('');

    if (loading) {
        return (
            <Box flex={1} justifyContent="center" alignItems="center">
                <Text>Ładowanie danych...</Text>
            </Box>
        );
    }
    return (
        <Box flex={1} justifyContent="center" alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
            <View style={{flexDirection: 'row', alignItems: 'center', width:"50%",marginTop:60}}>
            <View style={{width:'51%'}}>

            </View>
                <Pressable
                    style={styles.button}
                    onPress={ () => navigation.push('Dodaj restaurację',{ addItem: addPlace })}
                >
                    <Text style={styles.button.text}>Dodaj restauracje</Text>
                </Pressable>

            </View>
            <View style={{marginTop:10,marginBottom:80}}>
                <View>
                    <FlatList
                        data={list}
                        renderItem={({ item, index }) => renderItem({ item, index, navigation })}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </View>
        </Box>
    );
};

export default Places;

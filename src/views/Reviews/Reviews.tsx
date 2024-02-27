import React, {useEffect, useState} from 'react';
import {Box, Text, Pressable, Image} from '@gluestack-ui/themed';
import {config} from "../../../config/gluestack-ui.config";
import {Animated, ScrollView, TextInput, View} from "react-native";
import FlatList = Animated.FlatList;
import { styles } from './styles';
const { colors } = config.tokens;

export const Reviews = ({navigation,route}:any) => {
    const [listReview, setListReview] = useState([]);
    const reviews = 1;
    const value = 3;
    const distance = 2;
    const handleDelete = (index: number) => {
        const newListReview = [...listReview];
        newListReview.splice(index, 1);
        setListReview(newListReview);
    };
    const handleEdit = (index: number, editedItem: any) => {
        const newListReview = [...listReview];
        newListReview[index] = editedItem;
        setListReview(newListReview);
    };

    useEffect(() => {
        // Check if there's a new item passed as a parameter
        const newItem = route.params?.newItem;
        if (newItem) {
            setListReview([...listReview, newItem]);
        }
    }, [route.params?.newItem]);
    const renderItem = ({ item, index, navigation }:any) => (
        <View key={index} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row',flexWrap:'wrap' , alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: '45%', marginLeft: '5%' }}>
                        <Image alt={'logo'} source={require('../../assets/logo.png')} style={styles.card.logo} />
                    </View>
                    <View style={{ flexDirection: 'column', width: "40%", marginLeft: '3%' }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.text}>Nazwa</Text>
                            <Text style={styles.text}>Twoja ocena:</Text>
                            <Text style={{ ...styles.text, alignSelf: 'center', fontWeight: 'bold' }}>{item.value}/5 </Text>
                        </View>
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.push('Edytuj opinię', {
                                editItem: item,
                                index: index,
                                handleEdit: handleEdit,
                        })}>
                            <Text style={styles.button.text}>Edytuj</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => handleDelete(index)}>
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

    const [nazwa, setNazwa] = useState('');

    return (
        <Box flex={1} justifyContent="center" alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>

            <View>
                <View style={{marginTop:10,marginBottom:80}}>
                    <FlatList
                        data={listReview}
                        renderItem={({ item, index }) => renderItem({ item, index, navigation })}
                        keyExtractor={(item, index) => index.toString()}

                    />
                </View>
            </View>
        </Box>
    );
};

export default Reviews;

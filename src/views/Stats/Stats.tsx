import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import { View, TouchableOpacity, FlatList, Animated, Linking } from 'react-native';
import {config} from "../../../config/gluestack-ui.config";
import { styles } from './styles';
import { Q } from '@expo/html-elements';
const { colors } = config.tokens;
export const Stats = ({ navigation }: any) => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
            <View style={{width:'90%',flex:1}}>
            <View style={{width:'45%', marginLeft:'5%',alignSelf:'center',marginVertical:30}}>
                <Image alt={'logo'} source={require("../../assets/logo.png")} style={styles.card.logo} />
            </View>
            <View style={{backgroundColor:colors.border,
                padding:15,
                borderRadius:10,
                marginBottom:20,
                alignItems:"center"

            }}


            >
                <Text style={styles.text}>Opinie: 2137</Text>
                <Text style={styles.text}>Restauracje: 69</Text>
                <Text style={styles.text}>Opinie: 1337</Text>

            </View>


            <View style={{width:'45%', marginLeft:'5%',alignSelf:'center',marginVertical:30, flexDirection:'row'}}>
                <Pressable onPress={() => (Linking.openURL('https://www.facebook.com/'))}>
                    <Image
                        source={require('../../assets/users/user1.png')}
                        style={{ width: 50, height: 50, marginRight: 20 }}
                    />
                </Pressable>
                <Pressable onPress={() => (Linking.openURL('https://www.instagram.com/'))}>
                    <Image
                        source={require('../../assets/users/user1.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </Pressable>
            </View>


            <View style={{
                    backgroundColor: colors.button,
                    padding: 10,
                    borderRadius: 10,

                    alignItems : "center"
                }}

            >
                <Text style={styles.text}>DEV TEAM:</Text>
                <Text style={styles.text}>Igor Sarwiński</Text>
                <Text style={styles.text}>Łukasz Pysiak</Text>
                <Text style={styles.text}>Paweł Rutkiewicz</Text>
                <Text style={styles.text}>3ID16A</Text>
                <Text style={styles.text}>ver.0.0.1</Text>


            </View>
            </View>
        </Box>
    );
};

export default Stats;
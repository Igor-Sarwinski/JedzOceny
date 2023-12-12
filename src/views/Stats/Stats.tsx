import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import { View, TouchableOpacity, FlatList, Animated, Linking } from 'react-native';
import {config} from "../../../config/gluestack-ui.config";
import { styles } from './styles';
import { Q } from '@expo/html-elements';
const { colors } = config.tokens;
export const Stats = ({ navigation }: any) => {
    return (
        <Box  style={{flex:1 ,justifyContent:"center", alignItems:"center", marginVertical:15, borderRadius:55,
             backgroundColor:colors.background}}>
            <View style={{width:'90%',flex:1}}>

                <Image style={{width:133,height:145,alignSelf:'center', marginVertical:35}} source={require("../../assets/logo.png")}></Image>

            <View style={{backgroundColor:colors.input,
                padding:15,
                borderRadius:10,
                marginBottom:20,
                alignItems:"center"

            }}

            >
                <Text style={styles.text}>Opinie: 2137</Text>
                <Text style={styles.text}>Restauracje: 69</Text>
                <Text style={styles.text}>Opinie: 13377</Text>

            </View>
                <View style={{alignItems:'center'}}>
                <Text style={styles.text}>Social Media:</Text>
                </View>
            <View style={{ alignSelf:'center',marginVertical:30, flexDirection:'row'}}>
                <Pressable onPress={() => (Linking.openURL('https://www.facebook.com/'))}>
                    <Image
                        source={require('../../assets/facebook.png')}
                        style={{ width: 50, height: 50,marginRight:'15%' }}
                    />
                </Pressable>
                <Pressable onPress={() => (Linking.openURL('https://www.instagram.com/'))}>
                    <Image
                        source={require('../../assets/instagram.png')}
                        style={{ width: 50, height: 50,marginRight:'15%' }}
                    />
                </Pressable>
                <Pressable onPress={() => (Linking.openURL('https://github.com/Igor-Sarwinski/JedzOceny'))}>
                    <Image
                        source={require('../../assets/github.png')}
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
import React from 'react';
import { Box, Text, Image,View } from '@gluestack-ui/themed';
import {config} from '../../../config/gluestack-ui.config'
import {Animated, Pressable} from "react-native";
import FlatList = Animated.FlatList;
const { colors } = config.tokens;

const restaurantData = [
    { name: 'Astana', value: 3.5, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja C', value: 1.0, logo: require('../../assets/users/user1.png') },
    { name: 'Astana', value: 3.5, logo: require('../../assets/users/user1.png') },
    { name: 'Restssracja B', value: 4.75, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja C', value: 3.0, logo: require('../../assets/users/user1.png') },
    { name: 'Astana       ', value: 1.5, logo: require('../../assets/users/user1.png') },
    { name: 'Restauracja B', value: 2.75, logo: require('../../assets/users/user1.png') },
];
// @ts-ignore
const renderItem = ({ item,index }) => (
    <View  style={{ flexDirection:'row' , justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginLeft:25,marginRight:25,
            marginTop:10,  flex:1, flexDirection: 'row', alignItems: 'center',
            backgroundColor:colors.input , borderWidth:2, borderColor:colors.border,
            borderRadius:5, justifyContent:'space-between'}}>
           <View style={{ flexDirection:'row',width:220}}>
            <Text style={{ color:colors.white, marginLeft:10}}>{index +1}. </Text>
            <Text style={{ color:colors.white}}>{item.name}</Text>
           </View>
            <Image alt={'logo'} source={item.logo} style={{ width: 33, height: 33 }} />
            <Text style={{color:colors.white, marginRight:10}}>{item.value.toFixed(1)}/5</Text>
        </View>
    </View>
);

const textStyles = {
    maxWidth: 160,
    fontSize:24,
    marginLeft: 25,
    color: colors.white,
    marginRight:25,
};
export const Home = ({navigation}:any) => (
    <View flex={1} marginVertical={15}>
        <View marginBottom={15} backgroundColor={colors.background} height={170} borderRadius={40} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} >
            {/* Imie pobierane z konta */}
            <Text style={textStyles}>Cześć Igor</Text>
            {/* Miasto pobierane z lokalizacji */}
            <Text style={textStyles}>Kielce</Text>
            {/* Liczba opinii to zmienna pobierana*/}
            <Text style={textStyles}>Liczba twoich opini to: 2137</Text>
            <Image alt={'logo'} style={{height:135,width:120,marginLeft:90,borderRadius:30}} source={require('../../assets/users/user1.png')}></Image>
        </View>
        <View backgroundColor={colors.background} flex={1} borderRadius={40} >
            <View alignItems={'center'}>
                <Text style={{fontSize:24,color:colors.white, marginTop:25}}>Najlepiej oceniane</Text>
            </View>
            <View>
                <FlatList
                    data={restaurantData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    </View>
);

export default Home

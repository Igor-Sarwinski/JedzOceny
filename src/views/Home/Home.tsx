import React, { useEffect, useState } from 'react';
import { Box, Text, Image, View } from '@gluestack-ui/themed';
import { config } from '../../../config/gluestack-ui.config';
import { Animated, Pressable } from 'react-native';
import * as Location from 'expo-location';
import FlatList = Animated.FlatList;
import { useUser } from '../../context/UserContext'; // Importuj useUser
import { getUserById } from '../../backend'; // Importuj getUserById

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

const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            marginLeft: 25, marginRight: 25,
            marginTop: 10, flex: 1, flexDirection: 'row', alignItems: 'center',
            backgroundColor: colors.input, borderWidth: 2, borderColor: colors.border,
            borderRadius: 5, justifyContent: 'space-between'
        }}>
            <View style={{ flexDirection: 'row', width: 220 }}>
                <Text style={{ color: colors.white, marginLeft: 10 }}>{index + 1}. </Text>
                <Text style={{ color: colors.white }}>{item.name}</Text>
            </View>
            <Image alt={'logo'} source={item.logo} style={{ width: 33, height: 33 }} />
            <Text style={{ color: colors.white, marginRight: 10 }}>{item.value.toFixed(1)}/5</Text>
        </View>
    </View>
);

const textStyles = {
    maxWidth: 160,
    fontSize: 18,
    marginLeft: 25,
    color: colors.white,
    marginRight: 25,
    textAlign:'left',
};

export const Home = ({ navigation }: any) => {
    const { userId } = useUser();
    const [user, setUser] = useState(null);

    const getCurrentLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return null;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log("lokazliacja:",location)
            return location.coords;
        } catch (error) {
            console.error('Error getting location:', error);
            return null;
        }
    };

    const getCityFromCoordinates = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );

            const data = await response.json();

            if (data.address && data.address.city) {
                return data.address.city;
            } else {
                return 'Nieznane miasto';
            }
        } catch (error) {
            console.error('Error getting city from coordinates:', error);
            return 'Błąd pobierania miasta';
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getUserById(userId);
                console.log('Fetched User:', fetchedUser);
                setUser(fetchedUser);
            } catch (error) {
                console.error('Error fetching user:', error);
                // Handle error
            }
        };

        fetchUser();
    }, [userId]);

    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            const location = await getCurrentLocation();
            setCurrentLocation(location);

            if (location) {
                const city = await getCityFromCoordinates(location.latitude, location.longitude);
                setCurrentLocation(city);
            }
        };

        fetchLocation();
    }, []);

    return (
        <View flex={1} marginVertical={15}>
            <View marginBottom={15} backgroundColor={colors.background} height={170} borderRadius={40} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
                <Text style={textStyles}>Cześć {user?.name || 'Użytkowniku'}</Text>
                <Text style={textStyles}>{currentLocation ? `Lokalizacja: ${currentLocation}` : 'Brak danych o lokalizacji'}</Text>
                <Text style={textStyles}>Opinie: {user?.reviews}</Text>
                <Image alt={'logo'} style={{ height: 135, width: 120, marginLeft: 90, borderRadius: 30 }} source={require('../../assets/users/user1.png')} />
            </View>
            <View backgroundColor={colors.background} flex={1} borderRadius={40}>
                <View alignItems={'center'}>
                    <Text style={{ fontSize: 24, color: colors.white, marginTop: 25 }}>Najlepiej oceniane</Text>
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
};

export default Home;

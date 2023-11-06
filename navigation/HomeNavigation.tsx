import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "../pages/Home";
import Places from '../pages/Places';
import Profile from '../pages/Profile';
import Reviews from '../pages/Reviews';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const HomeNavigation = () => {
    const navigation = useNavigation();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    title: 'Strona główna',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Places"
                component={Places}
                options={{
                    headerShown: false,
                    title: 'Restauracje',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list" color={color} size={size} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault(); // Zapobieganie domyślnej nawigacji na zakładkę
                        // @ts-ignore
                        navigation.navigate('Restauracje');
                    },
                }}
            />
            <Tab.Screen
                name="Reviews"
                component={Reviews}
                options={{
                    headerShown: false,
                    title: 'Recenzje',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="comments" color={color} size={size} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault(); // Zapobieganie domyślnej nawigacji na zakładkę
                        // @ts-ignore
                        navigation.navigate('Recenzje');
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    title: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault(); // Zapobieganie domyślnej nawigacji na zakładkę
                        // @ts-ignore
                        navigation.navigate('Profil');
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeNavigation;

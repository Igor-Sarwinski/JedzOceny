import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "../pages/Home";
import Places from '../pages/Places';
import Profile from '../pages/Profile';
import Reviews from '../pages/Reviews';
import PlacesNavigation from "../navigation/PlacesNavigation"
import { useNavigation } from '@react-navigation/native';
import { config } from '../config/gluestack-ui.config';
import {initialize} from "react-native-gesture-handler/lib/typescript/init";

const { colors } = config.tokens;
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
    const navigation = useNavigation();


    return (
        <Tab.Navigator
            // @ts-ignore
            tabBarOptions={{
                activeTintColor: colors.red,
                inactiveTintColor: colors.backgroundDark600,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Strona główna',
                    headerShown:false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="home" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Places"
                initialParams={{ initialTab: 'Places' }}
                component={PlacesNavigation}
                options={{
                    title: 'Restauracje',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="list" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        // @ts-ignore
                        navigation.navigate('Restauracje',{ screen: 'Places' });
                    },
                }}
            />
            <Tab.Screen
                name="Reviews"
                component={Reviews}
                options={{
                    title: 'Opinie',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="comments" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        // @ts-ignore
                        navigation.navigate('Opinie');
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profil',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="user" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        // @ts-ignore
                        navigation.navigate('Profil');
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeNavigation;

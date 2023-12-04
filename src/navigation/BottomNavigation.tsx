import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "../views/Home/Home";
import Places from '../views/Places/Places';
import Profile from '../views/Profile/Profile';
import Reviews from '../views/Reviews/Reviews';
import { config } from '../../config/gluestack-ui.config';

const { colors } = config.tokens;
const Tab = createBottomTabNavigator();
const tabOptions ={
    tabBarActiveTintColor: colors.red,
    tabBarInactiveTintColor: colors.backgroundDark600
}

// @ts-ignore
export function HomeNavigation ({navigation})  {
    return (
        <Tab.Navigator

            screenOptions={tabOptions}
            // @ts-ignore
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
                        navigation.navigate('Reviews');
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
}

// @ts-ignore
export const PlacesNavigation = ({navigation}) => {


    return (
        <Tab.Navigator
            // @ts-ignore
           screenOptions={tabOptions}
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
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        // @ts-ignore
                        navigation.navigate('Strona główna');
                    },
                }}
            />
            <Tab.Screen
                name="Places"
                component={Places}
                initialParams={{ initialTab: 'Places' }}
                options={{
                    headerShown:false,
                    title: 'Restauracje',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="list" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};



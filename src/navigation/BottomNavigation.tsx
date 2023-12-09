import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Home,Places,Profile,FAQ,Reviews,Stats} from "../views/";
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
                component={ReviewsNavigation}
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
                        navigation.navigate('Opinie',{ screen: 'Reviews' });
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileNavigation}
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
                        navigation.navigate('Profil',{ screen: 'Profile' });
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export const PlacesNavigation = ({navigation}:any) => {


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

export const ReviewsNavigation = ({navigation}:any) => {
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
                name="Reviews"
                component={Reviews}
                initialParams={{ initialTab: 'Reviews' }}
                options={{
                    headerShown:false,
                    title: 'Opinie',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="comments" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export const FAQNavigation = ({navigation}:any) => {
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
                name="FAQ"
                component={FAQ}
                initialParams={{ initialTab: 'FAQ' }}
                options={{
                    headerShown:false,
                    title: 'FAQ',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="book" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export const ProfileNavigation = ({navigation}:any) => {
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
                name="Profile"
                component={Profile}
                initialParams={{ initialTab: 'Profile' }}
                options={{
                    headerShown:false,
                    title: 'Profil',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="id-card" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export const StatsNavigation = ({navigation}:any) => {
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
                name="Stats"
                component={Stats}
                initialParams={{ initialTab: 'Stats' }}
                options={{
                    headerShown:false,
                    title: 'Statystyki',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="signal" color={focused ? colors.red : colors.grey} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

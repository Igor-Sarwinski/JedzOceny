import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Home from "../views/Home/Home";
import Places from '../views/Places/Places';
import Profile from '../views/Profile/Profile';
import React from "react";
import {
    FAQNavigation,
    HomeNavigation,
    PlacesNavigation,
    ProfileNavigation,
    ReviewsNavigation, StatsNavigation
} from "./BottomNavigation";

import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, View, Text, Button} from "react-native";
let isLogged: boolean = true;
import {config} from '../../config/gluestack-ui.config'
import Login from "../views/Login/Login";
const { colors } = config.tokens;
const Drawer = createDrawerNavigator();
const routes = [
    {
        name: "Strona główna",
        screen: HomeNavigation,
        icon: "home",
        ekran:'HomeNavigation'
    },
    {
        name: "Restauracje",
        screen: PlacesNavigation,
        icon: "list",
        ekran:'Places'
    },
    {
        name: "Opinie",
        screen: ReviewsNavigation,
        icon: "comments",
        ekran:'Reviews'
    },
    {
        name: "Profil",
        screen: ProfileNavigation,
        icon: "id-card",
        ekran: 'Profile',


    },
    {
        name: "FAQ",
        screen: FAQNavigation,
        icon: "book",
        ekran: 'FAQ'
    },
    {
        name: "Statystyki",
        screen: StatsNavigation,
        icon: "signal",
        ekran:'Stats'
    },
    {
        name: "Wyloguj się",
        screen: Login,
        icon: null,
    },
];

function CustomDrawerLogo({ logo}:{logo:any}) {
    return (
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <Image alt={'logo'} style={{height:175,width:160}} source={logo} />
        </View>
    );
}
function CustomDrawerContent(props: any) {
    const currentRouteName = props.state.routeNames[props.state.index];

    return (
        <DrawerContentScrollView {...props}>
            <CustomDrawerLogo logo={require('../assets/logo.png')}/>
            {routes.map((route, index) => {
                const isRouteFocused = currentRouteName === route.name;

                return (
                    <DrawerItem
                        key={index}
                        label={route.name}
                        focused={isRouteFocused}

                            onPress={() =>{
                                props.navigation.navigate(route.name,{screen:route.ekran})

                            }}

                        icon={({focused}) => (
                            <Icon
                                // @ts-ignore
                                name={route.icon}
                                color={focused ? colors.red : colors.grey}
                                size={28}
                                style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minWidth:"15%" }}
                            />
                        )}
                        activeBackgroundColor={'#FF000030'}
                        labelStyle={{
                            textAlign: 'left',
                            color: isRouteFocused ? colors.red : colors.grey,
                        }}
                    />
                );
            })}
        </DrawerContentScrollView>
    );
}

// @ts-ignore
export const DrawerNavigation = ({navigation}:any) => {

    return (
        <Drawer.Navigator screenOptions={{headerTitleAlign:'center',}} initialRouteName="Strona główna" drawerContent={props => <CustomDrawerContent {...props} />}>
            {routes.map((route, index) => (
                <Drawer.Screen key={index}  name={route.name} component={route.screen} options={{
                    drawerLabel: route.name,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon
                            // @ts-ignore
                            name={route.icon}
                            color={focused ? colors.red : colors.grey}
                            size={size}
                        />
                    ),
                    headerTintColor: 'white',
                }} />

            ))}

        </Drawer.Navigator>
    );
}
export default DrawerNavigation;




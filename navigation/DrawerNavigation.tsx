import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Home from "../pages/Home";
import Places from '../pages/Places';
import Profile from '../pages/Profile';
import React from "react";
import HomeNavigation from "../navigation/HomeNavigation";
import Reviews from "../pages/Reviews";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, View, Text, Button} from "react-native";
let isLogged: boolean = true;
import {config} from '../config/gluestack-ui.config'
const { colors } = config.tokens;
const Drawer = createDrawerNavigator();
const routes = [
    {
        name: "Strona główna",
        screen: HomeNavigation,
        icon: "home",
    },
    {
        name: "Restauracje",
        screen: Places,
        icon: "list",
    },
    {
        name: "Recenzje",
        screen: Reviews,
        icon: "comments",
    },
    {
        name: "Profil",
        screen: Profile,
        icon: "id-card",
    },
    {
        name: "FAQ",
        screen: HomeNavigation,
        icon: "book",
    },
    {
        name: "Statystyki",
        screen: HomeNavigation,
        icon: "signal",
    },
    {
        name: "Wyloguj się",
        screen: Profile,
        icon: null,
    },
];

function CustomDrawerLogo({ logo}:{logo:any}) {
    return (
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <Image style={{height:175,width:160}} source={logo} />
        </View>
    );
}
function CustomDrawerContent(props: any) {
    const currentRouteName = props.state.routeNames[props.state.index];

    return (
        <DrawerContentScrollView {...props}>
            <CustomDrawerLogo logo={require('../img/logo.png')}/>
            {routes.map((route, index) => {
                const isRouteFocused = currentRouteName === route.name;

                return (
                    <DrawerItem
                        key={index}
                        label={route.name}
                        focused={isRouteFocused}
                        onPress={() => props.navigation.navigate(route.name)}
                        icon={({focused}) => (
                            <Icon
                                name={route.icon}
                                color={focused ? colors.red : colors.grey}
                                size={28}
                                style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}
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
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Strona główna" drawerContent={props => <CustomDrawerContent {...props} />}>
            {routes.map((route, index) => (
                <Drawer.Screen key={index} name={route.name} component={route.screen} options={{
                    drawerLabel: route.name,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon
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




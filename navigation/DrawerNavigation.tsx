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
        name: "Login",
        screen: HomeNavigation,
        icon: "arrow-right",
    },
    {
        name: "Profil",
        screen: Profile,
        icon: "id-card",
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
            <CustomDrawerLogo logo={require('../img/logo.png')} />
            {routes.map((route, index) => (
                <DrawerItem
                    key={index}
                    label={route.name}
                    focused={currentRouteName === route.name} // Ustal, czy element jest zaznaczony
                    onPress={() => props.navigation.navigate(route.name)}
                    icon={({ focused }) => ( // Użyj przekazanego propa focused
                        <Icon
                            name={route.icon}
                            color={focused ? 'red' : 'grey'} // Ustaw kolor ikonki na czerwony, gdy element jest zaznaczony
                            size={28}
                        />
                    )}
                />
            ))}
        </DrawerContentScrollView>
    );
}
const Drawer = createDrawerNavigator();
const colorValue = '#555'; // TEST KOLOR

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
                            color={focused ? 'red' : 'white'}
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




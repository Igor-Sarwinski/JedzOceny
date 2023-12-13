import { createStackNavigator } from '@react-navigation/stack';

import {AddPlace, AddReview, EditReview, Register, Home, Places, Profile, Reviews, Stats, Logout} from "../views";
import {HomeNavigation} from "./BottomNavigation";
import DrawerNavigation from "./DrawerNavigation";
import Login from "../views/Login/Login";
import FAQ from "../views/FAQ/FAQ";
import PlaceInfo from "../views/Places/PlaceInfo"
import React from "react";
import EditProfile from "../views/Profile/EditProfile";
const Stack = createStackNavigator();
const defaultScreenOptions = {
    headerTintColor: 'white', // Ustaw kolor tekstu nagłówka
    headerBackTitle:'Wróć',
    headerBackTitleVisible: true, // Ukryj domyślny napis na przycisku do cofania
    headerTitleAlign:'center',
};
export function StackNavigation() {

    return (
        // @ts-ignore
        <Stack.Navigator screenOptions={defaultScreenOptions}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{headerShown:false }} />
            <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
            <Stack.Screen name="Places" component={Places} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Stats" component={Stats} />
            <Stack.Screen name="Opinie" component={Reviews} />
            <Stack.Screen name="Dodaj opinię" component={AddReview} />
            <Stack.Screen name="Dodaj restaurację" component={AddPlace} />
            <Stack.Screen name="Edytuj opinię" component={EditReview} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Rejestracja" component={Register} />
            <Stack.Screen name="Edytuj profil" component={EditProfile}/>
            <Stack.Screen name="FAQ" component={FAQ} />
            <Stack.Screen name="Informacje o restauracji" component={PlaceInfo} />
            <Stack.Screen name="Wyloguj się" component={Logout} />

        </Stack.Navigator>
    );
}

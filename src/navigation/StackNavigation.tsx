import { createStackNavigator } from '@react-navigation/stack';

import {AddPlace, AddReview, EditReview, Register, Home, Places, Profile, Reviews, Stats} from "../views";
import {HomeNavigation} from "./BottomNavigation";
import DrawerNavigation from "./DrawerNavigation";
import Login from "../views/Login/Login";
import FAQ from "../views/FAQ/FAQ";
import React from "react";
const Stack = createStackNavigator();
const defaultScreenOptions = {
    headerTintColor: 'white', // Ustaw kolor tekstu nagłówka
    headerBackTitle:'Wróć',
    headerBackTitleVisible: true, // Ukryj domyślny napis na przycisku do cofania
};
export function StackNavigation() {
    return (

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
            <Stack.Screen name="FAQ" component={FAQ} />
            
        </Stack.Navigator>
    );
}

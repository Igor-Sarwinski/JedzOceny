import * as React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {config} from './config/gluestack-ui.config'
import {GluestackUIProvider} from "@gluestack-ui/themed";
import DrawerNavigation from "./navigation/DrawerNavigation";

function App() {
    return (
        <GluestackUIProvider config={config}>
        <NavigationContainer theme={DarkTheme}>
           <DrawerNavigation/>
        </NavigationContainer>
        </GluestackUIProvider>
    );
}

export default App;

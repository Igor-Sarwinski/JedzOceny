import * as React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {config} from './config/gluestack-ui.config'
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {StackNavigation} from "./src/navigation/StackNavigation";
import {UserProvider} from "./src/context/UserContext";


function App() {
    return (
        <UserProvider>
        <GluestackUIProvider config={config}>

        <NavigationContainer theme={DarkTheme}>
            <StackNavigation/>
        </NavigationContainer>

        </GluestackUIProvider>
        </UserProvider>
    );
}

export default App;

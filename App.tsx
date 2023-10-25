import {config} from '@gluestack-ui/config';
import {Box, Button, ButtonText, GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {DefaultTheme, NavigationContainer,DarkTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useColorScheme} from "react-native";
import Home from './pages/Home'
import Places from './pages/Places'
import Profile from './pages/Profile'
import Reviews from './pages/Reviews'
const App = () => {
    const Tab = createBottomTabNavigator();
    const scheme = useColorScheme();
    return (
        <GluestackUIProvider config={config}>
            <NavigationContainer theme={DarkTheme}>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: 'Strona główna',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="home" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Places"
                        component={Places}
                        options={{
                            title: 'Restauracje',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="list" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Reviews"
                        component={Reviews}
                        options={{
                            title: 'Recenzje',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="comments" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            title: 'Profil',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="user" color={color} size={size}/>
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </GluestackUIProvider>
    );
};

export default App;


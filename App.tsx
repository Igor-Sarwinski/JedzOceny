import {config} from '@gluestack-ui/config';
import {Box, Button, ButtonText, GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {DefaultTheme, NavigationContainer,DarkTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import {useColorScheme} from "react-native";


const HomeScreen = () => (
    <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Strona główna</Text>
            <Button
                sx={{
                    bg: '$red400',
                }}>
                <ButtonText>Hello world</ButtonText>
            </Button>
    </Box>
);

const DocsScreen = () => (
    <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Dokumentacja</Text>
    </Box>
);

const LearnScreen = () => (
    <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Nauka</Text>
    </Box>
);

const DeployScreen = () => (
    <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Wdrożenie</Text>
    </Box>

);

const Tab = createBottomTabNavigator();

const App = () => {
    const scheme = useColorScheme();
    return (
        <GluestackUIProvider config={config}>
            <NavigationContainer theme={DarkTheme}>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Strona główna',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="home" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Docs"
                        component={DocsScreen}
                        options={{
                            title: 'Dokumentacja',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="book" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Learn"
                        component={LearnScreen}
                        options={{
                            title: 'Nauka',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="graduation-cap" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Deploy"
                        component={DeployScreen}
                        options={{
                            title: 'Wdrożenie',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="rocket" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Deplosy"
                        component={DeployScreen}
                        options={{
                            title: 'Wdrssożenie',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="rocket" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Deplo2y"
                        component={DeployScreen}
                        options={{
                            title: 'Wdrożeni2e',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="rocket" color={color} size={size}/>
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </GluestackUIProvider>
    );
};

export default App;


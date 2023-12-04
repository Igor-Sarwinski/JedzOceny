import React from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import {Pressable, ScrollView, View} from "react-native";

export const Login = ({navigation}:any) => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <ScrollView>
                <View>
                    <Pressable style={{backgroundColor:'red'}} onPress={() => navigation.navigate('DrawerNavigation') }>
                        <Text>Zaloguj</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </Box>
    );
};

export default Login;

import React, { useEffect } from 'react';
import { Text } from 'react-native';

export const Logout = ({ navigation }:any) => {
    useEffect(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }, []);

    return <Text>Wylogowywanie...</Text>;
};

export default Logout;

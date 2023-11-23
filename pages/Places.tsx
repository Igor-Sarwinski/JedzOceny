import React from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import HomeNavigation from "../navigation/HomeNavigation";
import {config} from "../config/gluestack-ui.config";
import {ScrollView} from "react-native";
const { colors } = config.tokens;
// @ts-ignore
const Places = () => (
    <Box flex={1} justifyContent="center" alignItems="center" marginVertical={15}  borderRadius={55} backgroundColor={colors.background}>
        <ScrollView>
            <Text>Restaruacja</Text>
        </ScrollView>

    </Box>
);

export default Places;

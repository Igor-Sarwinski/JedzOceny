import React, {useState} from 'react';
import {Box, Text, Pressable, InputField, Image} from '@gluestack-ui/themed';
import {config} from "../../../config/gluestack-ui.config";
import { styles } from './styles';
const { colors } = config.tokens;

export const FAQ = ({navigation}:any) => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center" marginVertical={15} borderRadius={55}
             backgroundColor={colors.background}>
        </Box>
    );
};

export default FAQ;

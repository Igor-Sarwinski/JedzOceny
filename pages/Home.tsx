import React from 'react';
import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';

const Home = () => (
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

export default Home

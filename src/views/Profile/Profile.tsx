import React, { useEffect, useState } from 'react';
import { Box, Text, Pressable, Image } from '@gluestack-ui/themed';
import { View } from 'react-native';
import { config } from "../../../config/gluestack-ui.config";
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
const { colors } = config.tokens;
import { settings } from '../../config/settings'
import { useUser } from "../../context/UserContext";
import { getUserById } from "../../backend";

export const Profile = ({ navigation }: any) => {
    const { userId } = useUser();
    const [user, setUser] = useState(null);
    const [photoUpdated, setPhotoUpdated] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getUserById(userId);
                console.log('Fetched User:', fetchedUser);
                setUser(fetchedUser);
            } catch (error) {
                console.error('Error fetching user:', error);
                // Handle error
            }
        };

        fetchUser();
    }, [userId, photoUpdated]);

    const handleEditProfile = (editedItem: any) => {
        setUser({ ...user, ...editedItem });
    };

    const handleAddPhoto = async () => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();

            if (status !== 'granted') {
                console.error('Camera permission not granted');
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            console.log('ImagePicker result:', JSON.stringify(result));
            console.log('Result cancelled:', result?.cancelled);
            console.log('Result URI:', result?.uri);

            if (!result.cancelled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
                const randomSuffix = Math.floor(Math.random() * 50000000000);
                const fileName = `user_avatar_${randomSuffix}_${Date.now()}.jpg`;
                const destination = `${FileSystem.documentDirectory}${fileName}`;

                console.log('Trying to move file from', result.assets[0].uri, 'to', destination);

                await FileSystem.moveAsync({
                    from: result.assets[0].uri,
                    to: destination,
                });

                const source = { uri: destination };

                // Przesuń aktualizację stanu użytkownika tutaj
                setUser({ ...user, avatar: source });

                console.log('File moved successfully');
            } else {
                console.log('Image capture cancelled or no URI provided.');
            }
        } catch (error) {
            console.error('Error taking or saving a picture', error);
        }
    };

    return (
        <Box style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: 15, borderRadius: 55, backgroundColor: colors.background }}>
            <View style={{ width: '90%', flex: 1 }}>
                <View style={{ width: '45%', borderRadius: 90, marginLeft: '5%', alignSelf: 'center', marginVertical: 30 }}>
                    <Image alt={'logo'} source={user?.avatar || require("../../assets/users/user1.png")} style={styles.card.logo} />
                </View >

                <Text style={styles.area}>{user?.name}</Text>
                <Text style={styles.area}>{user?.surname}</Text>
                <Text style={styles.area}>{user?.mail}</Text>
                <Text style={styles.area}>Liczba opini: {user?.reviews}</Text>

                <View style={{ marginLeft: '5%', alignSelf: 'center', marginVertical: 30, flexDirection: 'row' }}>
                    <Pressable style={{ ...styles.button, marginTop: 15, marginRight: 20 }} onPress={handleAddPhoto}>
                        <Text style={styles.button.text}>Edytuj Zdjęcie</Text>
                    </Pressable>
                    <Pressable style={{ ...styles.button, marginTop: 15, marginLeft: 20 }} onPress={() => navigation.push("Edytuj profil", { editItem: user, handleEditProfile: handleEditProfile })}>
                        <Text style={styles.button.text}>Edytuj Profil</Text>
                    </Pressable>
                </View>
            </View>
        </Box>
    );
};

export default Profile;

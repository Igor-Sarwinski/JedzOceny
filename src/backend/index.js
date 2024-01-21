// api.js
import {settings} from "../config/settings";
const ip = settings.ip;
const apiUrl = 'http://' + ip + ':3000';

export const getUserById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/users/${userId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

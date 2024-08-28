import React, { useState } from 'react'
import toast from 'react-hot-toast';

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function useRegister() {
    const [loading, setLoading] = useState(false);

    async function register({ username, password, repeatPassword, gender }) {
        const success = handleInputErrors({ username, password, repeatPassword, gender });
        if (!success) {
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(VITE_BACKEND_URL + '/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, repeatPassword, gender })
            });

            const userData = await response.json();
            if (userData.error) {
                throw new Error(userData.error);
            }

        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false);
        }
    };

    return { loading, register };

};

function handleInputErrors({ username, password, repeatPassword, gender }) {
    if (!username || !password || !repeatPassword || !gender) {
        toast.error('Please fill in all the fields');
        return false;
    }

    if (!password !== !repeatPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    return true;

};
import React, { useState } from 'react'
import toast from 'react-hot-toast';

import { useAuthContext } from '../context/AuthContext';

const BACKEND_URL = import.meta.env.VITE_APP_URL;

export default function useRegister() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    async function register({ username, password, repeatPassword, gender }) {
        const success = handleInputErrors({ username, password, repeatPassword, gender });
        if (!success) {
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(BACKEND_URL + '/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, repeatPassword, gender })
            });

            const userData = await response.json();
            if (userData.error) {
                throw new Error(userData.error);
            };

            localStorage.setItem('authUser', JSON.stringify(userData));
            setAuthUser(userData);

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